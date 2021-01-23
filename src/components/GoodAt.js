import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const GoodAt = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{ textAlign: "center" }}
        className="goodAt"
      >
        What I Am Good At ?
      </Typography>

      <div>
        <AppBar position="static">
          <Toolbar className="fields">
            <Button color="inherit" className="btn" startIcon="">
              <Typography variant="h5">HTML5</Typography>
            </Button>
            <Button color="inherit" className="btn">
              <Typography variant="h5">CSS</Typography>
            </Button>
            <Button color="inherit" className="btn">
              <Typography variant="h5">BootStrap</Typography>
            </Button>
            <Button color="inherit" className="btn">
              <Typography variant="h5">Javascript</Typography>
            </Button>
            <Button color="inherit" className="btn">
              <Typography variant="h5">React</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
