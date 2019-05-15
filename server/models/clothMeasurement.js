import { Schema, model } from 'mongoose';

let Measurement = new Schema({
  waist: {
    type: String
  },
  burst: {
    type: String
  },
  chest: {
    type: String
  },
  hips: {
    type: String
  },
  sleeve: {
    type: String
  },
  shoulder: {
    type: String
  },

});

export default model('Measurement ', Measurement);
