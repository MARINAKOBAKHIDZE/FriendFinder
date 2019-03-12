//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to survey.html - displays survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
