const router = require('express').Router();

const photos = require('../controllers/photos');
const statics = require('../controllers/statics');
const artists = require('../controllers/artists');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');


router.get('/', statics.index);


router.route('/photos')
  .get( photos.index)
  .post( secureRoute, photos.create );

router.route('/photos/new')
  .get( secureRoute, photos.new );

router.route('/photos/:id')
  .get( photos.show )
  .put( secureRoute, photos.update )
  .delete( secureRoute, photos.delete );

router.route('/photos/:id/edit')
  .get( secureRoute, photos.edit );

router.route('/artists')
  .get( artists.index );

router.route('/artists/:id')
  .get( artists.show );


router.post('/photos/:id/comments', photos.commentsCreate);

router.delete('/photos/:id/comments/:commentId', photos.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);



module.exports = router;
