import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popup from "reactjs-popup";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },

  grow: {
    flexGrow: 1,
    justifyContent: "space-between",
    background: "black",
    color: "white",
  },
  modalItems: {
    fontSize: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  favorites: {
    color: "red",
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    color: "white",
  },
  dropdown: {
      width:'max-content',
    position: "absolute",
    top: 28,
    // right: -50,
    left: -250,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const MyFavsBar = ({ myFavs }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  let mapFavs = myFavs.map((fav) => {
    return (
      <div>
        <p>{fav.title}</p>
        <p>{fav.id}</p>
      </div>
    );
  });

  //   const body = ;

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.grow}>
        <Typography variant="h6">EurekkaCinemApp </Typography>

        <IconButton>
          <Badge badgeContent={myFavs.length} color="primary">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div>
                <FavoriteIcon
                  className={classes.favorites}
                  onClick={handleClick}
                />
                {open ? (
                  <div className={classes.dropdown}>My Favs{mapFavs}</div>
                ) : null}
              </div>
            </ClickAwayListener>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyFavsBar;
