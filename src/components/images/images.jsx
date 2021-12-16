import React from "react";
import PropTypes from "prop-types";
import { ImageList, ImageListItem } from "@material-ui/core";

const Images = (props) => {
  let imageListContent;
  const { images } = props;

  if (images) {
    imageListContent = (
      <ImageList cols={3}>
        {images.map((img) => (
          <ImageListItem title={img.tags} key={img.id}>
            <img src={img.largeImageURL} alt="image" />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    //can implement spinner
    imageListContent = null;
  }
  return <div>{imageListContent}</div>;
};

Images.propTypes = {
  images: PropTypes.array.isRequired,
};
export default Images;
