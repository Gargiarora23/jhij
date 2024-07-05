import React, {useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CodeExample = ({ code, language }) => 
    {
//         console.log ("gfchjkjl",code);
// useEffect(() => {
//     Prism.highlightAll();
// },[]);

return
(
    <>
      <h1>{code}</h1>
    {/* <pre>
        <code className={`language-${language}`}>
            {code}
        </code>
    </pre> */}
    </>
);
};

export default CodeExample;