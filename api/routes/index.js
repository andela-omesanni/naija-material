

module.exports = function (app, config) {
  
  app.get('/*', function(req, res) {
    res.sendFile("index.html", {root:'./public'});
  });
};