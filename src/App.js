import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

function App() {
  const [quote, setQuote] = useState ('');
  const [author, setAuthor] = useState ('');
  const [bgColor, setBgColor] = useState ('#2a9d8f');

  let colors = [
    '#264653',
    '#2a9d8f',
    '#e9c46a',
    '#f4a261',
    '#e76f51',
    '#ccd5ae',
    '#e9edc9',
    '#faedcd',
    '#d4a373',
    '#bde0fe',
    '#84a98c',
    '#cad2c5',
    '#52796f',
    '#ffddd2',
    '#d0f4de',
    '#f8ad9d',
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  document.body.style.background = bgColor;
  
  const quoteAPI = async () => {
    let quotesArray = [];
    try {
        const data = await axios.get('https://api.quotable.io/random');
        quotesArray = data.data;
    }   catch (error) {
        console.log(error);
    }

    try {
      setBgColor(colors[getRandomInt(16)]);
      setQuote(quotesArray.content);
      setAuthor(quotesArray.author);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    quoteAPI();
  },[])


  return (
    <div>
      <div className='' id="quote-box">
          <div id="text">
            
            <em><i className="fa fa-solid fa-quote-left"></i>{quote}</em>
            <div id="author">
              - {author}
            </div>
          </div>
          <div className='secondaryContainer'>
            <div className='row'>
              <a class="twitter-share-button" href={'https://twitter.com/intent/tweet?text=' + `${quote}` + ' - ' + `${author}` + '%0A%0A' + 'Quote from https://random-quotes.lautaroayosa.com.ar/'} target="_blank" rel="noreferrer">
                <i class="fa fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className='row'>
              <button  className='new-quote-button' onClick={quoteAPI} id="new-quote">New Quote</button>
            </div>
          </div>
      </div>
      <div className='creator'>
        <a href='https://lautaroayosa.com.ar' target='_blank' rel="noreferrer">by LautaroAyosa</a>
        <div>
            <a className='readme-button' href="https://github.com/LautaroAyosa/random-quote-app/" target="_blank">Github repository</a>
        </div>
      </div>
    </div>
  )
}

export default App;
