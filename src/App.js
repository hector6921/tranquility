import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.js";
import BodyPage from "./Components/BodyPage";

//Hi my name is Alex
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

  console.log(books);
  return (
    <div>
      <Navbar />
      <BodyPage />
    </div>
  );
}

export default App;
