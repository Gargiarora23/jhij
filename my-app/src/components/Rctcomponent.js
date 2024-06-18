import React from 'react'

export const Rctcomponent = () => {
  return (
    <>
<h2>React Components</h2>
Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, 
but work in isolation and return HTML.
Components come in two types, Class components 
and Function components, in this tutorial we 
will concentrate on Function components.

In older React code bases, you may find Class 
components primarily used. It is now suggested
 to use Function components along with Hooks, 
 which were added in React 16.8. There is an 
 optional section on Class components for your 
 reference.

<h2>Create Your First Component</h2>

When creating a React component, the component's name MUST start with an upper case letter.

<h2>Class Component</h2>

A class component must include the extends React.Component statement. 
This statement creates an inheritance to React.Component, and gives 
your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.
</>
  )
}