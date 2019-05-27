# N_PDF_CV (V IZDELAVI)

Program nam na podlagi vnešenih podatkov izdela PDF dokument, z uporabo v naprej pripravljene sheme. Uporabljen je pdfkit modul. Podatki bodo poslani preko restful api in uporabljen bo modul express-formidable za prevzem fotografije.

https://nodejs.org/en/knowledge/HTTP/servers/how-to-handle-multipart-form-data/

## Uporabljeno

Program uporablja sintakso Async-Await. Za funkcijo, ki uporablja callback() sem uporabil util.promisify za prireditev na pravo sintakso.

* nodejs tehnologija
* pdfkit
* https://www.npmjs.com/package/express-formidable
