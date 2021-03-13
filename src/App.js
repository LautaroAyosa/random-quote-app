import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css';

function App() {
  const [quote, setQuote] = useState ('');
  const [author, setAuthor] = useState ('');

  const quoteAPI = async () => {
    let quotesArray = [];
    try {
        const data = await axios.get('https://api.quotable.io/random');
        quotesArray = data.data;
    }   catch (error) {
        console.log(error);
    }

    try {
      setQuote(quotesArray.content);
      setAuthor(quotesArray.author)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    quoteAPI();
  },[])


  return (
    <div>
      <div className='montserrat' id="quote-box">
          <div id="text">
              <em>&nbsp;&nbsp;{quote}</em>
          </div>
          <div className='secondaryContainer'>
            <div id="author">
                - {author}
            </div>
            <div className='row'>
              <button  className='montserrat' onClick={quoteAPI} id="new-quote">New QUOTE</button>
              <a href="hola" id="tweet-quote"><button>tweet</button></a>
            </div>
          </div>
      </div>
      <div className='creator'><a href='hola' target='_blank'>by LautaroAyosa</a></div>
    </div>
  )
}

export default App;
