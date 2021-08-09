import React from 'react';
import URLSearchParams from 'url-search-params';
import {
  Card, Pagination,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';
import store from './store.js';
import CommentList from './CommentList.jsx';

const SECTION_SIZE = 5;

function PageLink({
  params, page, activePage, children,
}) {
  params.set('page', page);
  if (page === 0) return React.cloneElement(children, { disabled: true });
  return (
    <LinkContainer
      isActive={() => page === activePage}
      to={{ search: `?${params.toString()}` }}
    >
      {children}
    </LinkContainer>
  );
}

class OrderDish extends React.Component {
  static async fetchData(match, search, showError) {
    const vars = {};
    const { params: { dishId } } = match;
    const dishIdInt = parseInt(dishId, 10);
    if (!Number.isNaN(dishIdInt)) {
      vars.dishId = dishIdInt;
    }

    const params = new URLSearchParams(search);
    let page = parseInt(params.get('page'), 10);
    if (Number.isNaN(page)) page = 1;
    vars.page = page;

    const query = `query dishDetail(
      $dishId: Int!
      $page: Int
    ) {
      commentList (
        dishId: $dishId
        page: $page
      ) {
        comments {
          id dishId rating comment
          author date
        }
        pages
      }
      dish(dishId: $dishId) {
        dishId name image price description
      }
      stock(dishId: $dishId)
    }`;

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const dish = store.initialData ? store.initialData.dish : null;
    const stock = store.initialData ? store.initialData.stock : 0;
    const comments = store.initialData ? store.initialData.commentList.comments : null;
    const pages = store.initialData ? store.initialData.commentList.pages : 0;

    delete store.initialData;
    this.state = {
      dish,
      stock,
      comments,
      pages,
    };
  }

  componentDidMount() {
    const { comments } = this.state;
    if (comments == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    console.log('Component Did Updated entered...');
    console.log(this.props);
    const {
      location: { search: prevSearch },
      match: { params: { dishId: prevDishId } },
    } = prevProps;

    const {
      location: { search },
      match: { params: { dishId } },
    } = this.props;

    if (prevSearch !== search || prevDishId !== dishId) {
      this.loadData();
    }
  }

  async loadData() {
    const { location: { search }, match, showError } = this.props;
    const data = await OrderDish.fetchData(match, search, showError);
    if (data) {
      this.setState({
        dish: data.dish,
        stock: data.stock,
        comments: data.commentList.comments,
        pages: data.commentList.pages,
      });
    }
  }

  render() {
    const { comments, dish } = this.state;
    if (comments == null || dish == null) return null;

    const { stock, pages } = this.state;
    const { location: { search } } = this.props;

    const params = new URLSearchParams(search);
    let page = parseInt(params.get('page'), 10);
    if (Number.isNaN(page)) page = 1;

    const startPage = Math.floor((page - 1) / SECTION_SIZE) * SECTION_SIZE + 1;
    const endPage = startPage + SECTION_SIZE - 1;
    const prevSection = startPage === 1 ? 0 : startPage - SECTION_SIZE;
    const nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;

    const items = [];
    for (let i = startPage; i <= Math.min(endPage, pages); i += 1) {
      params.set('page', i);
      items.push((
        <PageLink key={i} params={params} activePage={page} page={i}>
          <Pagination.Item>{i}</Pagination.Item>
        </PageLink>
      ));
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Card>
              <Card.Img width="100%" src={dish.image} alt={dish.name} />
              <Card.Body>
                <Card.Text>
                  {dish.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <h3>{dish.name}</h3>
            <h5>{`$${dish.price}`}</h5>
            <h5>{`stock: ${stock}`}</h5>
          </div>
        </div>
        <hr />
        <React.Fragment>
          <CommentList comments={comments} />
          <Pagination>
            <PageLink params={params} page={prevSection}>
              <Pagination.Item>{'<'}</Pagination.Item>
            </PageLink>
            {items}
            <PageLink params={params} page={nextSection}>
              <Pagination.Item>{'>'}</Pagination.Item>
            </PageLink>
          </Pagination>
        </React.Fragment>
      </div>
    );
  }
}

const OrderDishWithToast = withToast(OrderDish);
OrderDishWithToast.fetchData = OrderDish.fetchData;

export default OrderDishWithToast;
