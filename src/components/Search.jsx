import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles.js";
import { getMovies } from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("batman");
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <>
      <h2 className={classes.title}>Movie Search</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "50ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
