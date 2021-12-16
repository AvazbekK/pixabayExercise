import React, { useState } from "react";
import { TextField, Backdrop, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Images from "../images/images";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Search = (props) => {
  const [searchText, setSearchText] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://pixabay.com/api");
  const [apiKey, setApiKey] = useState("23806094-68ef85e027c83acf2ab458981");
  const [images, setImages] = useState([]);
  const [spinnerIcon, setSpinnerIcon] = useState(false);
  const classes = useStyles();

  const fetchData = () => {
    setSpinnerIcon(true);

    axios
      .get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo`)
      .then((res) => {
        setSpinnerIcon(false);
        setImages(res.data.hits);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onTextChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setImages([]);
    } else {
      fetchData();
    }
    setSearchText(val);
  };

  return (
    <div>
      <TextField
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        label="Search For Images"
      />

      <br />
      {spinnerIcon ? (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Images
          spinnerIcon={spinnerIcon}
          setSpinnerIcon={setSpinnerIcon}
          images={images}
        />
      )}
    </div>
  );
};

export default Search;
