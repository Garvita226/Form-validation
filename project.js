console.log("This is travel desk")

const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name, email, phone)

username.addEventListener('blur', () => {
    // console.log("Username is blurred")
    // Validate username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = username.value;
    // console.log(regex, str)
    if(regex.test(str)) {
        console.log("Username is correct")
        username.classList.remove('is-invalid')
        validUser = true;
    }
    else {
        console.log("Incorrect username")
        username.classList.add('is-invalid')
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    // console.log("Email is blurred")
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str)
    if(regex.test(str)) {
        console.log("Email is correct")
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log("Incorrect email")
        email.classList.add('is-invalid')
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("Phone is blurred")
    // Validate phone here
    let regex = /^([0-9a-zA-Z]){10}$/
    let str = phone.value;
    // console.log(regex, str)
    if(regex.test(str)) {
        console.log("Phone number is correct")
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else {
        console.log("Incorrect phone number")
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
e.preventDefault();

console.log('You clicked on submit')
let success = document.getElementById('success')
let failure = document.getElementById('failure')

// Submit your form here
if (validUser && validEmail && validPhone) {
    success.classList.add('show')
    failure.classList.remove('show')
}
else {
    failure.classList.add('show')
    success.classList.remove('show')
}

})