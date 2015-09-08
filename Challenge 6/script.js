
for (var counter = 0; counter < 50; counter = counter + 1){ 
	if (counter % 3 === 0 && counter % 5 === 0) {
		var fizzbuzz = document.createElement("p");
		fizzbuzz.innerHTML = '<p>FIZZBUZZ</p>';
		document.getElementById('welcome').appendChild(fizzbuzz);
	} else if (counter % 3 === 0) {
		var fizz = document.createElement("div");
		fizz.innerHTML = '<h4>FIZZ</h4>';
		document.getElementById('welcome').appendChild(fizz);
	} else if (counter % 5 === 0) {
		var buzz = document.createElement("div");
		buzz.innerHTML = '<h4>BUZZ</h4>';
		document.getElementById('welcome').appendChild(buzz);
	} else {
		var none = document.createElement("div");
		none.innerHTML = '<h4>'+counter+'</h4>';
		document.getElementById('welcome').appendChild(none);
	}
}
