import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Content from "./Components/Pages/Content";
import SignInSide from "./Components/Pages/Signin";
import SignUp from "./Components/Pages/Signup";
import SendData from "./Components/Pages/supabase";
import checkEmail from "./Components/Pages/supabase";
//import RecDisplay from "./Components/Pages/recdis";
import Results from "./Components/Pages/results";


function App() {
  var login = checkEmail('hello@hello.com')
  const axios = require("axios");
  const [books, setBooks] = useState([]);
  const [hasNoAccount,setHasNoAcount] = useState(false)
  const [canLogin, setCanLogin] = useState(true)
  const [start, setStart] = useState(false)

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

console.log(SignInSide().children)
if(hasNoAccount==true){
  return (
    <div>
   <SignUp/>
   {/* <SendData/> */}
    </div>
  );
}else{
if(canLogin!==true){
  return(
  <div>
  <SignInSide/>
  {/* <SendData/> */}
   </div>
   );
}else{
  if(start!==true){
  return(
      <Home/>
  );
}else{
  return(
  <Content/>
  );
}
}
  
}
}

export default App;
