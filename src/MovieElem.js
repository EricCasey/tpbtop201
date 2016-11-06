import React, { Component } from 'react';
import './App.css';
import VidArea from './VidArea.js'

class MovieElem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerState: 'hidden'
    };
    this.handleButton = this.handleButton.bind(this)
  };

  ComponentWillMount() {

  }

  handleButton(e) {
    if (this.state.trailerState === 'hidden') {
      this.setState({ trailerState: 'shown' })
    } else {
      this.setState({ trailerState: 'hidden'})
    }
  }


  render() {
  return (
    <div className='box'>
      <h3 className="rank">{this.props.index+1}</h3>
      <p>&nbsp;{this.props.name}</p>
      <div onClick={this.handleButton} className="button" id={this.props.index+1}>trailer</div>
      <div className="data"><p>&nbsp;Size: {this.props.size} | Uploader: {this.props.uploader}</p></div>
      <VidArea
      trailerState={this.state.trailerState}
      trailer={this.props.trailer}
      index={this.props.index}/>
    </div>
    );
  }
}

export default MovieElem;
