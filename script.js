const email = document.querySelector('#email')
email.addEventListener('input', ()=> validateEmail())
function validateEmail(){
    const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi
    const message = document.querySelector('label[for=email] > span')
    setMessage(email, message, (!regEx.test(email.value) || email.value.length === 0)
        ? 'Please enter a valid email address'
        : '')
}

const country = document.querySelector('#country')
country.addEventListener('input', ()=> validateCountry())
function validateCountry(){
    const regEx= /^[a-z ]{4,}$/gi
    const message = document.querySelector('label[for=country] > span')
    setMessage(country, message,(!regEx.test(country.value) || country.value.length === 0)
        ? 'Please enter your country'
        : '')
}

const zip = document.querySelector('#zip')
zip.addEventListener('input', ()=>validateZip())
function validateZip(){
    const message = document.querySelector('label[for=zip] > span')
    setMessage(zip, message, (zip.value.length < 4 || zip.value.length > 5 || isNaN(zip.value))
        ? 'Please enter a valid zip (4-5 numbers)'
        : '')
}

const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
password.addEventListener('blur', ()=> validatePasswords())
confirmPassword.addEventListener('blur', ()=> validatePasswords())
function validatePasswords(){
    const message = document.querySelector('label[for=password] > span')
    const confirmMessage = document.querySelector('label[for=confirmPassword] > span')

    if (password.value !== confirmPassword.value){
        setMessage(confirmPassword, message, 'Passwords must match')
        setMessage(password, message, 'Passwords must match')
    } else if (password.value.length === 0) {
        setMessage(password, message, 'Please enter your password')
    } else if (confirmPassword.value.length === 0) {
        setMessage(confirmPassword, confirmMessage, 'Please confirm your password')
    } else {
        setMessage(confirmPassword, message, '')
        setMessage(password, message, '')
    }
}

function setMessage(element, msgElement, msg){
    element.setCustomValidity(msg)
    msgElement.textContent = msg
}

const form = document.querySelector('form')
form.addEventListener('submit', e=> {
    e.preventDefault()

    validateEmail()
    validateCountry()
    validateZip()
    validatePasswords()

    if (form.checkValidity()){
        alert('you defeated the real form for a realthing™')
    }
})
