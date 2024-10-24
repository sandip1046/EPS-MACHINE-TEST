document.getElementById('signup-form').addEventListener('submit', handleSubmit);


// function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // it will prevent the form from submitting

    // Reading the form input values and storing them in variables
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let password = document.getElementById('password').value;

    // condition for Validating the form  intput fields
    if (!firstName || !lastName) {
        alert("First Name and Last Name are required.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Create the form data object
    let formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        password: password
    };

    console.log(formData);
    alert("Form submitted successfully!");
}
// function to validate email
function validateEmail(email) {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailFormat.test(String(email).toLowerCase());
}

// function to validate phone number
function validatePhoneNumber(phoneNumber) {
    const phoneFormat = /^\d{10}$/; // 10 digits
    return phoneFormat.test(String(phoneNumber));
}
