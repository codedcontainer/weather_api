$(document).ready(function(){

setInterval(function(){weather()},180000);
weather();
function weather()
{	
	var city = "Carmel";
	var state="IN";
	var bob = new Date();
	var hour = bob.getHours();
	var minute = bob.getMinutes();
	var nowTime=hour+""+minute;
	console.log(nowTime);
	var light;
	console.log(light);
	$.ajax
	({
		dataType:'jsonp',
		url: "http://api.wunderground.com/api/"+api+"/astronomy/q/"+state+"/"+city+".json",
		success: function(a)
		{
			var sunrise = a.moon_phase.sunrise.hour + a.moon_phase.sunrise.minute;
			var sunset = a.moon_phase.sunset.hour + a.moon_phase.sunset.minute;
			console.log(sunrise);
			console.log(sunset);
			
			
			if (((nowTime<sunset) && (nowTime>sunrise)) || (nowTime<sunset) && (nowTime<sunrise))
			{
				light = true;
			}
			else if ((nowTime>sunset) && (nowTime<sunrise))
			{
				light = false;
			}
		}
	});
	$.ajax
	({
		dataType: 'jsonp',
		url: "http://api.wunderground.com/api/"+api+"/conditions/q/"+state+"/"+city+".json",
		success:function(e)
		{
			$(temp);
			$(condition);
						
			function condition()
			{
				var weather = e.current_observation.weather;
				console.log(weather);
				$(conditionimg(weather,light));
				$('#temp').append(e.current_observation.weather);
			}
			function temp()
			{
				var temp= e.current_observation.temp_f;
				console.log(temp);
				if (temp>=70)
				{
					//document.write("t-shirt and shorts");
				}
				else if ( (temp>=60) && (temp<=69))
				{
					//document.write("t-shirt and pants");
				}
				else if( (temp>=33) && (temp<=59))
				{
					$('#tempa').html("<img src='images/sweater.png'/>");
					$("#tempa").append("<img src='images/pants.png'/>");
					$("#tempa img").height("100px");
					$("#tempa").css({"Margin-top":"25px"});
					
					//document.write("pants and a sweater");
				}
				else if ( (temp<=32))
				{
					$('#tempa').append("<img src='images/wintercoat.png'");
					document.write("wear coat, no gloves");
				}
				else if ((temp<25))
				{
					//document.write("wear coat and gloves");
				}
			}
		}	
	});
	//Get temperature every 3 minutes
	
	$.ajax
	({
		dataType: 'jsonp',
		url: "http://api.wunderground.com/api/"+api+"/conditions/q/"+state+"/"+city+".json",
		success:function(e)
		{
			var timertemp = e.current_observation.temp_f;
			$('#temp').html("<p>"+timertemp+"</p>");
		}
	});
	
}
});