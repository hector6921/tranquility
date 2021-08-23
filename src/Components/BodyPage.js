import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import HomeBanner from "./Images/HomeBannerPic.jpg";
import "./BodyPage.css";

export default function ComplexGrid() {
  return (
    <div id="main-container">
      <div id="Welcome-Message">
        <h1>Welcome to Tranquility</h1>
      </div>
      <div id="home-banner">
        <video width="320" height="240" autoPlay loop muted>
          <source src="./Images/mountains.mp4" type="video/mp4" />
        </video>
        <div id="info-holder"></div>
      </div>
      <div id="about-info">
        aksdjgkajsda ga jaj'gakjg[akgjak aljgad;klgajdg]
      </div>
    </div>
  );
}
