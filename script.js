//your JS code here. If required.
let x = new Promise(resolve => {
	setTimeout(() => {
	 resolve("Hello, world!");
	}, 1000)
});

x.then((data) => {
	let element = document.getElementById("output");
	element.innerText = data;
})