const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Creation = require('../models/creation');

Creation.collection.drop();

Creation
  .create([{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/l5FFLhDh.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  },{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    image: 'https://i.imgur.com/obnfkgGb.jpg',
    caption: 'street art photo'
  }])

  .then((creations) => console.log(`${creations.length} creations created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
