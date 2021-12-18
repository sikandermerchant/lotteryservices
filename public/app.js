//Get inputs from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//Function show success border
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}
//Check if email id is correct format using RegEx
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Please enter a valid email address`);
  }
}
///Check required fields for input
function checkRequiredFields(inputArr) {
  inputArr.forEach((input) => {
    console.log(input.value);
    if (input.value.trim() === '') { //trim()removes the leading and trailing white space and line terminator characters from a string.
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Get Field Names - first character upper case and the rest lower case
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  //The above is a very standard function to return a word with its first letter uppercase and the rest lower case by getting the first character using CharAt(0), then converting it to upper case by using toUpperCase(); finally concatenating the rest of the letters to it by slicing those characters from the required word using .slice()
  //charAt() - The zero-based index of the desired character. Returns the character at the specified index.
}

//Check Input Length and then take action accordingly
function checkInputLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} needs at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} should be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input1, `Passwords do not match`);
    showError(input2, `Passwords do not match`);
  }
}
//Add event listener for the form
form.addEventListener('submit', (e) => {
  // if (username.value === '') {
  //   showError(username, 'username is required');
  // } else {
  //   showSuccess(username);
  // }
  // if (email.value === '') {
  //   showError(email, 'email is required');
  // } else if (!validateEmail(email.value)) {
  //   showError(email, 'valid email is required');
  // } else {
  //   validateEmail(email)
  //   showSuccess(email);
  // }
  // if (password.value === '') {
  //   showError(password, 'Password is required');
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === '') {
  //   showError(password2, 'Confirm password is required');
  // } else {
  //   showSuccess(password2);
  // }
  //Above is not the best method of writing code as we are repeating ourselves and hence we optimise it by calling a function which check required fields of each input by taking in the input Array - declared above seperately
  checkRequiredFields([username, email, password, password2]);
  //we then check the length of username and password to the conditions
  checkInputLength(username, 3, 15);
  checkInputLength(password, 6, 25);
  //check email
  checkEmail(email);
  ///check password match
  checkPasswordsMatch(password, password2);
  e.preventDefault();
});