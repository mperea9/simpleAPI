$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=60791200d28d3cdb6da784f25e69cc1c", function(data){
	console.log(data);

	var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp = Math.floor(data.main.temp);
	var weather = data.weather[0].main


	$('.icon').attr('src', icon);
	$('.weather').append(weather);
	$('.temp').append(temp);

	}
);