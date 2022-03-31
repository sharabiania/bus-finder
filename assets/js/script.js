var busData = {};

var getBusData = function(){
    var stopNum = 3034;
    var busNum = 97;
    var ocUrl = "https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=c5eb50b7&apiKey=2f7cc31be223832e5024dbbfadd14951&stopNo="+stopNum+"&routeNo="+busNum+"&format=JSON";
    console.log(ocUrl);
    fetch(ocUrl)
        .then(function(response){
            if (response.ok){
                response.json()
                    .then(function(data){
                        busData = data;
                        console.log(busData);
                    })
            }
        })
}

getBusData();