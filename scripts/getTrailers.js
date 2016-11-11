// https://www.npmjs.com/package/youtube-node


const YouTube = require('youtube-node');
const jsonfile = require('jsonfile')
const films = require('../src/data/filmData.json');

var youTube = new YouTube();

youTube.setKey('AIzaSyDQK567hB184xICxJCbet7X8fy7-0iJ5kk');

// console.log(films)
var trailers = []

films.map((film, index) => {

  // console.log(film.name)
  var movie = /.*(?=20)/ig.exec(film.name)
  // console.log(movie)
  var trailerQuery = `${movie} trailer`
  // console.log(trailerQuery);
  youTube.search(trailerQuery, 1, function(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      // console.log(JSON.stringify(result.items[0].id.videoId, null, 2));
      // console.log(obj)
      trailers.push(JSON.stringify(index))
      trailers.push(JSON.stringify(result.items[0].id.videoId))
      if (trailers.length === 200) {
        console.log( trailers )
        jsonfile.writeFile('../src/data/trailerData.json', trailers, function (err) {
          console.log(err)
        })
      }

    }
  })

})
