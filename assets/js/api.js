var apiKey= "0d7986ede662de9f77df50487eb98a46 ";
var workingapikey ='https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=0d7986ede662de9f77df50487eb98a46'
// var citySelectionForm =$("#city selection form");

// citySelectionForm.on("submit", function(event) {
//     event.preventDefault();
    
//     console.log("form submitted");
// });
 $("#section-heading").text("Hello fromJquery");
//you goose

//url endpoint for city
function getApiEndpoint(city) {
    
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    return endpoint;
}   

// function to test api is working
function testData(request) {
    request = workingapikey;
    console.log( request)

//request api info
    fetch(request).then(function (res)
{
    if (res.ok) { 
    res
    .json()
        // console.log(test)
        .then(function (weatherData) {
            DataTest(weatherData);
        })
        
        
    } 
})

function DataTest(weatherData) {
    temp = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    wind = weatherData.wind.speed;
    icon =weatherData.weather[0].icon;
    console.log ("weatherData" + JSON.stringify(weatherData))
    console.log('big pooopy weather scum' + temp)
    console.log(humidity + "big humidity pooopy weather scum")
    console.log("big poopy wind speed"+wind)
    console.log("big poopy icon"+ icon)

    function getweekweather() {
       var lat = weatherData.coord.lat
       var long = weatherData.coord.lon
        
        var apiTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;
        fetch(apiTwo).then(function (res) {
            if (res.ok) {
                res.json().then(function (weeklyData) {
                    populateWeeklyData(weeklyData);

                });
            }
        });
    }
    getweekweather();
}



} 



testData();

// function makeRequest(endpoint) 
//     return fetch(endpoint).then(function (res){
//         return res.json();
//     });
// }




// var endpoint = generateEndpoint(city);

// makeRequest(endpoint).then(function(weatherData){

// };