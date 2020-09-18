function getLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
	}else{
		console.log("GeoLocation is not available for this browser")
	}
}
function showPosition(position){
	var newLat = position.coords.latitude 
	var newLng = position.coords.longitude
	urlKey = "&appid=916b275928783cd2c88f09c25187358e"
	Url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + newLat + "&lon=" + newLng + urlKey + "&units=metric"
	getWeather(Url)
}
async function getWeather(Url){
	let weatherRes = await fetch(Url)
	let weatherData = await weatherRes.json()
	console.log(weatherData)


	var options = weatherData.current.weather[0].main
	document.getElementById("temperature").innerHTML = weatherData.current.temp + "°"
	document.getElementById("country").innerHTML = weatherData.timezone
	document.getElementById("theText").innerHTML = weatherData.current.weather[0].main + ": " + weatherData.current.weather[0].description
	if (options == "Clouds") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/cloudy.png'>"
	}
	if (options == "Rain") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/rain.png'>"
	}
	if (options == "Clear") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/sunny.png'>"
	}
	if (options == "Thunderstorm") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/thunder-storm.png'>"
	}
	if (options == "Snow") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/snow.png'>"
	}
	
}
const form = document.getElementById('form')
form.addEventListener('submit', function(e) {
	e.preventDefault()
	var input = document.getElementById('search').value
	var apiKey = "&appid=916b275928783cd2c88f09c25187358e"
	var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + input + apiKey + "&units=metric"
	search(apiUrl)
})
async function search(apiUrl){
	let response = await fetch(apiUrl)
	let data = await response.json()
	console.log(data)
	var temp = data.main.temp
	var city = data.name
	var country = data.sys.country
	var otherOption = data.weather[0].main
	document.getElementById("temperature").innerHTML = temp + "°"
	document.getElementById("country").innerHTML = city + ", " + country
	document.getElementById("theText").innerHTML = data.weather[0].main + ": " + data.weather[0].description
	if (otherOption == "Clear") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/sunny.png'>"
	}
	if (otherOption == "Clouds") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/cloudy.png'>"
	}
	if (otherOption == "Rain") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/rain.png'>"
	}
	if (otherOption == "Thunderstorm") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/thunder-storm.png'>"
	}
	if (otherOption == "Snow") {
		document.getElementById("icon").outerHTML = "<img id='icon' src='images/snow.png'>"
	}
}