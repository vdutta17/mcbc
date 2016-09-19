//var bikes = require('./routes/portfolio');

module.exports = function(app) {

	

//	app.get('/bikes', wines.findAll);
//    app.get('/bikes/:id', wines.findById);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/pages/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};