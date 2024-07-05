import React from 'react'

export const Virtualdom = () => {
  return (
   <>
   <div className='A'>
  <h1> Virtual DOM</h1>
<p>React uses Virtual DOM exists which is like a lightweight copy of the actual DOM 
  (a virtual representation of the DOM). So for every object that exists in the original 
  DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it 
  does not have the power to directly change the layout of the document. <br/>

Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets 
drawn on the screen. So each time there is a change in the state of our application, 
the virtual DOM gets updated first instead of the real DOM. </p>

<h1>How does virtual DOM actually make things faster?</h1>
<p>When anything new is added to the application, a virtual DOM
   is created and it is represented as a tree. Each element in the 
   application is a node in this tree. So, whenever there is a change 
   in the state of any element, a new Virtual DOM tree is created. 
   This new Virtual DOM tree is then compared with the previous 
   Virtual DOM tree and make a note of the changes. After this, 
   it finds the best possible ways to make these changes to the 
   real DOM. Now only the updated elements will get rendered on 
   the page again.</p>

<h1>How virtual DOM Helps React?</h1>
<p>
In React, everything is treated as a component be it a functional 
component or class component. A component can contain a state. 
Whenever the state of any component is changed react updates 
its Virtual DOM tree. Though it may sound like it is ineffective 
the cost is not much significant as updating the virtual 
DOM doesn’t take much time. <br/>

React maintains two Virtual DOM at each time, one contains the updated 
Virtual DOM and one which is just the pre-update version of this updated
 Virtual DOM. Now it compares the pre-update version with the updated 
 Virtual DOM and figures out what exactly has changed in the DOM like 
 which components have been changed. This process of comparing the 
 current Virtual DOM tree with the previous one is known as ‘diffing’. 
 Once React finds out what exactly has changed then it updates those 
 objects only, on real DOM. <br/>

React uses something called batch updates to update the real DOM. 
It just means that the changes to the real DOM are sent in batches 
instead of sending any update for a single change in the state of 
a component. <br/>

We have seen that the re-rendering of the UI is the most expensive part 
and React manages to do this most efficiently by ensuring that the Real 
DOM receives batch updates to re-render the UI. This entire process of 
transforming changes to the real DOM is called Reconciliation.<br/>

This significantly improves the performance and is the main reason why 
React and its Virtual DOM are much loved by developers all around.
</p>
</div>
   </>
  )
}
