const Creation = require('../models/creation');

function creationsIndex(req, res) {
  Creation
    .find()
    .exec()
    .then((creations) => {
      res.render('creations/index', { creations });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function creationsShow(req, res) {
  Creation
    .findById(req.params.id)
    .exec()
    .then(creation => res.render('creations/show', { creation }))
    .catch(err => res.render('error', { err }));
}

function creationsNew(req, res) {
  res.render('creations/new');
}

function creationsCreate(req, res) {
  Creation
    .create(req.body)
    .then(() => res.redirect('/creations'))
    .catch(err => res.render('error', { err }));
}

function creationsEdit(req, res) {
  Creation
    .findById(req.params.id)
    .exec()
    .then((creation) => {
      if(!creation) return res.status(404).end('Not found');
      res.render('creations/edit', { creation });
    })
    .catch(err => res.render('error', { err }));
}

function creationsUpdate(req, res) {
  Creation
    .findById(req.params.id)
    .exec()
    .then(creation => {
      creation = Object.assign(creation, req.body);
      console.log('click');
      return creation.save();
    })
    .then(creation =>
      res.redirect(`/creations/${creation.id}`))
    .catch(err => res.render('error', { err }));
}

function creationsDelete(req, res) {
  Creation
    .findById(req.params.id)
    .exec()
    .then(creation => creation.remove())
    .then(() => res.redirect('/creations'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: creationsIndex,
  new: creationsNew,
  show: creationsShow,
  edit: creationsEdit,
  create: creationsCreate,
  update: creationsUpdate,
  delete: creationsDelete
};
