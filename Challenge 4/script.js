var counter = 15;

if (counter % 3 === 0 && counter % 5 === 0) {
	console.log('FIZZ BUZZ!');
} else if (counter % 3 === 0) {
	console.log('FIZZ!');
} else if (counter % 5 === 0) {
	console.log('BUZZ!');
} else {
	console.log(counter);
}