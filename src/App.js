import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Content from "./Components/Pages/Content";
import SignInSide from "./Components/Pages/Signin";

function App() {
  return (
    <div>
      {/* <Home />
      <Content />
   */}
      <SignInSide />
    </div>
  );
}

export default App;
