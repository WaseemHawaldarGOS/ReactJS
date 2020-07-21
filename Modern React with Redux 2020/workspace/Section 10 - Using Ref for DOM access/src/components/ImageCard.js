import React from 'react';

class ImageCard extends React.Component {

/*
    In order to fetch height of every image that gets loaded dynamically from unsplash
    we need to access it reference and then fetch height.
    That height will then be used to set span, which is defined in css to accordingly create
    so many spans as required.
    this.imageRef is just an instance variable, it can be labelled anything.

    First we are imageRef and then take the ref from img and assign it's resultant value to imageRef.
    Once imageRef is initialized, we go to componentdidMount and do remaining stuff.
*/
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

/*
    In below method if we don't wait for load event listener, we shall end up with height value as 0.

    This is a basic html or javascript listener to listen to load event. Once it sets the spans, you may notice that spans
    is state property. And bcz state property changes it will rerender the whole component and redraws it with new spans value
*/
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

/*
    In ImageList.css we have defined grid-auto-rows as 10px, so formula is to calculate number
    of spans required with 10px each to fit our image.
*/
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

/*
    In below code gridRowEnd: `span ${this.state.spans}`  is used to add an additional css property which
    is dynamic in nature on the basis of image height.
*/
  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
