import express from 'express';
import MeasurementController from './../controllers/measurement';
import asyncHelper from './../utils/asynHerlper';

const router = express.Router();

router.route('/measurement')
  .post(asyncHelper(MeasurementController.createMeasurement))
  .get(asyncHelper(MeasurementController.getAllMeasurement));

router.route('/measurement/:measurementId')
  .put(asyncHelper(MeasurementController.updateMeasurement))
  .get(asyncHelper(MeasurementController.getSingleMeasurement));
export default router;