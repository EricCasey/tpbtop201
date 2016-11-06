import React, { Component } from 'react';
import './App.css';
import films from './data/filmData.json';
import trailers from './data/trailerData.json';
import MovieElem from './MovieElem.js';
import LeftAd from './LeftAd.js';
import RightAd from './RightAd.js';
import TopAd from './TopAd.js';
import BottomAd from './BottomAd.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    'tpb': ''
  };
  };

  ComponentWillMount() {}

  render() {
  return (
    <div>
    <LeftAd />
    <RightAd />
    <TopAd />
      {films.map((film, index) => {
        let trailer = trailers[trailers.indexOf(JSON.stringify(index))+1]
        console.log(film)
        return (
          <MovieElem
          key={index}
          name={film.name}
          trailer={trailer}
          index={index}
          size={film.size}
          uploader={film.uploader}/>
        )
      })}
      <BottomAd />
      </div>
    );
  }
}

export default App;
