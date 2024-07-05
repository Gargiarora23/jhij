import React from 'react'

export const Toggleans = (index) => 
    {
        setVisibleIndex(visibleIndex === index ? null : index);
    };
    
      return (
        <>
          {questionsAndAnswers.map((qa, index) => (
            <div key={index}>
              <h3 onClick={() => Toggleans(index)} style={{ cursor: 'pointer' }}>
                {qa.question}
              </h3>
              {visibleIndex === index && <p>{qa.answer}</p>}
            </div>
          ))}
        </>
      );
    
    
    export default Ques;

