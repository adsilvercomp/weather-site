$(document).ready(function () {
    console.log("ready!");

    let state = false

    $("#header").click(function () {

        //if the variable is true
        if (state == false) {
            $("#header").css("color", "blue")
        } else {
            $("#header").css("color", "red")
        }


        return state = !state

    })






    $.ajax({
        url: "https://api.wunderground.com/api/a9ff9939e8d6ed37/forecast10day/q/NY/New_York.json",
        type: "GET"
    }).done(function (result) {
        console.log(result.forecast.simpleforecast.forecastday);
        let weatherArr = result.forecast.simpleforecast.forecastday

        //Today's weather
        $("#date").append(weatherArr[0].date.weekday + " " + weatherArr[0].date.month+  "/"+ weatherArr[0].date.day);
        $("#description").append(weatherArr[0].conditions);
        $("#temperature").append("High " + weatherArr[0].high.fahrenheit +"°F"+ " / " + "Low "+ weatherArr[0].low.fahrenheit + "°F")
        $("#icon").attr("src", weatherArr[0].icon_url);

        //these if statements determine the weather background
        // if(weatherArr[0].conditions==="Rain"){
        //     $("#today").css('background-image', "url(https://media.giphy.com/media/Il9f7ZhytEiI0/giphy.gif)");
        // }else if(weatherArr[0].conditions==="Overcast"){

        // }

        let weather = weatherArr[0].conditions

        switch(weather){
            case "Rain":
            $("#today").css('background-image', "url(https://media.giphy.com/media/n0Zt16UrMKNFu/giphy.gif)")
            break;
            case "Chance of Rain":
            $("#today").css('background-image', "url(https://media.giphy.com/media/n0Zt16UrMKNFu/giphy.gif)")
            break;
            case "Overcast":
            $("#today").css('background-image', "url(https://media.giphy.com/media/TEvh9P0jAFbvW/giphy.gif)")
            break;
            case "Mostly Cloudy":
            $("#today").css('background-image', "url(https://media.giphy.com/media/TEvh9P0jAFbvW/giphy.gif)")
            break;
            case "Partly Cloudy":
            $("#today").css('background-image', "url(https://media.giphy.com/media/l41lQIclE3lItAlfq/giphy.gif)")
            break;
            case "Clear":
            $("#today").css('background-image', "url(https://media.giphy.com/media/yNFsoLskwEBYA/giphy.gif)")
            break;
        }
       
        //Upcoming Week
        for(let i=1;i<weatherArr.length-2;i++){
       
            console.log(weatherArr[i].icon_url)
            $("#weatherList").append("<li>" + "<h1>"+weatherArr[i].date.weekday + " " + weatherArr[i].date.month+  "/"+ weatherArr[i].date.day + "<br/>" + "High " + weatherArr[i].high.fahrenheit +"°F"+ "<br/>"  + "Low "+ weatherArr[i].low.fahrenheit + "°F"+ "</h1>"  + "<img src=" + weatherArr[i].icon_url  + ">" + "<hr/>" + "</li>")

        }
       

       
    });


});







