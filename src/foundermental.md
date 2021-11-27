# reactjs.org = official docs of react

react was biult by facebook in 2011
here are other frame works or library of javascript, vues, angular, svelte etc

react is all about component, meaning the ability to piecies our app into chonks of user interface

# download react developer tools

# Node installation = we need minimum of 5.2.0 node version in oder to work with npx create-react-app

in oder to have node in system download node from the web

# root component

# cleanUp boiler plate

# explain how the defference between component and function

# explain jsx

# explain index.js and app.js

# explain why a component and element must have a closing tag

# set prettier code fomater

# adding vs code Json file setting that will allow us have emmit in our jsx

# install Ex7/react/redux/graphic extention

# the rules of jsx

it most return somthing and only one thing
then inside that one thing we can have many things,

# use html semantics

# attribute in react

use camelCase for event and attribute
and class is not allow but className

# close every element

# importance of () in jsx

# nesting component

# a look into react developer tool

# excercise = creat amazon best selling book

# creat external css file and import it

# adding inline css to jsx using the style attribute and javascript object

note inline css is more powerfull than external css

# going back to javascript land in jsx

# props

# props destructuring

# props children

# exercise map over an array of books

# map over array and return a component

then pass the return of the array as props

# key props

react requires a key prop for each item in an array

# event in react

set up a click event on a button, the referrence and inline example

# pass in argument into a click event

# imort and export

# named export and default export

# free hosting using netlify

# UseState Hook

explain why we use useState with title changing example

# example

useState is an array of two item, the value and the function that can change the value and triggers a rerender

# useState is a named import of react

so use the {} when importing

# useState array example

import data from another file and pass it as a value for our state

# useState object example

pass an object direct as our state value,
copy the old value in the object when changing one else it will over ride

# biuld a simple counter using useState

increase the counter, decrease and reset

# useEffect Hook

useEffect allow us to do works outside of component,
and it runs after every render

# adding a dependecy array to useEffect

# useEffect cleanUp function

# fetch data with useEffect

use the dependency array to avoid having infinit loop

# conditional rendering in react

multiple return

# render loading while fetching data

then we display the data when data fetching is successfull
and set loading to false

# short secuit operator and tenary operator

we use short seciut and tenary operator in react
more than if statement

# toggle component in react

importance of cleanUp function,
in other to aviod adding multiple event
listeners

# forms and controlled input

how we can set our input value to also be our state value
and then use the onChange event to write into the input

# multiple input with one value

using the name attribute and object as our state value
we can make many input to have one onChange handler

# useRef hook

useRef is use for targeting the dom element inside the jsx
with the ref arttribute we can asign the refContainer to element
in the jsx

# useReducer hook

use reducer is the same with useState, but to change the value of
the state we most specify an action type, then the action most pass throw the reducer function,this in general means we most pass throw a well structured process in other to be able to change the state value

# prop drilling

prop drilling is the act of passing a data, from one component to the
next till it gets to the particular component that needs it

# useContext hook

useContext with the help of React.createContext
allows us to pass data to any component within the app component

# costom hook and most have the name use

costom hook allows us to create our own hook and reuse it later,
like the use fetch custom hook

# react router dom

first run in the taminal, npm install react-router-dom

in other to use react router dom we will import , browserRouter as router,route and switch from react-router-dom
then import all the component that will save as pages,
then wrap it with router and route and add the path arttribute to it

# navBar component

import link from react-router-dom,then instead of ancur tag
we use the link tag to wrap our nav item and use the to="" arttribute
