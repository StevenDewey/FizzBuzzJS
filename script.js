// ========================================

/* 

"I gave Steven special permission to 
use DOM selectors and methods" 
-Sam Eaton 

*/

// ========================================

function fizzbuzz(){

	for (var i = 0; i < 100; i++) {

		if (i%3 == 0 && i%5 ==0 && i != 0) {
			var fizzbuzz = document.createElement("div");
			fizzbuzz.innerHTML = '<h1>FIZZBUZZ</h1>';
			fizzbuzz.className = 'fizzbuzz hvr-pulse';
			//fizz.appendChild(document.createTextNode("Fizz"));
			document.body.appendChild(fizzbuzz);
		}
		else if (i%3 ==0) {
			var fizz = document.createElement("div");
			fizz.innerHTML = '<h1>FIZZ</h1>';
			fizz.className = 'fizz hvr-pulse';
			//fizz.appendChild(document.createTextNode("Fizz"));
			document.body.appendChild(fizz);
			
		}
		else if (i%5==0) {
			var buzz = document.createElement("div");
			buzz.innerHTML = '<h1>BUZZ</h1>';
			buzz.className = 'buzz hvr-pulse';
			//fizz.appendChild(document.createTextNode("Fizz"));
			document.body.appendChild(buzz);
		}
		else{
			var none = document.createElement("div");
			none.innerHTML = '<h1>'+i+'</h1>';
			none.className = 'none hvr-pulse';
			//fizz.appendChild(document.createTextNode("Fizz"));
			document.body.appendChild(none);
		}
	};
};

fizzbuzz();

/*
ara.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);*/