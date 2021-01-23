import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h5"
        className="contact"
        style={{ textAlign: "center",fontWeight:"bold" }}
      >
        Contacts
      </Typography>


      <Grid container xs={12} className="contact" >

        <Card className={classes.root } style={{marginRight:"7%"}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://image.flaticon.com/icons/png/512/281/281769.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Email
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                jxxxxxxx@gmail.com (fake)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root} style={{marginRight:"7%"}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.pngitem.com/pimgs/m/11-119200_social-networks-icons-png-circle-social-media-icon.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Social Media
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               <FacebookIcon/> 
               <GitHubIcon/>
               <LinkedInIcon/>
               <InstagramIcon />
               <TwitterIcon />
               (fake)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://pngimg.com/uploads/phone/phone_PNG49006.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Phone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                +92300-0202034 (fake)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </Grid>
    </>
  );
};
