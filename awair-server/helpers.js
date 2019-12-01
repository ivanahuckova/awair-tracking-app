processData = (data) => {
  const result = []
  const targets = data[0].sensors.map(sensor => sensor.comp)

  for (let i = 0; i < targets.length; i++) {
    let sensorResult = {};

    sensorResult.target = targets[i];
    sensorResult.datapoints = data.map(data => {
      let time = Date.parse(data.timestamp);
      let sensorData = data.sensors.filter(sensor => sensor.comp === targets[i]);
      return {value: sensorData[0].value, time: time};
    })
    
    result.push(sensorResult);
  }
  
  return result;
}

processSensors = (data) => {
  let result = {
    data: []
  }
  for (let i = 0; i < data.length; i++) {
    data.forEach(sensor => {
      result.data.push({deviceType: sensor.deviceType, deviceId: sensor.deviceId})
    })
  }
  return result;
}

module.exports = {
  processData,
  processSensors
}