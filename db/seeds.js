const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Nobility = require('../models/nobility');
const Creation = require('../models/creation');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

Nobility.collection.drop();
Creation.collection.drop();


Nobility.create([ {
  name: 'Shok-1',
  nationality: 'British',
  age: '30 year career',
  styles: 'Aerosol X-Ray',
  image: 'http://i.imgur.com/OIz0PE3.jpg',
  caption: '3D Hand'
},
{
  name: 'Faith 47',
  nationality: 'South African',
  age: '38',
  styles: 'textured imaging',
  image: 'http://i.imgur.com/mPLgp9E.jpg',
  caption: 'blindfolded woman'
},
{
  name: 'Vhils',
  nationality: 'Portuguese',
  age: '30',
  styles: 'Reverse graffiti',
  image: 'https://i.imgur.com/fVHlHdV.jpg',
  caption: 'man\'s face'
},
{
  name: 'Banksy',
  nationality: 'British',
  age: '43',
  styles: 'Distinctive stenciling',
  image: 'http://i.imgur.com/PrDnwya.jpg',
  caption: 'crying child'
},
{
  name: 'Gregos',
  nationality: 'French',
  age: '45',
  styles: 'Molding and sculpting',
  image: 'https://assets.londonist.com/uploads/2014/06/i730/photo-27.jpg',
  caption: 'Tongue out mask'
},
{
  name: 'WRDSMTH',
  nationality: 'American',
  age: 'unknown',
  styles: 'paint',
  image: 'http://i.imgur.com/31fLA3Y.jpg',
  caption: 'typewriter'
}
])
  .then(nobles=>{
    console.log(`${nobles.length} nobles created`);
  });
return Creation.create([{
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/l5FFLhDh.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}, {
  artist: 'Wuskerski',
  location: 'Shoreditch',
  image: 'https://i.imgur.com/obnfkgGb.jpg',
  caption: 'street art photo'
}])

  .then((creations) => console.log(`${creations.length} creations created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
