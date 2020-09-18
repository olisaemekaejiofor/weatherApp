function getTime() {
	var d = new Date();
	var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var minutes = d.getMinutes()
	m = checkTime(minutes)
	document.getElementById("time").innerHTML = d.getHours() + " : " + m 
	document.getElementById("day").innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()]
	var t = setTimeout(getTime, 500)
}
function checkTime(i) {
	if (i < 10){
		i = "0" + i
	}
	return i;
}
