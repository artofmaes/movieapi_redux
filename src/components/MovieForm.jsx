import React from "react";
import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { getMovies } from "../data/movies";
import { TextField, Button } from "@material-ui/core";
export default () => {
  const { error, setError, setValue, ...field } = useField("", true);
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    if (field.value === "") {
      setError(true);
    } else {
      setValue("");
      //dispatchen
      dispatch(getMovies(field.value));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <TextField
        {...field}
        id="standard-secondary"
        label="Enter Quest Name"
        color="secondary"
        className={error ? "error" : ""}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        value="Search movie"
        className="button"
      >
        {" "}
        Start Search
      </Button>
    </form>
  );
};
