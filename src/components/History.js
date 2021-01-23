import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";

export const History = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0%)" },
      { transform: "translateX(5%)" },
      { transform: "translateX(0%)" },
    ],

    timing: {
      duration: 2500,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
      <>
    <Grid container>
      <Grid item xs={6} ref={ref} >
        <img style={{height:"150px"}}
          src="https://images.vexels.com/media/users/3/145037/isolated/preview/b5456bdd96e3d28756e6d6f6b3d0eae6-man-reading-book-floor-silhouette-by-vexels.png"
          alt="book"
        />
      </Grid>
      <Grid item xs={6} className="leftHist" >
        <Typography variant="h5" style={{fontWeight:"bold"}}>History</Typography>
        <Typography variant="subtitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Grid>
    </Grid>

    
    </>
  );
};
