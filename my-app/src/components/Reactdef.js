import React from 'react';
import img from './images.jpg';
import img1 from './What-is-React.jpg';
import './React.css';

export const Reactdef = () => {
  return (
    <>
   <h1>REACT JS</h1>
   
   <div className='img'>
   <img src={img} alt='image not found'/> 
    </div>

    <div className='oneslide'>
    <h2>POINTS...</h2>
    <div className='A'>OVERVIEW</div>
    <div className='B'>REACT JSX</div>
    <div className='C'>REACT COMPONENT</div>
    <div className='D'>REACT PROPS</div>
    <div className='E'>REACT STATES</div>
    <div className='F'>REACT EVENTS</div>
    <div className='G'>EVENT HANDLERS</div>
    <div className='H'>REACT CONDITIONAL RENDERING</div>
    <div className='I'>REACT LIST</div>
    </div>

    <div className='image'>
    <img src={img1} alt='image not found'/>
    </div>

    <div className='twoslide'>
        
    <h2>REACT INTRODUCTION</h2>
    <p>
        React JS is a declarative, efficient, and flexible Javascript library for 
        building reusable UI components.
    </p>
    <p>
        open-source components- basrd front end library responsible only for the
        view layer of the application.
    </p>
    <p>
        It Created by Jordan Walke, Who was a Software engineer at Facebook.
    </p>
    <p>
         It was initially developed and maintained by Facebook and was later used in
        its products like WhatsApp & Instagram.
   </p>
   <p>
         Facebook developed ReactJS in 2011 in its newsfeed section, but it was
         released to the public in the month of May 2013.
   </p>
   <p>
         A react JS application is made up of multiple components, each components
         responsible for outputting a small, reusable piece of HTML code.
   </p>
   <p>
    The components are the heart of all React application.
   </p>
   <p>
    These components can be nested with other components to allow complex
    applications to be built of simple building blocks.
   </p>
   <p>
    ReactJS uses Virtual DOM based mechanismto fill data in HTML DOM.
   </p>
   <p>
    The Virtual DOM works fast as it only changes individual DOM elements instead 
    of reloading complete DOM every time.
   </p>
   <p>
    Form components is made up of various input components.
   </p>
 </div>

 <div className='threeslide'>

    <h1>Ways to install react JS</h1>
    <button>Ways to install ReactJS</button>
    <button>Using the npm command</button> <br/> <button>Using the npx command</button>
 </div>

 <div className='Fourthslide'>

    <h1>Install ReactJS (Using the create-react-app)</h1>
    <p>
        Starting a new React Projects is very complicated <br/>
        With so many build tools.<br/>
        Uses many dependencies, configuration files, and other requirements such as Babel,
        webpack, ESLint before writing a single line of React Code. 
    </p>
    <p>
        Create React App CLI tool removes all that complexities and make React app simple.
    </p>
    <p>
        Just install tha Package using NPM, and then run a few simple commands to get a new
        React Projects. 
    </p>
    <p>
        The create-react-app is an excellent tool for beginners, which allows you to create 
        and run React project very quickly.
    </p>
    <p>
        Does not take any configuration manually.
    </p>
    <p>
        This tool is wraping all of the required dependencies like webpack, Babel for React
        project itself and then you need to focus on writing React Code only.
    </p>
   </div>
    
   <div className='Fifthslide'>

    <h1>Install ReactJS (Using the Create-react-app)</h1>
    <h3>MINIMUM REQUIREMENTS:-</h3>
<p>
    1. Node
    2. NPM
</p>
<p>
    Run the following command to check the Node Version in the command prompt.
    $ node-v
</p>
<p>
    Run the following command to check the NPM versionn in the command prompt.
    $ npm-v
</p>
</div>

<div className='sixthslide'>

<h1>Install ReactJS (Using the Create-react-app)</h1>
<p>
<div>Install React & Create a new React Project</div>
C:\Users\folder / npm create-react-app reactproject
</p>
</div>

<div className='seventhslide'>
<h1>Install ReactJS (Using the Create-react-app)</h1>

<p>
    After the React Project is created successfully on our system. Now, we need to 
    start the server so that we can access the application on the browser.Type the
    following command in the terminal window.
    npm start
</p>
<p>
    NPM is a package manager which starts the server and access the application at 
    default server http://localhost:3000
</p>

<img src='img2' alt='image not found'/>
</div>

    </>
  )
}
