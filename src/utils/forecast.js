const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f78ec2739e118c1f3d398f52370f9150&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, {body}={}) => {
    if (error) {
        callback("Unable to connect weather service!",undefined);
    } else if (body.error) {
        callback("Unable to get location!",undefined);
    } else {
      callback(undefined, {
        message: body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out but feels like " +
          body.current.feelslike +
          " degrees"
      });
    }
  });
};

module.exports = forecast;
