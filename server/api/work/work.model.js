'use strict';

import mongoose from 'mongoose';

var WorkSchema = new mongoose.Schema({
  week: Number,
  date: Date,
  updated: Date,
  models: {
    sh: Number,
    ms: Number
  }
});

export default mongoose.model('Work', WorkSchema);
