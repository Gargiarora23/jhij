
import {MainLink} from './components/MainLink'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Brainwave } from "./components/Brainwave";
import { Demos } from "./components/Demos";
import { Pages } from './components/Pages';
import { Support } from "./components/Support";
// import { Bootstrap } from './components/Bootstrap';
import { Navbar } from "./components/Navbar";
import { Contact } from './components/Contact';
import { Counter } from './components/Counter';
import { Prps } from './components/Prps';
import { Ques } from './components/Ques';
import { Reactdef } from './components/Reactdef';
import { Butnques } from './components/Butnques';
import CodeExample from './components/CodeExample';
import { Card } from './components/Card';
// import Neweffect from './components/Neweffect';
// import { Reactlink } from './components/Reactlink';
// import { Reactjs } from "./components/Reactjs";
// import { Virtualdom } from "./components/Virtualdom";
// import { Props} from "./components/Props";
// import {Rctcomponent } from "./components/Rctcomponent";
import './App.css';
import { useState } from 'react';
import { ApiCall } from './components/ApiCall';
import { NewComponent } from './components/NewComponent';


// import Portfolio from "./components/Portfolio";
// import { Usestatehook } from "./components/Usestatehook";



// function App() {
    const App = () => {
    //     const code =`
    //      const sayHello = () =>
    //      {
    //         console.log('Hello, World!');
    //      };
    //       sayHello();
    //      `;

    //     return (
    //         <div>
    //             <h1>Prism code</h1>
    //             {/* <ApiCall code={code} language="javascript"/> */}
    //             <CodeExample/>
    //             <NewComponent code={code} language="javascript"/>
               
    //         </div>
    //     );
    // };
    
      
//   const [count, setCount] = useState (6);

//   const increFunc =()=>{
//       setCount(count+1)
//   }
//   const decreFunc =()=>{
//       setCount(count-1)
//   }


      //   const handleIncrement = ()=>
//   {
//       setCount (count+1);
//   }
//   <count Data = {count} datafunction = {handleIncrement}/>

//   const [counta, setCounta] = useState ();
//   const handleDecrement = ()=>
//   { 
//       setCount (count-1);
//   }
//   <count Data = {count} datafunction = {handleDecrement}/>

 return (
        
<div className="App">
   
<Router>
    <MainLink/>
          <Routes>
                 <Route path="/Brainwave" element= {<Brainwave/>}/>
                 <Route path="/Demos" element= {<Demos/>}/>
                 <Route path="/Pages" element= {<Pages/>}/>
                 <Route path="/Support" element= {<Support/>}/>
                 <Route path="/Contact" element= {<Contact/>}/>
                 {/* <Route path="/Counter" element= {<Counter data={count}  func1={increFunc} func2={decreFunc}/>}/> */}
                 <Route path="/Prps" element= {<Prps/>}/>
               {/* <Route path="/Mainlink" element= {<MainLink/>}/> */}
               {/* <Route path="/" element= {<Bootstrap/>}/> */}
               <Route path="/Navbar" element= {<Navbar/>}/>
               <Route path="/Ques" element= {<Ques/>}/>
               <Route path="/Reactdef" element= {<Reactdef/>}/>
               <Route path="/Butnques" element= {<Butnques/>}/>
               {/* <Route path="/CodeExample" element= {<CodeExample/>}/> */}
               <Route path="/Card" element= {<Card/>}/>
               {/* <Route path="/Neweffect" element= {<Neweffect/>}/> */}
               {/* <Route path="/" element= {<Portfolio/>}/> */}
                {/* <Route path="/Reactlink" element= {<Reactlink/>}/> */}
                {/* <Route path="/Reactjs" element= {<Reactjs/>}/> */}
               {/* <Route path="/Virtualdom" element= {<Virtualdom/>}/> */}
               {/* <Route path="/Props" element= {<Props/>}/>
               
               <Route path="/Rctcomponent" element= {<Rctcomponent/>}/>  */}
                {/* <Route path="/" element= {<Usestatehook/>}/> */}
          </Routes>
    
</Router>
</div>

 );
  } 
export default App;