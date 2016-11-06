import React, { Component } from 'react';
import './App.css';
// import PirateBay from 'thepiratebay';
import films from './data/filmData.json';
import trailers from './data/trailerData.json';
import MovieElem from './MovieElem.js';
import LeftAd from './LeftAd.js';
import RightAd from './RightAd.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    'tpb': ''
  };
  };

  ComponentWillMount() {

  }

  // GetTrailers() {
  //   PirateBay.topTorrents(201)
  //   .then((results) => {
  //     console.log('results')
  //   console.log(results)
  //   return results
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }


  render() {
  return (
    <div>
    <LeftAd />
    <RightAd />
      {films.map((film, index) => {
        let trailer = trailers[trailers.indexOf(JSON.stringify(index))+1]
        return (
          <MovieElem
          key={index}
          name={film.name}
          trailer={trailer}
          index={index}/>
        )
      })}
      </div>
    );
  }
}

export default App;
