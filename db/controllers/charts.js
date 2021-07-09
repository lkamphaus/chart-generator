const Chart = require('.././models/charts.js');
const mongodb = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
  find: async () => {
    try {
      const findDocuments = await Chart.find({});
      return findDocuments
    } catch(err) {
      console.log('err' + err);
    }
  },

  findOne: async (id) => {
    const chartId = id.toString();

    try {
      const findDocument = await Chart.findById(chartId);
      return findDocument
    } catch(err) {
      console.log('err' + err);
    }
  },

  save: async (entry) => {
    const { firstName, lastName, chartName, chartType, chartColor, chartPoints } = entry;
    try {
      let document = new Chart ({
        firstName,
        lastName,
        chartName,
        chartType,
        chartColor,
        chartPoints
      });
      let saveChart = await document.save();
    } catch (err) {
      console.log('err' + err);
    }
  },

  delete: async (id) => {
    try {
      const deleteDocument = await Chart.deleteOne({_id: new mongodb.ObjectID(id.toString())})
    } catch (err) {
      console.log('err' + err);
    }
  }
}
