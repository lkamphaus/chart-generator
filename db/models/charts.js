const mongoose = require('mongoose');

let chartSchema = mongoose.Schema({
  firstName: {
    type: String,
    requried: true
  },
  lastName: {
    type: String,
    requried: true,
  },
  chartName: {
    type: String,
    requried: true
  },
  chartType: {
    type: String,
    requried: true
  },
  chartColor: {
    type: String,
    requried: true,
  },
  chartPoints: {
    type: Array,
    requried: true,
  }
});

let Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;