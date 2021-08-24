import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Content from "./Components/Pages/Content";
import SignInSide from "./Components/Pages/Signin";
import SignUp from "./Components/Pages/Signup";
import SendData from "./Components/Pages/supabase";


function App() {
  return (
    <div>
      {/* <SignInSide /> */}
      <Content/>
     
    </div>
  );
}

export default App;
