const router = require('express').Router();


const creations = require('../controllers/creations');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/creations')
  .get( creations.index )
  .post( creations.create );

router.route('/creations/new')
  .get( creations.new );

router.route('/creations/:id')
  .get( creations.show )
  .put(creations.update)
  .delete( creations.delete );

router.route('/creations/:id/edit')
  .get( creations.edit );







module.exports = router;