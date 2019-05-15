import express from 'express';
import Measurement from './../models/clothMeasurement';

export default class MeasurementController {

  static async createMeasurement(req, res) {
    let measurement = await new Measurement(req.body);
    measurement.save();
    res.status(201).json({
      message: 'Measurements added successfully',
      measurement
    });
  }

  static async getAllMeasurement(req, res) {
    const measurement = await Measurement.find()
    return res.json(measurement)
  }

  static async updateMeasurement(req, res) {
    const { measurementId } = req.params;
    const measurement = await Measurement.findById(measurementId)
    if (!measurement) {
      return res.json({
        status: 'error',
        'message log': 'Measurement Not Found'
      })
    }
    const { hips, sleeve, burst, chest, shoulder, waist } = req.body;
    measurement.hip = hips;
    measurement.sleeve =sleeve;
    measurement.burst= burst;
    measurement.chest= chest;
    measurement.shoulder = shoulder;
    measurement.waist = waist;
    measurement.save();
    res.status(200).json({
      status: 'success',
      message: 'Measurement is successfully updated',
      measurement
    });
  }
  static async getSingleMeasurement(req, res) {
    const { measurementId } = req.params;
    const measurement = await Measurement.findById(measurementId)
    if (!measurement) {
      return res.json({
        status: 'error',
        'message log': 'Measurement Not Found'
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'Measurements successfully fetch',
      measurement
    });
  }
} 
