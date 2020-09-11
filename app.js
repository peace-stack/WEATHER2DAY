var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.Value}&appid=d771e9eb2c8e0c39a33c9763ee5ff2b7`)
	.then(response => response.json())
	.then(data => {

		
		var nameValue = data["name"];
		var tempValue = data["main"]['temp'];
		var descValue = data["weather"][0]["describtion"];
			name.InnerHTML = nameValue;
			temp.InnerHTML = tempValue;
			desc.InnerHTML = descValue;
	})
	.catch( err => alert("wrong city name"))
})