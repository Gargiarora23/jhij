import React  from 'react'
import './Question.css'

export const Ques = () =>
 {
return (
<>
<h3>QUES1. Difference between “ == “ and “ === “ operators?</h3>
<p>
    Ans:- Both are comparison operators. The difference between both
     the operators is that “==” is used to compare values whereas, 
     “ === “ is used to compare both values and types.
</p>
<div className='col'>
Example:-<br/>
var x = 2;
var y = "2";
(x == y) // Returns true since the value of both x and y is the same
(x === y)// Returns false since the typeof x is "number" and typeof y is "string"
</div>

<h3>QUES2: Name the Company which developed Javascript?</h3>
<p>
Ans:- Netscape developed Javascript.
</p>

<h3>QUES3. Differentiate between slice and splice?</h3>
<p>
  Ans:-<strong>Slice:-</strong> 
  <br/>
  1. It doesn't modify the original array(immutable).<br/>
  2. Returns the subset of the original array.<br/>
  3. It is used to pick the element from the array.<br/>

  <strong>Splice:- </strong>
  <br/>
  1. Modifies the original array(mutable).<br/>
  2. Its returns the deleted elements as an array.<br/>
  3. It is used to insert or delete elements from an array.
</p>

<h3>Ques4: Define arrow functions in Javascript?</h3>
<p>
Ans:- Javascript functions are written using arrow functions, which are clear and concise. An arrow function's general synntax is as follows:-
</p> 

<div className='col'>
  const welcome = () =>
  {
  console.log("welcome to my first page")
  };
</div> 

<h3>Ques5: Define the symbols used for comments in Javascript?</h3>
<p>
  Ans:- The symbols for comments are given below:
</p>
<div className='col'>
// for Single line comments and<br/>

/* Multi<br/>
Line<br/>
Comment<br/>
*/
</div>

<h3>Ques6:-  Is Javascript a case-sensitive language?</h3>
<p>
  Ans:- Yes, Javascript is a case-sensitive language. 
  This means that the keywords,function-name, variable
  name all should be typed with a consistent 
  capitalization of letters. The word let and LET 
  will have different meanings in JS.So while using 
  any variable or keyword, we should keep the case of 
  the letters in mind.
</p>

<h3>Ques7:- Define DOM in Javascript?</h3>
<p>
  ANS:- Document Object Module (DOM) is not 
  a part of Javascript, but it is a web API 
  used to build websites. Using DOM, developers 
  can create documents, navigate through them 
  and modify, add accordingly to the document.
</p>

<h3> QUES8:-What are the limitations of Javascript?</h3>
<p>
  ANS:- 1.It cannot write files on the server.<br/>
  2. Due to security reasons, every web browser provides an option to disable javascript.<br/>
  3. Developers cannot use it for network applications.<br/>
  4. We need AJAX and a server-side script to access Databases<br/>
  5. It is not engine-friendly.<br/>
  6. It cannot access web pages hosted on different domains. 
</p>

<h3> QUES9:- Is javascript a statically typed or a dynamically typed language</h3>
<p>
JavaScript is a dynamically typed language. 
In a dynamically typed language, the type 
of a variable is checked during run-time 
in contrast to a statically typed language, 
where the type of a variable is checked 
during compile-time.
</p>

<h3>QUES10:- What are some advantages of using External JavaScript?</h3>

<p>
External JavaScript is the JavaScript Code 
(script) written in a separate file with the
extension.js, and then we link that file inside 
the head or body element of the HTML file 
where the code is to be placed. 
</p>
<p>
Some advantages of external javascript are
</p>
<p>
1. It allows web designers and developers to collaborate on HTML and javascript files.<br/>
2. We can reuse the code.<br/>
3. Code readability is simple in external javascript.
</p>

<h3>QUES11:- Mention some advantage of javascript?</h3>
<p>
There are many advantages of javascript. Some of them are 
</p>
<p>
1. Javascript is executed on the client-side as well as 
server-side also. There are a variety of Frontend Frameworks 
that you may study and utilize. However, if you want to use 
JavaScript on the backend, you'll need to learn NodeJS. It is 
currently the only JavaScript framework that may be used on 
the backend.<br/>

2. Javascript is a simple language to learn.<br/>
3. Web pages now have more functionality because of Javascript.<br/>
4. To the end-user, Javascript is quite quick.
</p>

<h3>QUES12:- What is ReactJS?</h3>
<p>
  ANS:- 1.React is a JavaScript library for building user interfaces.<br/>
  2.React is used to build single-page applications.<br/>
  3.React allows us to create reusable UI components.
</p>

<h3>QUES13:- Explain the building blocks of React?</h3>
<p>
  ANS:-The five main building blocks of React are:<br/>
  <br/>
        <strong>1.Components:</strong> These are reusable blocks of code that return HTML.<br/>
        <strong>2.JSX: </strong> It stands for JavaScript and XML and allows you to write HTML in React.<br/>
        <strong>3.Props and State:</strong> props are like function parameters and State is similar to variables.<br/>
        <strong>4.Context: </strong>This allows data to be passed through components as props in a hierarchy.<br/>
        <strong>5.Virtual DOM:</strong> It is a lightweight copy of the actual DOM which makes DOM manipulation easier.
</p>

<h3>QUES14:-Explain props and state in React with differences</h3>
<p>
  ANS:-Props are used to pass data from one component to another. 
  The state is local data storage that is local to the component 
  only and cannot be passed to other components.
</p>
<p><strong>PROPS:-</strong>
<br/>
1.The Data is passed from one component to another.	<br/>
2.It is Immutable (cannot be modified).<br/>
3.Props can be used with state and functional components.	<br/>
4.Props are read-only.<br/>
<p>
<strong>STATE:-</strong>
<br/>

	1.The Data is passed within the component only.<br/>
	2.It is Mutable ( can be modified).<br/>
	3.The state can be used only with the state components/class component (Before 16.0).<br/>
	4.The state is both read and write.</p>
  </p>
  
  <h3>QUES15:-What is virtual DOM in React?</h3>
  <p>
  ANS:-React uses Virtual DOM which is like a lightweight copy of the actual DOM
  (a virtual representation of the DOM). So for every object that exists in 
  the original DOM, there is an object for that in React Virtual DOM. It is 
  the same, but it does not have the power to directly change the layout of 
  the document. Manipulating DOM is slow, but manipulating Virtual DOM is 
  fast as nothing gets drawn on the screen. So each time there is a change
  in the state of our application, the virtual DOM gets updated first 
  instead of the real DOM.
  </p>

  <h3>QUES16:-What is JSX?</h3>
  <p>
ANS:-JSX is basically a syntax extension of regular JavaScript and is used to 
create React elements. These elements are then rendered to the React DOM. 
All the React components are written in JSX. To embed any JavaScript expression
 in a piece of code written in JSX we will have to wrap that expression in 
 curly braces {}. 
  </p>
  <div className='col'>
  Example of JSX: The name written in curly braces { } signifies JSX
const name = "Learner";

const element = (
  <h1>
    Hello,
    name.Welcome to GeeksforGeeks.
  </h1>
);
  </div>

  <h3>QUES17:- What are components and their type in React?</h3>
  <p>
  A Component is one of the core building blocks of React. 
  In other words, we can say that every application you will 
  develop in React will be made up of pieces called components. 
  Components make the task of building UIs much easier.<br/>

In React, we mainly have two types of components: <br/>

<strong>Functional Components:</strong> 
<br/>
->Functional components are simply javascript functions.<br/>
->We can create a functional component in React by writing a javascript function. 
<br/>
<strong>Class Components: </strong>
<br/>
->The class components are a little more complex than the functional components.<br/>
->The functional components are not aware of the other components in your program whereas the 
class components can work with each other.<br/>
-> We can pass data from one class component to anotherclass component.
  </p>

  <h3>QUES18:-How do browsers read JSX?</h3>
  <p>
  In general, browsers are not capable of reading JSX and only can read pure JavaScript. 
  The web browsers read JSX with the help of a transpiler. Transpilers are used to convert 
  JSX into JavaScript. The transpiler used is called Babel
  </p>

<h3>QUES19:-What is a key in React?</h3>
<p>
  ANS:-A “key” is a special string attribute you need to include when creating 
  lists of elements in React. Keys are used in React to identify which items in 
  the list are changed, updated, or deleted. In other words, we can say that 
  keys are used to give an identity to the elements in the lists.
</p>

<h3>QUES20:- How to write a comment in React?</h3>
<p>ANS:-There are two ways to write comments in React.
  <br/>

<strong>Multi-line comment: </strong>We can write multi-line comments in React using the asterisk format /* */.<br/>
<strong>Single line comment:</strong> We can write single comments in React using the double forward slash //.
</p>

<h3>
  QUES21:- Explain the use of render method in React?
</h3>
<p>React renders HTML to the web page by using a function called render(). 
  The purpose of the function is to display the specified HTML code inside 
  the specified HTML element. In the render() method, we can read props and 
  state and return our JSX code to the root component of our app</p>

<h3>QUES22:-Explain props in React?</h3>
<p>React allows us to pass information to a Component using something called props
(which stands for properties). Props are objects which can be used inside a component <br/>

We can access any props inside from the component’s class to which the props is passed.<br/> 
The props can be accessed as shown below:
</p>

<div className='col'>
this.props.propName;
</div>

<h3>QUES23:-Explain the difference between functional and class component in React?</h3>
<p>
ANS:-<strong>Functional Components :-</strong>
<br/>                 	                                      
1.A functional component is just a plain JavaScript pure function that accepts props as an argument.<br/>
2.No render method used	.<br/>
3.Also known as Stateless components.<br/>
4.React lifecycle methods (for example, componentDidMount) cannot be used in functional components.<br/>
5.Constructors are not used.
</p>
<p>
<strong>Class Components :-</strong>
<br/>
	1.A class component requires you to extend from React. Component and create a render function <br/>
  2.It must have the render() method returning JSX .<br/>
  3.Also known as Stateful components.<br/>
  4.React lifecycle methods can be used inside class components (for example, componentDidMount).<br/>
  5.Constructor is used as it needs to store state. 
</p>

<h3>QUES24:- What is conditional rendering in React?</h3>
<p>
  ANS:-Conditional rendering in React involves selectively rendering components based on specified 
  conditions. By evaluating these conditions, developers can control which components are displayed, 
  allowing for dynamic and responsive user interfaces in React applications.
</p>


<h3>QUES25:-What is react router?</h3>
<p>ANS:-React Router is a standard library for routing in React. It enables the 
  navigation among views of various components in a React Application, allows 
  changing the browser URL, and keeps the UI in sync with the URL.
</p>
<p>To install react router type the following command.</p>

<div className='col'>
npm i react-router-dom
</div>

<h3>QUES26:-Explain the components of a react-router</h3>
<p>
The main components of a react-router are:<br/>
<strong>1.Router(usually imported as BrowserRouter):</strong>  It is the parent component
that is used to store all of the other components. Everything within this
will be part of the routing functionality<br/>
<strong>2.Switch:</strong> The switch component is used to render only the first route that 
matches the location rather than rendering all matching routes.<br/>
<strong>3.Route: </strong>This component checks the current URL and displays the component 
associated with that exact path. All routes are placed within the switch 
components.<br/>
<strong>4.Link: </strong>The Link component is used to create links to different routes.
</p>

<h3>QUES27:-What are hooks in React?</h3>
<p>
Hooks are a new addition in React 16.8. They let developers use state and 
other React features without writing a class. Hooks doesn’t violate any 
existing React concepts. Instead, Hooks provide a direct API to react 
concepts such as props, state, context, refs and life-cycle 
</p>

<h3>QUES28:- Explain the useState hook in React?</h3>
<p>
The most used hook in React is the useState() hook. It allows functional 
components to manipulate DOM elements before each render. Using this hook 
we can declare a state variable inside a function but only one state variable
can be declared using a single useState() hook. Whenever the useState() hook 
is used, the value of the state variable is changed and the new variable is 
stored in a new cell in the stack.
</p>
<p>
We have to import this hook in React using the following syntax
</p>

<div className='col'>
import useState  from 'react'
</div>

<h3>QUES29:-Explain the useEffect hook in react?</h3>
<p>The useEffect hook in React eliminates the side effect of using class based 
   components. It is used as an alternative to componentDidUpdate() method.
   The useEffect hook accepts two arguments where second argument is optional. 
</p>

<div className='col'>
useEffect(function, dependency)
</div>

<p>
The dependency decides when the component will be updated again after rendering.
</p>

<h3>QUES30:-How does React Work?</h3>
<p>
1.React creates a VIRTUAL DOM in memory.<br/>
2.React only changes what needs to be changed.
</p>

<h3>QUES31:-What is custom hooks in React?</h3>
<p>
Custom hooks are normal JavaScript functions whose names start with “use” and they may call other hooks. We use custom hooks to maintain the DRY concept that is Don’t Repeat Yourself. It helps us to write a logic once and use it anywhere in the code.
</p>

<h3>QUES32:-What are the major features of ReactJS?</h3>
<p>ANS:-The major features of ReactJS are as follows,
<br/>

1.It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.<br/>
2.Supports server-side rendering.<br/>
3.Follows Unidirectional data flow or data binding.<br/>
4.Uses reusable/composable UI components to develop the view.
</p>
</>
  )
}
