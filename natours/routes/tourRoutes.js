const express = require('express');
const tourControllers = require('./../controllers/tourControllers')

const router = express.Router();

// router.param('id', tourControllers.checkID)

// Create a checkBody middleware
// Check if body contains the name and price property
// if not, send back 400 (bad request)
// Add it to the post handler stack

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.checkBody, tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;