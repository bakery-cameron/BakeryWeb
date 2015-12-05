var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


//-----email stuff-------//
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var MG_API_KEY = process.env.MG_API_KEY;
var MG_DOMAIN = 'sandbox839634cef75d498590b21309c025332c.mailgun.org';
if(!MG_API_KEY) console.log('No Mailgun API KEY in env vars');
var mailgun = require('mailgun-js')({apiKey:MG_API_KEY,domain:MG_DOMAIN});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//-----------------------//



app.set('port', (process.env.PORT || 5000));

app.use('css', express.static(path.join(__dirname , '../dist/css')));
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


//-----email stuff-------//


app.post('/email-gif',upload.single('gif'),function(req,res){
	var gifattch = new mailgun.Attachment({data: req.file.buffer, filename: req.file.originalname});
	var data = {
		from: 'info@bakery.agency',
		to: req.body.toemail,
		subject: 'Here is your gif',
		attachment: gifattch
	};
	mailgun.messages().send(data, function (err, body) {
		if (err){
			console.log('Oh noes: ' + err);
			res.json({ok:false});
		} else {
			console.log('Success', body);
			res.json({ok:true});
		}
	});
});

app.post('/email-message',function(req,res){
	var data = {
		from: req.body.email,
		to: 'contact@bakery.agency',
		subject: 'General Inquiry',
		text: req.body.text
	};
	mailgun.messages().send(data, function (err, body) {
		if (err){
			console.log('Oh noes: ' + err);
			res.json({ok:false});
		} else {
			console.log('Success', body);
			res.json({ok:true});
		}
	});
});
app.post('/email-project',function(req,res){
	console.log(req.body)
	var data = {
		from: req.body.email,
		to: 'contact@bakery.agency',
		subject: 'Business Opportunity',
		text: req.body.text
	};
	mailgun.messages().send(data, function (err, body) {
		if (err){
			console.log('Oh noes: ' + err);
			res.json({ok:false});
		} else {
			console.log('Success', body);
			res.json({ok:true});
		}
	});
});
app.post('/email-resume',upload.single('resume'),function(req,res){
	var attch = new mailgun.Attachment({data: req.file.buffer, filename: req.file.originalname});
	var data = {
		from: req.body.email,
		to: 'contact@bakery.agency',
		subject: 'Career Submission',
		text: req.body.text,
		attachment: attch
	};
	mailgun.messages().send(data, function (err, body) {
		if (err){
			console.log('Oh noes: ' + err);
			res.json({ok:false});
		} else {
			console.log('Success', body);
			res.json({ok:true});
		}
	});
});




//-----------------------//





app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function isValidFolder(folder){
	stats = fs.lstatSync(path.join(__dirname , folder));
	console.log(stats, stats.isDirectory());
    return stats.isDirectory();
}