import React from 'react';
import URLSearchParams from 'url-search-params';
import {
  Accordion, Card,
} from 'react-bootstrap';

import StockFilter from './StockFilter.jsx';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';
import store from './store.js';

class StockList extends React.Component {
  static async fetchData(match, search, showError) {
    console.log(match);
    const params = new URLSearchParams(search);
    const vars = {};
    let query = '';
    if (params.get('search') && params.get('search').length >= 3) {
      vars.search = params.get('search');
      query = `query menuList($search: String) {
          menuList(search: $search) {
            id dishId name image category price description
          }
          stockList {
            dishId stock
          }
        }`;
    } else {
      query = `query {
          stockList {
            dishId stock
          }
        }`;
    }
    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    console.log('In StockList constructor..');
    console.log(store.initialData);

    const menuList = store.initialData.menuList ? store.initialData.menuList : store.menuData;
    const stockList = store.initialData ? store.initialData.stockList : null;
    // const mergeList = [];
    // for (let i = 0; i < menuList.length; i += 1) {
    //   mergeList.push({
    //     ...menuList[i],
    //     ...(stockList.find(item => item.dishId === menuList[i].dishId)),
    //   });
    // }
    delete store.initialData;
    this.state = {
      menuList, stockList,
    };
    this.updateStock = this.updateStock.bind(this);
  }

  componentDidMount() {
    const { stockList } = this.state;
    if (stockList == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;

    const {
      location: { search },
    } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const { location: { search }, match, showError } = this.props;
    const data = await StockList.fetchData(match, search, showError);
    if (data) {
      const menuList = data.menuList ? data.menuList : store.menuData;
      const stockList = data.stockList ? data.stockList : null;
      //   const mergeList = [];
      //   for (let i = 0; i < menuList.length; i += 1) {
      //     mergeList.push({
      //       ...menuList[i],
      //       ...(stockList.find(item => item.dishId === menuList[i].dishId)),
      //     });
      //   }
      this.setState({
        menuList, stockList,
      });
    }
  }

  async updateStock(index, newStock) {
    console.log('updateStock called');
    const query = `mutation stockUpdate(
        $dishId: Int!,
        $stock: Int!
      ){
        stockUpdate (
          dishId: $dishId,
          stock: $stock
        ) {
          dishId stock
        }
      }`;
    const { menuList } = this.state;
    const { showError } = this.props;
    const data = await graphQLFetch(
      query,
      { dishId: menuList[index].dishId, stock: newStock },
      showError,
    );
    if (data) {
      this.setState((prevState) => {
        const newList = [...prevState.stockList];
        newList[menuList[index].dishId].stock = data.stockUpdate.stock;
        return { stockList: newList };
      });
    } else {
      this.loadData();
    }
  }

  render() {
    const { stockList } = this.state;
    if (stockList === null) {
      console.log('StockList is null, so it is here');
      return null;
    }
    console.log('in the test render!!!');
    console.log(stockList);

    const { menuList } = this.state;
    const mergeList = [];
    for (let i = 0; i < menuList.length; i += 1) {
      mergeList.push({
        ...menuList[i],
        ...(stockList.find(item => item.dishId === menuList[i].dishId)),
      });
    }
    console.log(mergeList);

    return (
      <div className="container" style={{ marginTop: '25px' }}>
        <React.Fragment>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Search Bar
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <StockFilter urlBase="/stocks" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <hr />
        </React.Fragment>
      </div>
    );
  }
}

const StockListWithToast = withToast(StockList);
StockListWithToast.fetchData = StockList.fetchData;

export default StockListWithToast;
