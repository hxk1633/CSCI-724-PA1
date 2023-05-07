const express = require('express');
const soap = require('soap');
const cors = require('cors');

const app = express();
console.log("PORT: " + process.env.PORT);
const port = process.env.PORT || 3001;
app.use(cors())

const url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";


app.get('/', (req, res) => {
  res.send('Hi There')
});

app.get('/flag', (req, res) => {
  let countryName = req.query.country;
  console.log(countryName);
  let ICOCode;
  soap.createClient(url, function(err, client) {
    client.CountryISOCode({sCountryName: countryName}, function(err, result) {
      ICOCode = result.CountryISOCodeResult;
      console.log(ICOCode);
      client.CountryFlag({sCountryISOCode: ICOCode}, function(err, result) {
        console.log(result.CountryFlagResult);
        res.send(result.CountryFlagResult);
    });
    });
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})