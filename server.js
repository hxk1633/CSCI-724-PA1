const express = require('express');
const soap = require('soap');

const app = express();
const port = 3000;

var url = 'http://www.SoapClient.com/xml/SQLDataSoap.WSDL';
var args = {SRLFile: 'xml/NEWS.SRI', RequestName: 'Google'};
soap.createClient(url, function(err, client) {
    client.ProcessSRL(args, function(err, result) {
        console.log(result);
    });
});

// app.get('/similar', (req, res) => {
//   const title = req.query.t;
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })