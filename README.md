# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

Jeff's Coffee Shop is an up and coming cafe in the providence area. In an effort to drum up some new business, Jeff
has been hard at work building out a sleek new website to offer online ordering. Using the new website, customers
can now purchase drinks online and have them ready when they get to the shop. Jeff can now bring in more revenue
and customers can skip the morning rush lines!

### Usability Principles Considered

### Organization of Components

Here is a rough tree diagram of the components

* Item 1
* Item 2
* Item 3
  * Sub Item A
  * Sub Item B

App <br/>
&nbsp;&nbsp; Header<br/>
&nbsp;&nbsp; Body<br/>
&nbsp;&nbsp;&nbsp;&nbsp; Filters<br/>
&nbsp;&nbsp;&nbsp;&nbsp; Cart<br/>
&nbsp;&nbsp;&nbsp;&nbsp; ItemList<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Item<br/>

### How Data is Passed Down Through Components

The data for the app is contained within the Body component and passed to the Cart, Filters, and ItemList components as props. For example, lets take a look at the 'hasMilk' state variable. This variable is declared in the Body component with an initial value of 'all'. The hasMilk and setHasMilk state components are then passed to Filters as props. In the Filters componenet, hasMilk is used to determine which input should be checked and the setHasMilk method is used to update the hasMilk state when the input changes. In the Body component, a useEffect hook is used to listen for changes on the hasMilk state and updates the display items accordingly.

### How the User Triggers State Changes

The user can trigger state changes in three ways: modifying the filters, sorting the results, and modifying their cart.
When the user interacts with a filter (tempature or 'contains milk') the state variable corresponding to each filter
is updated with the selected value and causes a rerender. Similarly, when the user adds or removes an item from their cart, the state variable holding cart items is updated and causes the cart to rerender.

