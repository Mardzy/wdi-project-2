const Nobility = require('../models/nobility');

function noblesIndex(req, res) {
  Nobility
    .find()
    .exec()
    .then((nobles) => {
      res.render('nobles/index', { nobles });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function noblesShow(req, res) {
  Nobility
    .findById(req.params.id)
    .exec()
    .then(nobility => res.render('nobles/show', { nobility }))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: noblesIndex,
  show: noblesShow
};
