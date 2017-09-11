const Artist = require('../models/artist');

function artistsIndex(req, res) {
  Artist
    .find()
    .exec()
    .then((artists) => {
      res.render('artists/index', { artists });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function artistsShow(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => res.render('artists/show', { artist }))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: artistsIndex,
  show: artistsShow
};
