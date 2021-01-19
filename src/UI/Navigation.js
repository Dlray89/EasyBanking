import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
  Grid,
  AppBar,
  Toolbar,
  Popover,
  IconButton,
  
} from "@material-ui/core";
import Logo from "../assets/images/logo.svg";
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: "1em",
    zIndex: 1305,
  },
  logoContainer: {
    marginLeft: "10.55em",
    [theme.breakpoints.down('md')]:{
      margin: 0
    }
  },
  logo: {
    [theme.breakpoints.down('md')]:{
      width:'7em'
    }
  },
  buttonContainer: {
    marginRight: "6em",
  },
  mainNav: {
    width: "30%",
  },
  navContainer: {},
  links: {
    textTransform: "none",
    margin: 0,
    color: "black",
    opacity: "60%",
    cursor:'pointer',

    "&:hover":{
      borderBottom: 'solid 5px #00F260',
    }
  },
  button: {
    borderRadius: "10em",
    background: "linear-gradient(to right, #00f260, #0575e6);",
    color: '#fff',
    fontSize:'0.75em',
    '&:hover':{
      background: 'linear-gradient(to left, #00c9ff, #92fe9d)'
    }
    
  },
  AppBar: {
    background: "white",
  },
  backdrop:{
    zIndex: theme.zIndex.drawer + 1,
    color:'#fff'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [value, setVaule] = useState(0);
  const [open, setOpen] = useState(false);
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("sm"));

  // const changeHandler = (e, newValue) => {
  //   setVaule(newValue);
  // };

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

  const mobileNav = (
    <React.Fragment>
   

    <div onClick={() => setOpen(!open)}>
      {open ? (
        <IconButton style={{borderRadius: 0, padding: 0}} onClick={() => setOpen(false)}>
          <CancelIcon style={{cursor:'pointer'}}  />
        </IconButton>
      ) :
      (
        
        <IconButton style={{borderRadius: 0, padding: 0}}>
          <MenuIcon  />
        </IconButton>
      )}
      
    </div>
  
    <Popover open={open} onClose={() => setOpen(false)}>
      
      <Grid container direction='column' >
        <Grid item component={Button} style={{width:'100%', textTransform:'none'}}>Home</Grid>
        <Grid item component={Button} style={{width:'100%', textTransform:'none'}}>About</Grid>
        <Grid item component={Button} style={{width:'100%', textTransform:'none'}}>Contact</Grid>
        <Grid item component={Button} style={{width:'100%', textTransform:'none'}}>Blog</Grid>
        <Grid item component={Button} style={{width:'100%', textTransform:'none'}}>Career</Grid>
      </Grid>
      
    </Popover>
    </React.Fragment>  
  );


  const desktopNav = (
    <React.Fragment>
        <Grid item className={classes.mainNav}>
            <Grid
              container
              item
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item className={classes.links}>
                Home
              </Grid>
              <Grid item className={classes.links}>
                About
              </Grid>
              <Grid item className={classes.links}>
                Contact
              </Grid>
              <Grid item className={classes.links}>
                Blog
              </Grid>
              <Grid item className={classes.links}>
                Career
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.buttonContainer}>
            <Button className={classes.button} variant="contained">
              Request Invite
            </Button>
          </Grid>
    </React.Fragment>
  )
  return (
    <ElevationScroll>
    <AppBar classes={{ root: classes.AppBar }} elevation={0}>
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

         
            {matchMd ? mobileNav : desktopNav}
        
          
         
        </Grid>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;
