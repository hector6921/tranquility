import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import BookCard from './card';

function App() {
  
  const [books, setBooks] = useState([])
  const axios = require('axios')
  const [submitted, setSubmitted] = useState(false)

  async function getBooks(){
    setSubmitted(false)
  var options = {
  method: 'GET',
  url: 'https://www.googleapis.com/books/v1/volumes?',
  params: {q: 'anxiety'},
  // headers: {
  //   'x-rapidapi-host': 'google-books.p.rapidapi.com',
  //   'x-rapidapi-key': 'e7dfea4a7dmshfde86c3ccf68d3dp10acebjsn2a8f541569e9'
  // }
};
  axios.request(options).then(function (response) {
    console.log(response.data.items)
  
      Object.values(response.data.items).map(item=>setBooks(books=>[
        ...books,
        [
        item.volumeInfo.title,
        item.volumeInfo.imageLinks.smallThumbnail,
        item.volumeInfo.authors
      ]]))
    
    
    }).catch(function (error) {
	console.error(error);
      });
    
  }
  useEffect(()=>{getBooks()},[submitted])

  const submit = () => {
    setSubmitted(true)
  }
  //console.log(books)
  console.log(books)
  return (
    <div>
     <button onClick={submit}></button>
     {Object.keys(books).map((item)=>

       <BookCard bookTitle={books[item][0]} bookImg={books[item][1]} bookAuthor={books[item][2]}/>
       )
      }
    </div>
  );
}

export default App;
