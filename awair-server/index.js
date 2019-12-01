require('dotenv').config()

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const server = express();
const helpers = require('./helpers')

const port = process.env.PORT || 8000;

server.use(express.json());
server.use(cors());

server.post('/data', (req, res) => {
  const from = req.body.from || new Date('05 October 2018 14:48 UTC').toISOString();
  const to = req.body.to || new Date().toISOString();
  const token = req.body.token;
  const type = req.body.activeDevice.deviceType;
  const id = req.body.activeDevice.deviceId;
  const url =  `http://developer-apis.awair.is/v1/users/self/devices/${type}/${id}/air-data/15-min-avg?from=${from}&to=${to}&limit=360&desc=true&fahrenheit=false`

  const processedData = [];
  axios
  .get(url, {
    headers: { 'Authorization': `Bearer ${token}` },
  })
  .then(data => {
    processedData.push(...helpers.processData(data.data.data))
    res.status(200).json(processedData);
    })
  .catch((error) => {
    res.status(500).json({ error });
  });
})

server.post('/sensors', (req, res) => {
  const url =  `http://developer-apis.awair.is/v1/users/self/devices`
  const token = req.body.token;
  axios
  .get(url, {
    headers: { 'Authorization': `Bearer ${token}` },
  })
  .then(data => {
    const processedSensors = helpers.processSensors(data.data.devices)
    res.status(200).json(processedSensors.data);
    })
  .catch((error) => {
    res.status(500).json({ error });
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`));