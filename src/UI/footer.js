import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Logo from "../assets/images/easybankone.svg";
import FaceBook from "../assets/images/icon-facebook.svg";
import Pintrest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Youtube from "../assets/images/icon-youtube.svg";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.easyBlue,
    padding: "2em",
  },
  firstContainer: {
    width: "60%",
  },
  logoContainer: {
    marginBottom: "2em",
  },
  logo: {},
  socialMedia:{
    width:'100%'
  },
  socialMediaCOntainer:{
      width:'100%'
  },
  socialMediaIcons:{

  },
  socialLogoLinks: {
    width: "30%",
    marginRight:'1em',
    
  },
  leftLinks:{
    marginRight:'2em',
    marginLeft:'2em',
    width:'20%',
    textAlign:'center'

  },
  rightLinks:{
    marginRight:'1em',
    width:'20%',
    textAlign:'center'

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
    textAlign:'center'
  },
  buttonContainer:{
    marginBottom:'1em',
    marginTop:'1em'
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
  return (
    <Grid className={classes.footer}>
      <Grid container direction="row" justify='space-between'>
       
        <Grid
          item
          container
          direction="row"
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
