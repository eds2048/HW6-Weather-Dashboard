

// API Key 166a433c57516f51dfab1f7edaed8413
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";


//Ron's Notes
    // icon assets http://openweathermap.org/img/wn/09d@2x.png;
    // getCityWeather ( cityName)
    // create urlString: api base url + endpoint + cityname
    // make a ajax to weather api with city name
    // return results
    // takeWeatherResultsAndBuildHTML ( weather obj)
    // build html elements from results

//var $img = $("<img>").attr({ alt: weatherResults.weather.main + " icon", src: "http://openweathermap.org/img/wn/" + weatherResults.weather.icon + "@2x.png" })
        // read local storage for city buttons
        // click events:
            // add click event to form city input
                // search weather for that city (getCityWeather("city-name"))
                // push city name to local storage (history: [array-of cities])
                // display city weather (displayWeather(weatherObj))
            // add click event to city selection input
                // search weather for that city (getCityWeather("city-name"))
                // push city name to local storage (history: [array-of cities])
                // display city weather (displayWeather(weatherObj))
        //// execution
        // CALL: read local storage()

    $("#select-city").on("click",function (){
      
        var queryURL = "https://api.openweathermap.org/data/2.5/weather/?q=" + name + "&appid={166a433c57516f51dfab1f7edaed8413}";
        var city = $("#city-input").val().trim();
        console.log("City " + city);
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            $("#weather-view").text(JSON.stringify(response));
            console.log(response);

        });
    })






