var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname , '../')));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/blog/:year/:monthDay', function(req, res) {
	var year = req.params.year;
	var monthDay = req.params.monthDay;
  	res.sendFile(path.join(__dirname , '../blog', year, monthDay, 'index.html'));
});

app.get('/:folder', function(req, res, next) {
	var folder = req.params.folder;
	try {
	    var isValid = isValidFolder(folder);
	    if (isValid) {
	    	console.log(folder);
	        res.sendFile(path.join(__dirname , '../', folder, 'index.html'));
	    }
	}
	catch (e) {
	    next();
	}
});

app.get('*', function(req, res) {
  	res.sendFile(path.join(__dirname , '../404/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function isValidFolder(folder){
	stats = fs.lstatSync(path.join(__dirname , folder));
	console.log(stats, stats.isDirectory());
    return stats.isDirectory();
}