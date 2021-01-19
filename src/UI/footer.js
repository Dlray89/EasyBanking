import React from "react";
import { Button, Grid, makeStyles, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import Logo from "../assets/images/easybankone.svg";
import FaceBook from "../assets/images/icon-facebook.svg";
import Pintrest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Youtube from "../assets/images/icon-youtube.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.easyBlue,
    padding: "2em",
    
  },
  footerContainer:{
    [theme.breakpoints.down('sm')]:{
      width:'100%'
    }
  },
  firstContainer: {
    width: "55%",
    
    marginLeft:'8.5em',
    [theme.breakpoints.down('sm')]:{
      margin: 0,
      width:'100%',
     
    }
  },
  logoContainer: {
    marginBottom: "2em",
    [theme.breakpoints.down('sm')]:{
      
      width:'100%',
      marginBottom:'0.55em',
      textAlign:'center'
    }
  },
  logo: {},
  socialMedia:{
    width:'100%'
  },
  socialMediaCOntainer:{
      width:'100%',
      
      marginLeft:'1em',
      [theme.breakpoints.down('sm')]:{

        width:'60%',
        margin: '0.55em auto'
      }
  },
  socialMediaIcons:{

  },
  socialLogoLinks: {
    width: "30%",
    marginRight:'1em',
    [theme.breakpoints.down('sm')]:{
      width:'100%'
    }
    
  },
  leftLinks:{
    marginRight:'2em',
    marginLeft:'2em',
    width:'20%',
    textAlign:'center',
    [theme.breakpoints.down('sm')]:{
      
      width:'100%',
      margin: 0
    }

  },
  rightLinks:{
    marginRight:'1em',
    width:'20%',
    textAlign:'center',
    [theme.breakpoints.down('sm')]:{
      
      width:'100%',
      margin: 0
    }

  },
  
  leftLinksContainer:{

  },
  Links:{
    marginBottom:'0.85em',
    color:'#fff',
    opacity:'45%'
  },
  secondContainer:{
    width:'30%',
    textAlign:'center',
    
    [theme.breakpoints.down('sm')]:{
      
      width:'100%',
      margin: 0
    }
  },
  buttonContainer:{
    marginBottom:'1em',
    marginTop:'1em',
    [theme.breakpoints.down('sm')]:{
      
      width:'100%',
      marginBottom:'0.55em'
    }
  },
  requestButton:{
    borderRadius: '20px',
    background:'linear-gradient(to right, #00f260, #0575e6)',
    ...theme.typography.button,
    fontSize:'0.75em',
    fontWeight: 100
  },
  copyright:{
    color:'#fff',
    opacity:'45%',
    fontSize:'0.85em'
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid className={classes.footer}>
      <Grid className={classes.footerContainer} container direction={ matchesSM ? "column" : "row"} justify='space-between'>
       
        <Grid
          item
          container
          direction={ matchesSM ? "column" : "row"}
          justify="flex-start"
          className={classes.firstContainer}
        >
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.socialLogoLinks}
          >
            <Grid item className={classes.logoContainer}>
              <img
                className={classes.logo}
                alt="easy bank logo"
                
                src={Logo}
              />
            </Grid>

            <Grid item className={classes.socialMedia}>
              <Grid item container direction="row" justify='space-evenly' alignItems='center' className={classes.socialMediaCOntainer}>
                <Grid item>
                  <img className={classes.socialMediaIcons} alt="Facebook icon" src={FaceBook} />
                </Grid>

                <Grid item>
                  <img alt="Youtube icon" src={Youtube} />
                </Grid>

                <Grid item>
                  <img alt="Twitter icon" src={Twitter} />
                </Grid>

                <Grid item>
                  <img alt="Pinerest icon" src={Pintrest} />
                </Grid>

                <Grid item>
                  <img alt="Instagram Icon" src={Instagram} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.leftLinks}>
            <Grid item container direction="column" className={classes.leftLinksContainer}>
              <Grid item>
                <Typography variant='h5' className={classes.Links}>About Us</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' className={classes.Links}>Contact</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' className={classes.Links}>Blog</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.rightLinks}>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant='h5' className={classes.Links}>Careers</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' className={classes.Links}>Support</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' className={classes.Links}>Privacy Policy</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

     
        <Grid item className={classes.secondContainer}>
          <Grid container item direction='column' justify='center' alignItems='center'>
            <Grid item className={classes.buttonContainer}>
                <Button variant='contained' className={classes.requestButton}>
                  Request Invite
                </Button>
            </Grid>

            <Grid item className={classes.copyright}>
              &copy; Easybank. All Rights Reserved
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
