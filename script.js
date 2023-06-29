//your JS code here. If required.
const btn = document.getElementById('btn');
btn.addEventListener('click' , toMakeDelay);
async function toMakeDelay(){
	const text = document.getElementById('text').value
	const delay = document.getElementById('delay').value
	const output = document.getElementById('output');
	output.innerText = 'Test - 1';
	await new Promise(resolve => setTimeout(resolve , delay*1000) ) 
	output.innerText = text;
}
// async function displayMessage() {
//         const messageInput = document.getElementById('text');
//         const delayInput = document.getElementById('delay');
//         const outputDiv = document.getElementById('output');

//         const message = messageInput.value;
//         const delay = delayInput.value * 1000; // Convert seconds to milliseconds

//         outputDiv.textContent = 'Waiting for ' + delayInput.value + ' seconds...';

//         await new Promise(resolve => setTimeout(resolve, delay));

//         outputDiv.textContent = message;
//       }

//       const btn = document.getElementById('btn');
//       btn.addEventListener('click', displayMessage);
