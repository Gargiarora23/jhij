import React, { useState } from 'react';
import { Quotes } from './Quotes'; 
import './Cardd.css';

export const Card = () => {
  const [quote, setQuote] = useState(Quotes[0]);

  const getQuotes = () => {
    setQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);
    console.log("clicked");
  };

  return (
    <div className="birthdayCard" onClick={getQuotes}>
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Babes!</h3>
        <p>Dear Friend,</p>
        <p>
          Happy birthday!! I hope your day is filled with lots of love and
          laughter! May all of your birthday wishes come true.
        </p>
        <p className="name">Gargi</p>
        <p className="quote">{quote}</p>
      </div>
    </div>
  );
};
