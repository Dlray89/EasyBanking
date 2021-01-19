import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  Hidden,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import IntroDesktopImg from "../assets/images/bg-intro-desktop.svg";
import mobileImg from "../assets/images/bg-intro-mobile.svg";
import phoneMockups from "../assets/images/image-mockups.png";

import onlineBanking from "../assets/images/icon-online.svg";
import simpleBudgeting from "../assets/images/icon-budgeting.svg";
import onBoarding from "../assets/images/icon-onboarding.svg";
import openApi from "../assets/images/icon-api.svg";

import restaurantimg from "../assets/images/image-restaurant.jpg";
import planesimg from "../assets/images/image-plane.jpg";
import currencyimg from "../assets/images/image-currency.jpg";
import confettiimg from "../assets/images/image-confetti.jpg";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    background: "hsl(220, 16%, 96%)",
    overflow: "hidden",
  },
  header: {
    backgroundImage: "url(" + IntroDesktopImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundPositionX: "130%",
    backgroundPositionY: "50%",
    backgroundSize: "60%",
    height: "32em",
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      backgroundImage: "url(" + mobileImg + ")",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "0%",
      backgroundPositionY: "30%",
      backgroundSize: "100%",
    },
  },
  headerMain: {
    width: "40%",
    marginRight: "33em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
    },
  },
  headerContainer: {
    width: "30%",
    marginLeft: "13em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      background: "#fff",
    },
  },
  headerTitle: {
      width:'100%',
    fontSize: "3em",
    textAlign: "left",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 600,
    marginBottom: "0.35em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      textAlign: "center",
      width: "90%",
      margin: "0 auto",
      marginBottom: "0.15em",
    },
  },
  headerSubtitle: {
    fontSize: "1em",
    textAlign: "left",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 800,
    opacity: "50%",
    marginBottom: "0.95em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      textAlign: "center",
      width: "90%",
      margin: "0 auto",
    },
  },
  mainButtonContainer: {
    width: "30%",
  },
  buttonContainer: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      textAlign: "center",
      margin: " 0.95em auto",
    },
  },
  headerButton: {
    borderRadius: "20px",
    background: "linear-gradient(to right, #00f260, #0575e6)",
    ...theme.typography.button,
    fontSize: "0.75em",
    fontWeight: 100,
  },
  mainImgContainer: {
    width: "40%",
    textAlign: "center",
    position: "absolute",
    left: "67%",
    top: "-4%",
    [theme.breakpoints.down("sm")]: {
      left: "0%",
      top: "-5%",
      width: "100%",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  img: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "26.55em",
    },
  },
  whyChoose: {
    marginTop: "6em",
    width: "38%",
    marginLeft: "13em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
    },
  },
  whyChooseTitle: {
    fontSize: "1.7em",
    marginBottom: "0.35em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "50%",
      margin: "2.15em auto",
      fontSize: "1.9em",
      marginBottom: 0,
    },
  },
  whyChooseSubtitle: {
    fontSize: "0.90em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 900,
    opacity: "70%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "75%",
      margin: "0 auto",
      fontSize: "1em",
    },
  },
  iconContainers: {
    width: "95%",
    marginLeft: "4.5em",
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      marginTop:'3em'
    },
  },
  iconContainer: {
    marginLeft: "2.7em",
    width: "18%",
    [theme.breakpoints.down("sm")]: {
      margin: "1em auto",
      width: "70%",
    },
  },
  picContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      textAlign: "center",
    },
  },
  icons: {
    width: "3em",
    marginBottom: "0.75em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "15%",
    },
  },
  iconTitle: {
    fontSize: "1.1em",
    marginBottom: "0.75em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      textAlign: "center",
      fontSize: "1.2em",
    },
  },
  iconSubtitle: {
    fontSize: "0.85em",
    fontFamily: "Public Sans, sans-serif",
    fontWeight: 800,
    opacity: "70%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      textAlign: "center",
    },
  },
  lastestArticleContainer: {
    width: "100%",
    marginTop: "2em",
    background:'#fff',
    [theme.breakpoints.down('sm')]:{
    }
  },
  lastestArticleTitleContainer: {
    textAlign: "left",
    marginTop:'5em',
    marginLeft:'13em',
    marginBottom:'2em',
    [theme.breakpoints.down('sm')]:{
        margin: 0,
        marginBottom:'1em'
    }
  },
  lasteArticleTitle:{
    fontSize:'3em',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        fontSize:'2em',
        textAlign:'center'
    }

  },
  lastestDetailsMainContainer:{
    marginLeft:'8em',
    [theme.breakpoints.down('sm')]:{
        margin: 0
    }
  },
  lastestDetailsContainer: {
    width: "15%",
    marginLeft:'5em',
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        margin: '1em auto',
    }
  },
  latestImgContainer:{
    [theme.breakpoints.down('sm')]:{
        textAlign:'center',
        width:'90%',
        margin:'0 auto'
    }
  },
  lastestImg:{
    width: "100%",
    [theme.breakpoints.down('sm')]:{
        width:'75%',
        borderRadius:'10px'
    }
  },
  latestAuthor:{
      fontSize:'0.67em',
      fontWeight:500,
      opacity:'60%',
      marginBottom:'0.55em',
      [theme.breakpoints.down('sm')]:{
        textAlign:'center',
        margin: 0
    }

  },
  latestTitle:{
      fontSize:'1em',
      fontWeight:700,
      marginBottom:'0.55em',
      opacity:'70%',
      [theme.breakpoints.down('sm')]:{
        textAlign:'center',
        margin: '0 auto',
        width:'70%'
    }
  },
  latestSubtitle:{
      fontSize:'0.75em',
      fontWeight:600,
      opacity:'50%',
      marginBottom:'8em',
      [theme.breakpoints.down('sm')]:{
        textAlign:'center',
        margin: '0 auto',
        width:'70%'

    }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  const headerText = (
    <React.Fragment>
      <Grid
        item
        container
        direction="column"
        className={classes.headerContainer}
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
          <Button className={classes.headerButton}>Request invite</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return (
    <div className={classes.landingPage}>
      <Grid
        container
        className={classes.header}
        direction="row"
        alignItems="center"
      >
        <Hidden smDown>
          <Grid item >
            {headerText}
          </Grid>
        </Hidden>

        <Grid item container className={classes.mainImgContainer}>
          <Grid item className={classes.imgContainer}>
            <img className={classes.img} src={phoneMockups} alt='a pair of four phones' />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.whyChoose} direction="column">
        <Hidden mdUp>{headerText}</Hidden>
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
        direction={matchSm ? "column" : "row"}
        justify="center"
        alignItems="center"
        className={classes.iconContainers}
      >
        <Grid item className={classes.iconContainer}>
          <Grid container direction="column">
            <Grid item className={classes.picContainer}>
              <img
                src={onlineBanking}
                className={classes.icons}
                alt="hand holding debit cards"
              />
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
            <Grid item className={classes.picContainer}>
              <img
                src={simpleBudgeting}
                className={classes.icons}
                alt="mobile phone with $"
              />
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
            <Grid item className={classes.picContainer}>
              <img
                src={onBoarding}
                className={classes.icons}
                alt="three people "
              />
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
            <Grid item className={classes.picContainer}>
              <img
                src={openApi}
                className={classes.icons}
                alt="icon of micro chip"
              />
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

      <Grid
        container
        direction="column"
        className={classes.lastestArticleContainer}
      >
        <Grid item container className={classes.lastestArticleTitleContainer}>
          <Grid item className={classes.lasteArticleTitle}>Latest Articles</Grid>
        </Grid>

        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          className={classes.lastestDetailsMainContainer}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.lastestDetailsContainer}
          >
            <Grid item className={classes.latestImgContainer}>
              <img className={classes.lastestImg} src={currencyimg} alt="money" />
            </Grid>

            <Grid item className={classes.latestAuthor}>By Claire Robinson </Grid>

            <Grid item className={classes.latestTitle}>Receive money in any currency with no fees</Grid>

            <Grid item className={classes.latestSubtitle}>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.lastestDetailsContainer}
          >
            <Grid item className={classes.latestImgContainer}>
              <img className={classes.lastestImg} src={restaurantimg} alt="money" />
            </Grid>

            <Grid item className={classes.latestAuthor}>By Wilson Hutton</Grid>

            <Grid item className={classes.latestTitle}>Treat yourself without worrying about money</Grid>

            <Grid item className={classes.latestSubtitle}>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.lastestDetailsContainer}
          >
            <Grid item className={classes.latestImgContainer}>
              <img className={classes.lastestImg} src={planesimg} alt="money" />
            </Grid>

            <Grid item className={classes.latestAuthor}>By Wilson Hutton </Grid>

            <Grid item className={classes.latestTitle}>Take your Easybank card wherever you go</Grid>

            <Grid item className={classes.latestSubtitle}>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.lastestDetailsContainer}
          >
            <Grid item className={classes.latestImgContainer}>
              <img className={classes.lastestImg} src={confettiimg} alt="money" />
            </Grid>

            <Grid item className={classes.latestAuthor}>By Claire Robinson </Grid>

            <Grid item className={classes.latestTitle}>Our invite-only Beta accounts are now live!</Grid>

            <Grid item className={classes.latestSubtitle}>
              Our invite-only Beta accounts are now live! After a lot of hard
              work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
