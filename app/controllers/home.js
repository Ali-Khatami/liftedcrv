var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  CRV = mongoose.model('CRV');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  CRV.find(function (err, crvs) {
    if (err) return next(err);
    
    // for testing.
    if(!crvs.length){
      crvs = [
        new CRV(),
        new CRV(),
        new CRV(),
        new CRV()
      ];
    }
    
    res.render('index', {
      title: 'LiftedCR-V.com | The best resource for lifted, offroad, and modified CR-Vs.',
      crvs: crvs,
      crvStructure: CRV.schema.obj
    });
  });
});