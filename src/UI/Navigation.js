import React, { useEffect, useState } from "react";
import { Button, makeStyles, Tab, Tabs, Grid } from "@material-ui/core";
import Logo from "../assets/images/logo.svg";

const useStyles = makeStyles((theme) => ({
  nav: {},
  logoContainer: {
    marginLeft: "3em",
  },
  logo: {},
  buttonContainer: {
    marginRight: "3em",
  },
  mainNav: {},
  navContainer: {},
  link: {
    textTransform: "none",
    margin: 0,
    ...theme.typography.navigation,
  },
  button: {
    borderRadius: "10em",
    background: theme.palette.common.easyGreen,
    color: theme.palette.common.easyWhite,
    ...theme.typography.button,
    fontSize: "0.75em",
  },
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
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.nav}
    >
      <Grid className={classes.logoContainer} item>
        <img className={classes.logo} alt="logo for easy bank" src={Logo} />
      </Grid>

      <Grid item className={classes.mainNav}>
        <Tabs value={value} className={classes.navContainer} aria-label="navigation">
          <Tab className={classes.link} label="Home" />
          <Tab className={classes.link} label="About" />
          <Tab className={classes.link} label="Contact" />
          <Tab className={classes.link} label="Blog" />
          <Tab className={classes.link} label="Careers" />
        </Tabs>
      </Grid>

      <Grid item className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">
          Request Invite
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navigation;
