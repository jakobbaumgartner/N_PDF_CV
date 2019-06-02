const PDFDocument = require('pdfkit')
const path = require('path')
const fs = require('fs')

module.exports = (req, res, doc, filename, naslov='/', iskanazaposlitev='/', izobrazba1='/', izobrazba2='/', kompetence1='/', kompetence2='/', drugo='/', omeni='/', interes1='/', interes2='/', interes3='/', interes4='/', interes5='/') => {

	
	doc.pipe(fs.createWriteStream('testpdf.pdf'))


	const y_line1 = 60
	const x_column1 = 60
	const x_column2 = 370
	const width_column1 = 270
	const width_column2 = 175
	

	//prvo sestavimo levi stolpec
	
	doc.fontSize(20).text(naslov, x_column1, y_line1, {width: width_column1, align: 'left'})
	
	
	doc.fontSize(18).text('Iskana zaposlitev', x_column1, 100, {width: width_column1, align: 'left'})
	doc.moveTo(60, 120).lineTo(300, 120).stroke()
	doc.fontSize(12).text(iskanazaposlitev, x_column1,140, {width: width_column1})
	
	
	doc.fontSize(18).text('Izobrazba', x_column1, 260, {width: width_column1, align: 'left'})
	doc.moveTo(60, 280).lineTo(300, 280).stroke()
	doc.fontSize(14).text(izobrazba1, x_column1, 300, {width: width_column1, align: 'left'})
	doc.fontSize(14).text(izobrazba2, x_column1, 325, {width: width_column1, align: 'left'})
	
	
	doc.fontSize(18).text('Kompetence', x_column1, 360, {width: width_column1, align: 'left'})
	doc.moveTo(60, 380).lineTo(300, 380).stroke()
	doc.fontSize(14).text(kompetence1, x_column1, 400, {width: width_column1, align: 'left'})
	doc.fontSize(14).text(kompetence2, x_column1, 425, {width: width_column1, align: 'left'})
	
	
	doc.fontSize(18).text('drugo', x_column1, 500, {width: width_column1, align: 'left'})
	doc.moveTo(60, 520).lineTo(300, 520).stroke()
	doc.fontSize(12).text(drugo, x_column1, 540, {width: width_column1, align: 'left'})
	
	
	//Sedaj sestavimo desni stolpec
	
	doc.image(filename, x_column2, y_line1, {width: width_column2})
	doc.fontSize(12).text(omeni, x_column2, 270, {width: width_column2})
	doc.fontSize(18).text('Interesi', x_column2, 525, {width: width_column2})
	doc.moveTo(x_column2, 545).lineTo(x_column2+width_column2, 545).stroke()
	
	doc.fontSize(14).text('->' + interes1, x_column2, 560, {width: width_column2})
	doc.fontSize(14).text('->' + interes2, x_column2, 585, {width: width_column2})
	doc.fontSize(14).text('->' + interes3, x_column2, 610, {width: width_column2})
	doc.fontSize(14).text('->' + interes4, x_column2, 635, {width: width_column2})
	doc.fontSize(14).text('->' + interes5, x_column2, 660, {width: width_column2})
	
	
	//in pa pokličemo izvedbo dokumenta
	//doc.end()

	savetopdf(doc, "pdfCV.pdf").then(() => {
		res.sendFile(path.join(__dirname,'..', 'testpdf.pdf'))
	})


}

function savetopdf (pdf, fileName) {



	return new Promise ((resolve, reject) => {

        // To determine when the PDF has finished being written successfully 
        // we need to confirm the following 2 conditions:
        //
        //   1. The write stream has been closed
        //   2. PDFDocument.end() was called syncronously without an error being thrown

        let pendingStepCount = 2;

        var stepFinished = ()=> {
			console.log("Stepfinsihed ran")
			pendingStepCount--
            if (pendingStepCount == 0) {
				resolve();
				console.log("solved")
            }
        };

        const writeStream = fs.createWriteStream(fileName);
        writeStream.on('close', stepFinished)
        pdf.pipe(writeStream);

        pdf.end();

        stepFinished();
})}
