
// import {MainLink} from './components/MainLink'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Brainwave } from "./components/Brainwave";
// import { Demos } from "./components/Demos";
// import { Pages } from './components/Pages';
// import { Support } from "./components/Support";
// import { Bootstrap } from './components/Bootstrap';
// import { Navbar } from "./components/Navbar";
// import { Contact } from './components/Contact';
// import { Counter } from './components/Counter';
// import { Prps } from './components/Prps';
// import { Ques } from './components/Ques';
// import { Reactdef } from './components/Reactdef';
// import { Butnques } from './components/Butnques';
// import CodeExample from './components/CodeExample';
// import { Card } from './components/Card';
// import { Apicalling } from './components/Apicalling';
// import Neweffect from './components/Neweffect';
//  import { Reactlink } from './components/Reactlink';
//  import { Reactjs } from "./components/Reactjs";
//  import { Virtualdom } from "./components/Virtualdom";
//  import { Props} from "./components/Props";
//  import {Rctcomponent } from "./components/Rctcomponent";
// import './App.css';
// import { useState } from 'react';
// import { ApiCall } from './components/ApiCall';
// import { NewComponent } from './components/NewComponent';


//  import Portfolio from "./components/Portfolio";
//  import { Usestatehook } from "./components/Usestatehook";




//     const App = () => {
    

//  return (
        
// <div className="App">
   
// <Router>
//     <MainLink/>
//     <Apicalling/>
//           <Routes>
//                  <Route path="/Brainwave" element= {<Brainwave/>}/>
//                  <Route path="/Demos" element= {<Demos/>}/>
//                  <Route path="/Pages" element= {<Pages/>}/>
//                  <Route path="/Support" element= {<Support/>}/>
//                  <Route path="/Contact" element= {<Contact/>}/>
//              <Route path="/Counter" element= {<Counter data={count}  func1={increFunc} func2={decreFunc}/>}/> 
//                  <Route path="/Prps" element= {<Prps/>}/>
//                 <Route path="/Mainlink" element= {<MainLink/>}/> 
//                 <Route path="/" element= {<Bootstrap/>}/> 
//                <Route path="/Navbar" element= {<Navbar/>}/>
//                <Route path="/Ques" element= {<Ques/>}/>
//                <Route path="/Reactdef" element= {<Reactdef/>}/>
//                <Route path="/Butnques" element= {<Butnques/>}/>
//                 <Route path="/CodeExample" element= {<CodeExample/>}/> 
//                 <Route path="/Card" element= {<Card/>}/> 
//                  <Route path="/Neweffect" element= {<Neweffect/>}/> 
//                <Route path="/" element= {<Portfolio/>}/>
//                 <Route path="/Reactlink" element= {<Reactlink/>}/>
//                 <Route path="/Reactjs" element= {<Reactjs/>}/>
//                <Route path="/Virtualdom" element= {<Virtualdom/>}/>
//                 <Route path="/Props" element= {<Props/>}/>
               
               
               
//           </Routes>
    
// </Router>
// </div>

//  );
//   } 
// export default App;
// import React, { useMemo, useState } from "react";

//     const [number, setNumber] = useState(0);
// //     const squaredNum = squareNum(number);
// const squaredNum = useMemo(() => {
//       return squareNum(number);
//   }, [number]);
//     const [counter, setCounter] = useState(0);
 
   
//     const onChangeHandler = (e) => {
//         setNumber(e.target.value);
//     };
 
   
//     const counterHander = () => {
//         setCounter(counter + 1);
//     };
//     return (
//         <div className='text-center p-4 text-9xl font-bold' >
//             <h1>Use Memo Hook</h1>
//             <input
//                 type="number"
//                 placeholder="Enter a number"
//                 value={number}
//                 onChange={onChangeHandler}
//             ></input>
 
//             <div>OUTPUT: {squaredNum}</div>
//             <button onClick={counterHander}>
//                 Counter ++
//             </button>
//             <div>Counter : {counter}</div>
//         </div>
//     );
// }
 
// function squareNum(number) {
//     console.log("Squaring will be done!");
//     return Math.pow(number, 2);
// }
 
import React from 'react'
import { Repo } from './components/Repo';

export const App = () => {
  return (
   <Repo/>
  )
}

export default App;