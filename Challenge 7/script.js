
for (var counter = 0; counter < 50; counter = counter + 1){ 
	if (counter % 3 === 0 && counter % 5 === 0) {
		var fizzbuzz = document.createElement("div");
		fizzbuzz.innerHTML = '<h2>FIZZBUZZ</h2>';
		fizzbuzz.className = 'fizzbuzz';
		document.getElementById('welcome').appendChild(fizzbuzz);
	} else if (counter % 3 === 0) {
		var fizz = document.createElement("div");
		fizz.innerHTML = '<h2>FIZZ</h2>';
		fizz.className = 'fizz';
		document.getElementById('welcome').appendChild(fizz);
	} else if (counter % 5 === 0) {
		var buzz = document.createElement("div");
		buzz.innerHTML = '<h2>BUZZ</h2>';
		buzz.className = 'buzz';
		document.getElementById('welcome').appendChild(buzz);
	} else {
		var none = document.createElement("div");
		none.innerHTML = '<h2>'+counter+'</h2>';
		none.className = 'none';
		document.getElementById('welcome').appendChild(none);
	}
}
