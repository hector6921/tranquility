import Navbar from "../Navbar";
import React from "react";
import DisSel from "../disSelec";
import RecDisplay from "./recdis";
import Results from "./results";
import ResultsVideos from "./resultsVideos"
import { Typography } from "@material-ui/core";

function Content() {
  return (
    <div>
      <Navbar />
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <DisSel />
      <Results />
      <ResultsVideos />
    </div>
    </div>
  );
}

export default Content;
