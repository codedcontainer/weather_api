function conditionimg(weather,light)
{

	if((weather == "Partly Cloudy") || weather == "Scattered Clouds")
	{
		$(lightimg(light, "images/overcast.jpg","images/overcast.jpg"));
	}
	else if( (weather == "Overcast") || (weather == "Mostly Cloudy"))
	{
		$(lightimg(light, "images/overcast.jpg","images/overcast.jpg"));
	}
	
	else if ( (weather == "Light Snow" ) || (weather == "Heavy Snow") 
	|| (weather=="Low Drifting Snow") || (weather=="Light Drifting Snow") 
	|| (weather=="Blowing Snow") )
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if (weather == "Light Thunderstorm" || weather =="Heavy Thunderstorm")
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if (weather == "Light Thunderstorms with Hail" 
	|| weather == "Heavy Thunderstorms with Hail"
	|| weather =="Light Thunderstorms with Small Hail"
	|| weather =="Heavy Thunderstorms with Small Hail"
	|| weather == "Light Hail Showers" || weather == "Heavy Hail Showers")
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if (weather == "Light Thunderstorms and Rain" 
	|| weather =="Heavy Thunderstorms and Rain")
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if (weather == "Light Thunderstorms and Snow"
	|| weather == "Heavy Thunderstorms and Snow")
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if (weather == "Clear")
	{
		$(lightimg(light, "images/clear.jpg","images/night_clear.jpg"));
	}
	else if (weather == "Shallow Fog" || weather=="Partial Fog"
	|| weather =="Patches of Fog" || weather =="Light Freezing Fog"
	|| weather == "Heavy Freezing Fog" || weather =="Light Fog"
	|| weather == "Heavy Fog")
	{
		//$('body').css({'background-image':'url(images/overcast.jpg)'});
	}
	else if(weather == "Light Rain" || weather == "Rain" 
	|| weather == "Light Freezing Rain" || weather =="Light Freezing Drizzle")
	{
		$(lightimg(light, "images/day_rain2.jpg","images/night_rain_light.jpg"));
	}
	else if(weather == "Heavy Rain" || weather == "Heavy Freezing Rain"  
	|| weather =="Heavy Freezing Drizzle")
	{
		$(lightimg(light, "images/day_rain_heavy.jpg","night_rain_heavy.jpg"));
		
	}
	
	function lightimg(light,img1,img2)
	{
		if(light == true)
		{
			$('body').css({'background-image':'url('+img1+')'});
		}
		else
		{
			$('body').css({'background-image':'url('+img2+')'});
		}
		
	}
	
	
}