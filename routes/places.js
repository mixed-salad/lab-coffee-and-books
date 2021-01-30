'use strict';

const { Router } = require('express');
const router = new Router();
const Place = require('./../models/Place');

router.get('/create', (req, res, next) => {
  res.render('place/create', { title: 'Create a place' });
});

router.post('/create', (req, res, next) => {
  const data = req.body;
  console.log(data);
  Place.create({
    name: data.name,
    type: data.type
  })
    .then((place) => {
      console.log(place);
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id/update', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then((place) => {
      res.render('place/update', { title: 'Update a place', place });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/update', (req, res, next) => {
  const data = req.body;
  const id = req.params.id;

  Place.findByIdAndUpdate(id, {
    name: data.name,
    type: data.type
  })
    .then((place) => {
      console.log(place);
      res.redirect(`/place/${place._id}`);
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  
  Place.findByIdAndDelete(id)
  .then(() => {
      res.redirect('/');
  })
  .catch(error => {
      next(error);
  })
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then((place) => {
      res.render('place/single', { place });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
