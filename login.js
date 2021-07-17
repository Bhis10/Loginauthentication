const form = document.getElementById('form');
const password = document.getElementById('password');
const hover=document.getElementById('button');
document.getElementById("button").addEventListener("mouseover", mouseOver);
function mouseOver() {
  document.getElementById("button").style.cursor = "pointer";
}

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
})



function checkInputs() {

	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);

	}

		if(passwordValue === '') {
			setErrorFor(password, 'Password cannot be blank');
}
      else if(usernameValue === '') {
			setErrorFor(username, 'Username cannot be blank');
		}
		 else{
			location.href="dash.html";

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
