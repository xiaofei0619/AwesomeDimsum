# CS5610 Final Project - Awesome Dimsum
## Member: Xiaofei Chen
This project uses Issue Tracker application in book Pro MERN Stack (2nd Ed) by Vasan Subramanian as a boilerplate. I make it start at the state of the end of Chapter 14.
## Links
Link to my deployed application: 
https://awesomedimsum-ui-xiaofei0619.herokuapp.com
<br/>
Link to deployed API Git repository:
<br/>
https://github.com/xiaofei0619/AwesomeDimsum-api
<br/>
Link to deployed UI Git repository:
<br/>
https://github.com/xiaofei0619/AwesomeDimsum-ui
<br/>

## Final Project Iteration 3 Progress
For Iteration 3, I mainly worked on 1. Let customers fill in pickup information and place order; 2. Display order success page with order ID; 3. Embed Google Map to GetInTouch page; 4. Manage order status by staff; 5. Manage dish stock by staff. Following are the detailed design ideas and screenshots.

**Shopping Cart Page**
<br/>
In Iteration 2, I implememnted the shopping cart page for customers to browse/edit order summary. In this iteration, I made the 'Fill Pickup Info' button to first check if the selected items/amount are still valid. If any item is not valid any more, an alert will show up to ask customers to press 'Refresh Cart' button to update the cart. Otherwise, if all items are valid, customers can move on to fill in pickup info.
<br/>
![PreventOrderWithLowStock](/readme_images/PreventOrderWithLowStock.png)
<br />
Besides of that, I modified the context to store the lastest cart items to local storage. In this case, customers are able to keep their shopping cart items after reloading the webpage.
<br/>

**Fill Pickup Info Page**
<br/>
This page is for cutomers to fill in pickup information, including name, phone, special request and pickup timeslot. It only provide timeslots that are at least 30 minutes after the time customers open this page on the same day. Validations are applied to required name, phone and pickup timeslot. 
<br/>
![PlaceOrderInvalidPhone](/readme_images/PlaceOrderInvalidPhone.png)
<br />
![PlaceOrder](/readme_images/PlaceOrder.png)
<br />

**Order Placed Successfully Page**
<br/>
After submitting the order, the dish stocks will be updated accordingly, and cutomers will be brought to this page showing their order ID and pickup time.
<br />
![SuccessPlaceOrder](/readme_images/SuccessPlaceOrder.png)
<br />

**Track Order Page**
<br/>
This is the page for customers to track their order status/history. If customers enter their names and order ID correctly, the specific order detail will be shown. If customers enter their names and phone numbers correctly, their entire order history will be shown from newest to oldest.
<br />
![trackOrderidName](/readme_images/trackOrderidName.png)
<br />
![trackResult](/readme_images/trackResult.png)
<br />
![trackNamePhone](/readme_images/trackNamePhone.png)
<br />
![trackHistoryResult](/readme_images/trackHistoryResult.png)
<br />
If any information is not correct, it will show an error alert to inform the customers.
<br />
![trackFailed](/readme_images/trackFailed.png)
<br />

**Get In Touch Page**
<br />
This is a page shows contact information, restaurant address and a Google Map. There is a label marker centered on the map. With a click on the marker, it shows some basic information. This is done by creating a new Google Cloud Platform project with Google Maps Javascript API enabled and using the npm module called react-google-maps.
<br />
![GetInTouch](/readme_images/getInTouch.png)
<br />

**Order Manager Page**
<br />
Order Manager Page contains a order filter, a table listing all the orders from oldest to newest and the pagination. The order filter has a combination of order status, pickup time range and text search based on order ID and customer name. I use the DateTimePicker component from rsuite for showing the calendar. The order detail will be shown if a specific table row is clicked.
<br />
![OrderListWithoutLogin](/readme_images/orderlist_notLogin.png)
<br />
Here are some examples when different filters are applied:
<br />
![OrderListFilterTime](/readme_images/orderlist_filterTime.png)
<br />
![OrderListFilterName](/readme_images/orderlist_filterName.png)
<br />
I assume anyone not logged in are customers and anyone logged in are staffs. Only staffs are allowed to change the order status in the popup modal. Any change can be immediately shown in the table.
<br />
![ChangeOrderStatus](/readme_images/changeOrderStatus.png)
<br />
The order table must also be responsive on this page. Here is the screenshot on a phone view:
<br />
![OrderListOnSmallView](/readme_images/OrderListSmall.png)
<br />

