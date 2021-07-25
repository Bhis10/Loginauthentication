const form = document.getElementById('form');
const username = document.getElementById('username');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const hover=document.getElementById('button');

document.getElementById("button").addEventListener("mouseover", mouseOver);
function mouseOver() {
document.getElementById("button").style.cursor = "pointer";
}


form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});



function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
	} else {
		setSuccessFor(fullname);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else {
		setSuccessFor(email);
	}
	

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue.length < 6){
		setErrorFor(password, 'Passwords should be longer than 6 character');
	}
		else{
		setSuccessFor(password);
	}

	if(password2Value === ''){
		setErrorFor(password2, 'Password cannot be blank');

	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else if(password2Value.length < 6){
		setErrorFor(password2, 'Passwords should be longer than 6 character');
	}
	else{
		setSuccessFor(password2);
		window.location.replace("index.html");
	}

}




function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
