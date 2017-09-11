const router = require('express').Router();

const photos = require('../controllers/photos');
const statics = require('../controllers/statics');
const artists = require('../controllers/artists');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');


router.get('/', statics.index);


router.route('/photos')
  .get( photos.index)
  .post( photos.create );

router.route('/artists')
  .get( artists.index );

router.route('/artists/:id')
  .get( artists.show );

router.route('/photos/new')
  .get( photos.new );

router.post('/photos/:id/comments', photos.commentsCreate);

router.delete('/photos/:id/comments/:commentId', photos.commentsDelete);

router.route('/photos/:id')
  .get( photos.show )
  .put( photos.update )
  .delete( photos.delete );

router.route('/photos/:id/edit')
  .get( photos.edit );

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);



module.exports = router;
