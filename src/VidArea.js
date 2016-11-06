import React, { Component } from 'react';
import './App.css';

class VidArea extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  };

  ComponentWillMount() {
  }


  render() {
  // console.log(films)
  let link = `https://www.youtube.com/embed/${this.props.trailer.replace(/['"]+/g, '')}`
  console.log(link)
  // console.log(trailers)
  if (this.props.trailerState === 'hidden') { return (<div></div>) }
  return (
    <div className={this.props.trailerState} id={this.props.index+1}>
    <iframe
      className="yt"
      src={link}
      frameBorder="0"
      allowFullScreen
      width="560"
      height="315" >
    </iframe>
    </div>
    );
  }
}

export default VidArea;
