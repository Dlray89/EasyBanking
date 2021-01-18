import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
 
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Logo from "../assets/images/logo.svg";

const useStyles = makeStyles((theme) => ({
  nav: {
    padding:'1em',
    zIndex:1305
  },
  logoContainer: {
    marginLeft: "10.55em",
  },
  logo: {},
  buttonContainer: {
    marginRight: "6em",
  },
  mainNav: {
    width: '30%'
  },
  navContainer: {},
  links: {
    textTransform: "none",
    margin: 0,
    color:'black',
    opacity:'60%'
  },
  button: {
    borderRadius: "10em",
    background: "linear-gradient(to right, #00f260, #0575e6);",
    color: theme.palette.common.easyWhite,
    ...theme.typography.button,
    fontSize: "0.75em",
    fontFamily:'Public Sans, sans-serif',
  },
  AppBar:{
    background:'white'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [value, setVaule] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case value !== 0:
        setVaule(0);
        break;
      case value !== 1:
        setVaule(1);
        break;
      case value !== 2:
        setVaule(2);
        break;
      case value !== 3:
        setVaule(3);
        break;
      case value !== 4:
        setVaule(4);
        break;
      default:
        break;
    }
  }, [value]);
  return (
    <AppBar classes={{root: classes.AppBar}} elevation={0}>
      <Toolbar>
      <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.nav}
    >
      <Grid className={classes.logoContainer} item>
        <img className={classes.logo} alt="logo for easybank" src={Logo} />
      </Grid>

      <Grid item className={classes.mainNav}>
        <Grid container item direction="row" justify="space-evenly" alignItems='center'>
          <Grid item className={classes.links}>Home</Grid>
          <Grid item className={classes.links}>About</Grid>
          <Grid item className={classes.links}>Contact</Grid>
          <Grid item className={classes.links}>Blog</Grid>
          <Grid item className={classes.links}>Career</Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">
          Request Invite
        </Button>
      </Grid>
    </Grid>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navigation;
