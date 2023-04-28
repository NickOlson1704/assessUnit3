console.log("hello world");
let rrImage = document.querySelector('img')

rrImage.addEventListener('mouseover', () => {
	alert('You are Amazing!')
})

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}




let form = document.querySelector('#contact');


form.addEventListener('submit', (event) => {
	event.preventDefault()
		alert('Submitted')
});