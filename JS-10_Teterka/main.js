document.querySelector('#button1').addEventListener('click', function() {
	
	// First Name
	
	function CheckName() {
		let pattern = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

		let firstTest = pattern.test(document.getElementById('firstName').value);

		let firstNameClassTest = document.getElementsByClassName('firstNameClass')[0];

		console.log(firstTest);
		if (firstTest == false) {
			document.getElementById('first_name_view').style.display = 'block';
			firstNameClassTest.classList.add('is-invalid');
			firstNameClassTest.classList.remove('is-valid');
		} else {
			document.getElementById('first_name_view').style.display = 'none';
			firstNameClassTest.classList.remove('is-invalid');
			firstNameClassTest.classList.add('is-valid');
		}
	}

	//  Last name

	function CheckLastName(item) {
		let pattern = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

		let secondTest = pattern.test(document.getElementById('secondName').value);

		let lastNameClassTest = document.getElementsByClassName('secondNameClass')[0];

		console.log(secondTest);
		if (secondTest == false) {
			document.getElementById('second_name_view').style.display = 'block';
			lastNameClassTest.classList.add('is-invalid');
			lastNameClassTest.classList.remove('is-valid');
		} else {
			document.getElementById('second_name_view').style.display = 'none';
			lastNameClassTest.classList.remove('is-invalid');
			lastNameClassTest.classList.add('is-valid');
		}
	}

	// Email

	function CheckEmail() {
		let pattern = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

		let thirdTest = pattern.test(document.getElementById('email').value);

		let emailClassTest = document.getElementsByClassName('emailClass')[0];

		console.log(thirdTest);
		if (thirdTest == false) {
			document.getElementById('email_view').style.display = 'block';
			emailClassTest.classList.add('is-invalid');
			emailClassTest.classList.remove('is-valid');
		} else {
			document.getElementById('email_view').style.display = 'none';
			emailClassTest.classList.remove('is-invalid');
			emailClassTest.classList.add('is-valid');
		}
	}

	// Phone number

	function CheckPhoneNumber() {
		let pattern = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;

		let fourthTest = pattern.test(document.getElementById('phoneNumber').value);

		let phoneNumberTest = document.getElementsByClassName('phoneNumberClass')[0];

		console.log(fourthTest);
		if (fourthTest == false) {
			document.getElementById('phoneNumber_view').style.display = 'block';
			phoneNumberTest.classList.add('is-invalid');
			phoneNumberTest.classList.remove('is-valid');
		} else {
			document.getElementById('phoneNumber_view').style.display = 'none';
			phoneNumberTest.classList.remove('is-invalid');
			phoneNumberTest.classList.add('is-valid');
		}
	}
	// Password

	function CheckPassword() {
		let pattern = /[A-Za-z0-9]{8,15}/;

		let fifthTest = pattern.test(document.getElementById('password').value);

		let phoneNumberTest = document.getElementsByClassName('passwordClass')[0];

		console.log(fifthTest);
		if (fifthTest == false) {
			document.getElementById('password_view').style.display = 'block';
			phoneNumberTest.classList.add('is-invalid');
			phoneNumberTest.classList.remove('is-valid');
		} else {
			document.getElementById('password_view').style.display = 'none';
			phoneNumberTest.classList.remove('is-invalid');
			phoneNumberTest.classList.add('is-valid');
		}
	}

	CheckName();
	CheckLastName();
	CheckEmail();
	CheckPhoneNumber();
	CheckPassword();
});
