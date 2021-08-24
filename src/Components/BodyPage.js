import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import HomeBanner from "./Images/HomeBannerPic.jpg";
import "./BodyPage.css";
import { CardMedia } from "@material-ui/core";
import video from "./Images/mountains.mp4";
import Button from "@material-ui/core/Button";
import { Fab } from "@material-ui/core";
export default function ComplexGrid() {
  return (
    <div id="main-container">
      <div id="Welcome-Message">
        <h1>Welcome to Tranquility</h1>
      </div>
      <div id="home-banner">
        <CardMedia
          component="video"
          image={video}
          autoPlay
          loop
          muted
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(1.2)",
          }}
        />
        <div id="info-holder">
          <Typography style={{ fontSize: 25, color: "#fff", fontWeight: 900 }}>
            ABOUT
          </Typography>
          <Typography style={{ fontSize: 25, color: "#fff", fontWeight: 600 }}>
            I understand the weight and frustration of feeling like there is
            more out there for you, but not knowing where to turn to first.
            That’s why my mission is simple: give my clients the wellness
            education, tools and resources that they need to feel happy,
            healthy, and capable of managing life’s pressures.
          </Typography>
          <Fab
            size="large"
            variant="extended"
            component="button"
            color="primary"
          >
            <Button color="inherit">Get Started</Button>
          </Fab>
        </div>
      </div>
    </div>
  );
}
