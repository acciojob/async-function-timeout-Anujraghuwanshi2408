//your JS code here. If required.
const btn = document.getElementById("btn");
btn.addEventListener("click" , toMakeDelay);
async function toMakeDelay(){
	const text = document.getElementById("text").value
	const delay = document.getElementById("delay").value
	const output = document.getElementById("delay");
	await settimeout(() => {
		output.innerText = text;
	} , delay*1000)
}