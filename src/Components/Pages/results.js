import { CircularProgress, Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import RecDisplay from "./recdis";


function Results() {

  const axios = require("axios");
  const [books, setBooks] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  async function getBooks() {
    var bookRequest = {
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?",
      params: { q: "anxiety" },
    };
    axios.request(bookRequest).then(function (response) {
      setBooks(response.data.items);
      setIsDataLoaded(true)
      insertData()
    });
    
  }
  useEffect(() => {getBooks()}, [isDataLoaded]);

 function insertData(){
   setBooksData(books.map((item,index)=>({"img":books[index].volumeInfo.imageLinks.smallThumbnail,"title":books[index].volumeInfo.title, "author":books[index].volumeInfo.authors})))
 } 
useEffect(() => {insertData()}, [isDataLoaded]);
  console.log(isDataLoaded)
  console.log(booksData)
if(isDataLoaded==true){
  return (
    <div>
      {/* <SignInSide /> */}
      <RecDisplay info={booksData} />
      
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
