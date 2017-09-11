const Photo = require('../models/photo');

function photosIndex(req, res) {
  Photo
    .find()
    .exec()
    .then((photos) => {
      res.render('photos/index', { photos });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function photosShow(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then(photo => res.render('photos/show', { photo }))
    .catch(err => res.render('error', { err }));
}

function photosNew(req, res) {
  res.render('photos/new');
}

function photosCreate(req, res) {
  Photo
    .create(req.body)
    .then(() => res.redirect('/photos'))
    .catch(err => res.render('error', { err }));
}

function photosCommentsCreate(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then(photo => {
      photo.comments.push(req.body);
      return photo.save();
    })
    .then(photo => res.redirect(`/photos/${photo.id}`))
    .catch(err => res.render('error', { err }));
}

function photosCommentsDelete(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then(photo => {
      const comment = photo.comments.id(req.params.commentId);
      comment.remove();
      return photo.save();
    })
    .then(photo => res.redirect(`/photos/${photo.id}`))
    .catch(err => res.render('error', { err }));
}

function photosEdit(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then((photo) => {
      if(!photo) return res.status(404).end('Not found');
      res.render('photos/edit', { photo });
    })
    .catch(err => res.render('error', { err }));
}

function photosUpdate(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then(photo => {
      photo = Object.assign(photo, req.body);
      console.log('click');
      return photo.save();
    })
    .then(photo =>
      res.redirect(`/photos/${photo.id}`))
    .catch(err => res.render('error', { err }));
}

function photosDelete(req, res) {
  Photo
    .findById(req.params.id)
    .exec()
    .then(photo => photo.remove())
    .then(() => res.redirect('/photos'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: photosIndex,
  new: photosNew,
  show: photosShow,
  edit: photosEdit,
  create: photosCreate,
  update: photosUpdate,
  delete: photosDelete,
  commentsCreate: photosCommentsCreate,
  commentsDelete: photosCommentsDelete
};
