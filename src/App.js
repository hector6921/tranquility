import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Content from "./Components/Pages/Content";
import SignInSide from "./Components/Pages/Signin";
import SignUp from "./Components/Pages/Signup";
import SendData from "./Components/Pages/supabase";


function App() {

  const axios = require("axios");
  const [books, setBooks] = useState([]);

  async function getBooks() {
    var bookRequest = {
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?",
      params: { q: "anxiety" },
    };
    axios.request(bookRequest).then(function (response) {
      setBooks(response.data.items);
    });
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      {/* <SignInSide /> */}
      <Content/>
     <img src={books[0].volumeInfo.imageLinks.smallThumbnail} />
    </div>
  );
}

export default App;
