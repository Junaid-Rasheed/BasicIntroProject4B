import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useWebAnimations from "@wellyshen/use-web-animations";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    background: "#f5f5f5",
    color: "#174a45",
    paddingTop: "11%",
    paddingLeft: "6%",
    height: "78%",
  },
}));

export const Home = () => {
  const classes = useStyles();

  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(4%)" },
      { transform: "translateY(0)" },
    ],
    timing: {
      duration: 1500,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} className="leftHome">
        <Paper className={classes.paper}>
          <Typography variant="subtitle1">WELCOME TO MY WORLD</Typography>
          <Typography variant="h2">Hi, I’m Junaid</Typography>
          <Typography variant="h6">REACT DEVELOPER</Typography>
          <Typography variant="subtitle1">from Pakistan</Typography>

          <Typography
            variant="h6"
            style={{ marginTop: "11%", fontWeight: "bold" }}
          >
            Services I Provide:
          </Typography>

          <Button startIcon={<CodeOutlinedIcon />} className="btn">
            Web Development
          </Button>
          <Button startIcon={<ArtTrackIcon />} className="btn">
            React Development
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper
          className={classes.paper}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <img
            ref={ref}
            src="/Images/character 6.svg"
            style={{ width: "35%" }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
