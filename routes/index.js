'use strict';

const { Router } = require('express');
const router = new Router();

const Place = require('./../models/Place');

router.get('/', (req, res, next) => {

  Place.find()
  .then(places => {
    res.render('index', { title: 'Find a perfect place to read', places });
  })
  .catch(error => {
    next(error);
  });
});

module.exports = router;