**Stock Manager Page**
<br />
This stock manager page contains a text search bar and a table listing all the dish stocks. Any dish contains the word in their dish names or dish descriptions will be shown.
<br />
![StockListFilter](/readme_images/stocklist_filter.png)
<br />
Just like the Order Manager Page, staffs are allowed to modify the stocks in the popup modals. And the updated stock number will be immediately shown in the table.
<br />
![StockListUpdateStock](/readme_images/stocklist_updateStock.png)
<br />
Similarly, the stock table must also be responsive on this page. Here is the screenshot on a phone view:
<br />
![StockListOnSmallView](/readme_images/stocklist_small.png)
<br />

**Future Work**
<br />
At this point, all the functionalities are done. However, since anyone can login, the website can not distinguish who is customer and who is staff. I will need to create a table to store the staff info such that only staffs can view the Order Manager Page and Stock Manager Page.
<br />

**References**
<br />
https://en.wikipedia.org/wiki/Dim_sum
<br />
https://en.wikipedia.org/wiki/Yum_cha
<br />

## Final Project Iteration 2 Progress
For this iteration, I mainly worked on the UI for customers to 1. browse the menu; 2. browse the previous comments for specific dish item; 3. add new review to the comments; 4. add items to shopping cart; 5. view/update order summary in the shopping cart. Following are the screenshots and detailed explainations.

This is the Menu page which shows various categories of dishes. Dishes that are out of stock should show a label "Sold Out". It contains a search bar, which filters the dishes based on dish name or dish description. Menu page is also responsive, here are the screenshots when the window is large, when the window is small, when searching for dish.
<br/>
![Menu_Full](/readme_images/menu_full.png)
<br />
![Menu_Small](/readme_images/menu_sm.png)
<br />
![Menu_Search](/readme_images/menu_search.png)
<br />

This is the Order/:dishId page. If the dish is out of stock, then the customers can not add it to shopping cart. If the stock number is 5, then customers are only allowed to add at most 5 into the shopping cart. Once the dish is added to the cart, it shows the success alert. This page also shows all of comments for this dish with pagination, and a user input form for submitting new review. Once the review inputs are valid, the form can be submitted and immediately show on the comment list. Here are the screenshots related.
<br />
![OrderDishPage](/readme_images/orderDish.png)
<br />
![AddToCart](/readme_images/addToCart.png)
<br />
![AddComment](/readme_images/addComment.png)
<br />

The last part is about shopping cart. To implement the cart, I setup context to include shopping cart items and method for updating these items. 
The navigation bar has a cart icon on the top-right corner. Once the cart is not empty, it shows a badge on top of the icon. When the cart is empty, cart page shows nothing but a link to the menu. When the cart is not empty, it shows the order summary and allows customers to update the amount they want or to delete the items. The subtotal, subtotal after discount, tax and total money are updated at the same time with the changes. In case that the items are sold out or below the amount that cutomers selected before checking out, I setup a refresh button. Once it is clicked, any items that are sold out will be removed from the cart, any items with higher amount than stock will be reduced to the current stock number. Customers will be notified as well.
<br />
![Empty Cart](/readme_images/cartEmpty.png)
<br />
![CartOrderSummary](/readme_images/cart.png)
<br />
![CustomerDeleteItem](/readme_images/cartRemove.png)
<br />
![CartLowStockUpdate](/readme_images/cartLowStock.png)
<br />


## Final Project Iteration 1 Progress
Write scripts to create Atlas MongoDB collections: dishes, stocks, comments, orders, counters.
<br/>
![AtlasMongoDB](/readme_images/AtlasMongoDB.png)
<br />

Update GraphQL schema, create back-end APIs and resolvers. Finish testing all queries and mutations in GraphQL playground.
<br/>
![GraphQLPlaygroundTesting](/readme_images/GraphQLTested.png)
<br />

Upgrade Webpack version, Bootstrap version, React-Bootstrap version to latest, and fix issues realted to the version changes.

Build responsive Home page with Home component and Footer component.
<br/>
![Home page with large screen](/readme_images/Iteration1_lg.png)
<br />
![Home page with small screen](/readme_images/Iteration1_sm.png)
<br />

Fetch Menu data from Atlas during server-side rendering sucessfully.
<br />
![Fetch Menu](/readme_images/FetchMenu.png)
<br />

Deploy the ui and api heroku apps.

Other than React-Bootstrap, I will be using the datetime picker from rsuit (https://www.npmjs.com/package/rsuite).