const express = require('express');
const soap = require('soap');
const cors = require('cors');
// const path = require('path')
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3001;

// module.exports = function(app) {
//     app.use(
//       '/api',
//       createProxyMiddleware({
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//       })
//     );
// };

// var url = 'http://www.SoapClient.com/xml/SQLDataSoap.WSDL';
// var args = {SRLFile: 'xml/NEWS.SRI', RequestName: 'Google'};
// soap.createClient(url, function(err, client) {
//     client.ProcessSRL(args, function(err, result) {
//         console.log(result);
//     });
// });

// app.use(express.static(path.join(__dirname, './client/build')));

app.get('/api/flag', cors(), (req, res) => {
  res.send({hello: "world"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})