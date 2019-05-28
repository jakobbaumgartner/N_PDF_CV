const express = require('express');
const PDFDocument = require('pdfkit')
const fs = require('fs')
const formidableMiddleware = require('express-formidable');
const createpdf = require('./controller/createpdf')
 
var app = express();
 var filename;

app.use(formidableMiddleware({
	encoding: 'utf-8',
	uploadDir: './photos',
	multiples: false, // req.files to be arrays of files
  }, 
  [
		{
		  event: 'file',
		  action: function (req, res, next, name, file) {
			filename = './photos/' + file.name
			fs.rename(file.path, filename, (err) =>{console.log("nekaj")}); }
		}
	]
  ))
  var response;
  app.use('/', (req, res)=> {
	  response = res
	  console.log(filename)
	  res.status(200);
	  createpdf(filename, req.fields.naslov, req.fields.iskanazaposlitev, req.fields.izobrazba1, req.fields.izobrazba2, req.fields.kompetence1, req.fields.kompetence2, req.fields.drugo, req.fields.omeni, req.fields.interes1, req.fields.interes2, req.fields.interes3, req.fields.interes4, req.fields.interes5 )
  })
 

  app.post('/', (req, res) => {
	  console.log("Post seen.")
  });






// var lorem ='dsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfds'
// var naslov = 'Jakob Baumgartner'
// var iskanazaposlitev = 'Iscem zaposlitev za nedolocen delovni cas, polno. Iscem zaposlitev za nedolocen delovni cas, polno.Iscem zaposlitev za nedolocen delovni cas, polno.Iscem zaposlitev za nedolocen delovni cas, polno.Iscem zaposlitev za nedolocen delovni cas, polno.'
// var izobrazba1 = 'Izobrazba'
// var izobrazba2 = 'Izobrazba'
// var kompetence1 = 'blebleble'
// var kompetence2 = 'bluebable'
// var drugo = 'sem ful fejst'
// var omeni = 'fdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdsfdsfdsf'
// var interes1 = 'interessanten'
// var interes2 = 'interessanten'
// var interes3 = 'interessanten'
// var interes4 = 'interessanten'
// var interes5 = 'interessanten'


app.listen(5000, () => {
	console.log(`Server started on port`);
});