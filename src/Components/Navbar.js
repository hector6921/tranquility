import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavLogo from "../Components/Images/tranquility.jpg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#30BA8F",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
  },
  white: {
    color: "#fff",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar className={classes.Toolbar}>
          <Button>
            <img src={NavLogo} alt="NavLogo" id="nav-logo" />
            <Typography className={classes.white}>Tranquility</Typography>
          </Button>
          <div id="desktop-menu">
            <Button>
              <Typography className={classes.white}>Home</Typography>
            </Button>
            <Button>
              <Typography className={classes.white}>Content</Typography>
            </Button>
          </div>
          <div id="mobile-menu">
            <IconButton
              onClick={handleClick}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Content</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
