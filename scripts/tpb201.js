
// RUN $ node --harmony tpb.js

// https://github.com/t3chnoboy/thepiratebay

const PirateBay = require('thepiratebay')
const jsonfile = require('jsonfile')
// PirateBay.search('Suicide', {
//     category: 201
// }).then(function(results) {
//     console.log(results)
// }).catch(function(err) {
//     console.log(err)
// });

//PirateBay.topTorrents(201, (results) => {console.log(results)})

//PirateBay.topTorrents()

PirateBay.topTorrents(201)
.then(results => {
// console.log(results)
jsonfile.writeFile('../src/data/filmData.json', results, function (err) {
  console.log(err)
})
//   for ( var i = 0; i <= results.length-1; i+=1 ) {
//   console.log(`${i+1} ${results[i].name}`)
// }
})
.catch(err => {
  console.log(err)
})

// PirateBay.topTorrents(201)
// .then(results => {
// console.log(results)
// })
// .catch(err => {
//   console.log(err)
// })
