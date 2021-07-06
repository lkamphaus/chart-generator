const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.chart.getAll(() => {
      try {
        res.json(res)
      } catch (err) {
        console.log(err.stack);
        res.status(400).res.end();
      }
    });
  }
}