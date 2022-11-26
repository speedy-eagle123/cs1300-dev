# Development

### Link to Deployed Website
<a>https://speedy-eagle123.github.io/cs1300-dev/</a>

### Goal and Value of the Application

Jeff's Coffee Shop is an up and coming cafe in the providence area. In an effort to drum up some new business, Jeff
has been hard at work building out a sleek new website to offer online ordering. Using the new website, customers
can now purchase drinks online and have them ready when they get to the shop. Jeff can now bring in more revenue
and customers can skip the morning rush lines!

### Usability Principles Considered

The primary usability principle I took into consideration was visual hierarchy. This design principle is most prominant in the item component. I decided to style this component such that the image was the most visually notable part of the component. Since Jeff is trying to sell more coffee, being able to show off the look of his drinks is quite important. By drawing the users attention straight to the delicious images, we can hopefully increase Jeff's sales. <br/>

I also addressed visual hierarchy by making the site adapt to screen sizes. When the window width reaches a certain value, the component layout switches to display the filter view on top of the item list. This was intended to accomodate users of multiple devices. Furthermore, I decided to stack the filters on top of the item list, instead of the other way around, to ensure that the filters are not lost below the content. This is a nice feature of the site, and I didn't want it to go unnoticed.<br/>

I also took into consideration the principle of contrast when designing the background of the Filters and Item components. By making the background an off-white color, I am able to differentiate the components from the page and make them more noticable.

### Organization of Components

Here is a rough tree diagram of the components

* App
  * Header
  * Body
    * Filters
    * Cart
    * ItemList
      * Item

### How Data is Passed Down Through Components

The data for the app is contained within the Body component and passed to the Cart, Filters, and ItemList components as props. For example, lets take a look at the 'hasMilk' state variable. This variable is declared in the Body component with an initial value of 'all'. The hasMilk and setHasMilk state components are then passed to Filters as props. In the Filters componenet, hasMilk is used to determine which input should be checked and the setHasMilk method is used to update the hasMilk state when the input changes. In the Body component, a useEffect hook is used to listen for changes on the hasMilk state and updates the display items accordingly.

### How the User Triggers State Changes

The user can trigger state changes in three ways: modifying the filters, sorting the results, and modifying their cart.
When the user interacts with a filter (tempature or 'contains milk') the state variable corresponding to each filter
is updated with the selected value and causes a rerender. Similarly, when the user adds or removes an item from their cart, the state variable holding cart items is updated and causes the cart to rerender.

