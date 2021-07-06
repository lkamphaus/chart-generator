const db = require('../db');

module.exports = {

  getAll: async () => {
    const getAllCharts = `SELECT *
                          FROM chart`;

    try {
      res = await db.pool.query(getAllCharts)
    } catch (err) {
      console.log('Error', err);
    }
  },

  // create: () => {

  // }
}