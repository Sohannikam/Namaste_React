// food delivery app component 
/**
 * Header
 * - logo
 * - Nav items
 * Body
 * - Search
 * - Restrauratncontainer
 *      - RestoCards
 *      - Img
 *      - Name of res , star rating , cuisine,delery tie
 * Footer
 * -Copyright
 * -links
 * -Address
 * -Contact
 */


 there are two types of export and import

 - Default Export/Import 

 export default Component;
 import Component from "path";

 - named Export/Import

 export const Component;
 import {Component} from "path";

 # React Hooks
 (Noraml JS utilites function)
- useState() - SuperPowerful state variable in react(whever a state variable changes react will rerender my component)
-useEffect()


# How react works behind scene
react uses reconciliation algorithm also known as ReactFiber react is fast because it do DOM manupulation using virtual DOM.so basically react find outs the diifernce between virtual doms and updates the UI

# useEffect
useEffect gets called after our component get rendered

# Routing in web apps

- Client Side Routing (used in react dont reload the entire page only reload that componetn)

- Server Side Routing(old way fetch the html page and reload the entire page)


# class based component is a component which extends React.component and it has a render method that returns some piece of JSX 

# functional component is a javascript function which returns some piece of jsx

# never update state varaibles directly 