import { CircularProgress, Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import RecDisplay from "./recdis";


function Results() {

  const axios = require("axios");
  const [books, setBooks] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [searchWord, setSearchWord] = useState("depression");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  async function getBooks() {
    var bookRequest = {
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?",
      params: { q: searchWord },
    };
    axios.request(bookRequest).then(function (response) {
      setBooks(response.data.items);
      setIsDataLoaded(true)
      insertData()
    });
    
  }
  useEffect(() => {getBooks()}, [searchWord]);
  

 function insertData(){
   setBooksData(books.map((item,index)=>({
       "img":books[index].volumeInfo.imageLinks.smallThumbnail,
       "title":books[index].volumeInfo.title, 
       "author":books[index].volumeInfo.authors,
       "description":books[index].volumeInfo.description,
       "selflink":books[index].accessInfo.webReaderLink
    })))
 } 
useEffect(() => {insertData()}, [isDataLoaded]);
  console.log(isDataLoaded)
  console.log(books)
if(isDataLoaded==true){
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      {/* <SignInSide /> */}
      <RecDisplay info={booksData} type="BOOKS" />
      
     {/* <img src={books[0].volumeInfo.imageLinks.smallThumbnail} /> */}
    </div>
  );
}else{
    return(
        <div>
            <Container>
            <CircularProgress/>
            </Container>
        </div>
)}
}

export default Results;
