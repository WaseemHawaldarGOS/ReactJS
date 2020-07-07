import React from 'react';

/*
    key property was added to improve performance and also to remove warning shown in
    key-addition-warning.png in section 9 images,
    alt property was added to remove warning shown in alt-warning.png in section 9 images.
*/
const ImageList = props => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt = {description} key={id} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
