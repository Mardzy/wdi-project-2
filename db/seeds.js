const mongoose = require('moongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Creation = require('../models/creation');

Creation.collection.drop();

Creation
  .create([{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo1'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo2'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo3'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo4'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo5'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo6'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo7'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo8'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo9'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo10'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo11'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo12'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo13'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo14'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo15'
    }]},{
    artist: 'Wuskerski',
    location: 'Shoreditch',
    images: [{
      url: '/images/wuskerski.png',
      caption: 'Wuskerski photo16'
    }]}])

  .then((creation) => console.log(`${creation.length} creations created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
