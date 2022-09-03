const express = require('express');
const tourControllers = require('./../controllers/tourControllers');

const router = express.Router();

// router.param('id', tourControllers.checkID)

// Create a checkBody middleware
// Check if body contains the name and price property
// if not, send back 400 (bad request)
// Add it to the post handler stack

router
  .route('/top-5-cheap')
  .get(tourControllers.aliasTopTours, tourControllers.getAllTours);

router.route('/tour-stats').get(tourControllers.getTourStats);
router.route('/monthly-plan/:year').get(tourControllers.getMonthlyPlan);

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
