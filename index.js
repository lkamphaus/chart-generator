const express = require('express');
const query = require('./db/controllers/charts.js');
require('./db')

const port = 7000;
const path = require('path');

let app = express();

app.use(express.static(__dirname + "/client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/charts', async (req, res) => {

  try {
    const findSavedCharts = await query.find();
    res.json(findSavedCharts);
  } catch(err) {
    res.status(400).end()
  }
})

app.get(`/api/share-chart/:id`, async (req, res) => {

  const chartId = req.params.id;

  try {
    const findOneSavedChart = await query.findOne(chartId);
    res.json(findOneSavedChart);
  } catch(err) {
    res.status(400).end()
  }
})

app.post('/charts', async (req, res) => {

  try {
    const saveChart = await query.save(req.body)
    res.status(201).end();
  } catch(err) {
    res.status(400).end()
  }
})

app.delete(`/api/charts/:id`, async (req, res) => {

  const chartId = req.params.id;

  try {
    const saveChart = await query.delete(chartId)
    res.status(204).end();
  } catch(err) {
    res.status(400).end()
  }
})

app.get('/*',  (req, res) => {

  res.sendFile(__dirname + '/client/dist/index.html', function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
