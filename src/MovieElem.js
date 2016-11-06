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
    console.log(e.target.id)
    console.log('clicked!')
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
      <p>{this.props.name}</p>
      <div onClick={this.handleButton} id={this.props.index+1}>trailer</div>
      <VidArea
      trailerState={this.state.trailerState}
      trailer={this.props.trailer}
      index={this.props.index}/>
    </div>
    );
  }
}

export default MovieElem;
