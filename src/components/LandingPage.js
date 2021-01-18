import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import IntroDesktopImg from "../assets/images/bg-intro-desktop.svg";
import phoneMockups from "../assets/images/image-mockups.png";

import onlineBanking from "../assets/images/icon-online.svg";
import simpleBudgeting from "../assets/images/icon-budgeting.svg";
import onBoarding from "../assets/images/icon-onboarding.svg";
import openApi from "../assets/images/icon-api.svg";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    background: "hsl(220, 16%, 96%)",
    overflow:'hidden'
  },
  header: {
    backgroundImage: "url(" + IntroDesktopImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundPositionX: "130%",
    backgroundPositionY: "90%",
    backgroundSize: "60%",
    height: "35em",
    background: "#fff",
  },
  headerMain: {
    width: "40%",
    marginRight: "33em",
  },
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    fontSize: "3em",
    width: "80%",
    marginBottom: "0.55em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 700,
  },
  headerSubtitle: {
    fontSize: "1.1em",
    width: "80%",
    marginBottom: "1em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 600,
    opacity: "50%",
  },
  buttonContainer: {
    width: "80%",
  },
  headerButton: {
    borderRadius: "20px",
    background: "linear-gradient(to right, #00f260, #0575e6)",
    ...theme.typography.button,
    fontSize: "0.75em",
    fontWeight: 100,
  },
  mainImgContainer: {
    width: "30%",
    marginLeft: "25em",
  },
  imgContainer: {
    width: "100%",
  },
  img: {
    width: "40%",
    position: "absolute",
    top: "0%",
    left: "66%",
  },
  whyChoose: {
    marginTop: "6em",
    width: "38%",
    marginLeft: "12em",
  },
  whyChooseTitle: {
    fontSize: "1.7em",
    marginBottom: "0.35em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 900,
  },
  whyChooseSubtitle: {
    fontSize: "0.90em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 900,
    opacity: "70%",
  },
  iconContainers: {
    width: "95%",
    marginLeft: "3em",
    marginTop: "2em",
  },
  iconContainer: {
    marginLeft: "2.7em",
    width: "18%",
  },
  icons: {
    width: "3em",
    marginBottom: "0.75em",
  },
  iconTitle: {
    fontSize: "1.1em",
    marginBottom: "0.75em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 800,
  },
  iconSubtitle: {
    fontSize: "0.85em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 800,
    opacity: "70%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingPage}>
      <Grid
        container
        className={classes.header}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.headerMain}>
          <Grid
            className={classes.headerContainer}
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item className={classes.headerTitle}>
              Next generation digital banking
            </Grid>

            <Grid item className={classes.headerSubtitle}>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </Grid>

            <Grid item className={classes.buttonContainer}>
              <Button className={classes.headerButton}>Request Invite</Button>
            </Grid>
          </Grid>
        </Grid>

        <img className={classes.img} src={phoneMockups} />
      </Grid>

      <Grid container className={classes.whyChoose} direction="column">
        <Grid item className={classes.whyChooseTitle}>
          Why choose Easybank?
        </Grid>

        <Grid item className={classes.whyChooseSubtitle}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.iconContainers}
      >
        <Grid item className={classes.iconContainer}>
          <Grid container direction="column">
            <Grid item>
              <img src={onlineBanking} className={classes.icons} />
            </Grid>

            <Grid item className={classes.iconTitle}>
              Online Banking
            </Grid>

            <Grid item className={classes.iconSubtitle}>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.iconContainer}>
          <Grid container direction="column">
            <Grid item>
              <img src={simpleBudgeting} className={classes.icons} />
            </Grid>

            <Grid item className={classes.iconTitle}>
              Simple Budgeting
            </Grid>

            <Grid item className={classes.iconSubtitle}>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.iconContainer}>
          <Grid container direction="column">
            <Grid item>
              <img src={onBoarding} className={classes.icons} />
            </Grid>

            <Grid item className={classes.iconTitle}>
              Fast Onboarding
            </Grid>

            <Grid item className={classes.iconSubtitle}>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.iconContainer}>
          <Grid container direction="column">
            <Grid item>
              <img src={openApi} className={classes.icons} />
            </Grid>

            <Grid item className={classes.iconTitle}>
              Open API
            </Grid>

            <Grid item className={classes.iconSubtitle}>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
