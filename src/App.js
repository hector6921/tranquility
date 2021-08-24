import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Content from "./Components/Pages/Content";
import SignInSide from "./Components/Pages/Signin";
import SignUp from "./Components/Pages/Signup";

function App() {
  return (
    <div>
      {/* <SignInSide /> */}
      <SignUp />
    </div>
  );
}

export default App;
