import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import OrderDish from './OrderDish.jsx';
import Cart from './Cart.jsx';
import PlaceOrder from './PlaceOrder.jsx';
import OrderSuccess from './OrderSuccess.jsx';
import OrderTracker from './OrderTracker.jsx';

const routes = [
  { path: '/home', component: Home },
  { path: '/menu', component: Menu },
  { path: '/order/:dishId', component: OrderDish },
  { path: '/cart', component: Cart },
  { path: '/placeorder', component: PlaceOrder },
  { path: '/ordersuccess/:orderId', component: OrderSuccess },
  { path: '/trackorder', component: OrderTracker },
  { path: '/issues/:id?', component: IssueList },
  { path: '/edit/:id', component: IssueEdit },
  { path: '/report', component: IssueReport },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;
