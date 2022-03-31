

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());

app.get('/getNextStop', (req, res) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': 'localhost'
    }
};

  fetch("https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=37758df8&apiKey=22db7e9dae8dec100f62abb2c4195f2c&stopNo=3034&routeNo=97&format=JSON", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result); res.send(result)})
    .catch(error => console.log('error', error));

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})