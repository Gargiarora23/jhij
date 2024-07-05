import React, {useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export const NewComponent = ({ code, language }) => {
            console.log ("gfchjkjl",code);
useEffect(() => {
    Prism.highlightAll();
},[]);
  return (
    <div>
         <pre>
        <code className={`language-${language}`}>
            {code}
        </code>
    </pre>
    </div>
  )
}
