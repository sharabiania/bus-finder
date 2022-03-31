var busData = {};
// 22db7e9dae8dec100f62abb2c4195f2c	
// 37758df8
var getBusData = function () {
    // var stopNum = 3034;
    // var busNum = 97;
    // var ocUrl = "https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=c5eb50b7&apiKey=2f7cc31be223832e5024dbbfadd14951&stopNo=" + stopNum + "&routeNo=" + busNum + "&format=JSON";

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch("http://localhost:3000/getNextStop", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



}

getBusData();