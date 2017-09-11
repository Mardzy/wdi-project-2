const Term = require('../models/term');
const Type = require('../models/type');


function staticsIndex(req, res) {
  Term
    .find()
    .exec()
    .then((terms) => {
      return Type
        .find()
        .exec()
        .then((types) => {
          res.render('home', { terms, types });
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });

}

module.exports = {
  index: staticsIndex
};
