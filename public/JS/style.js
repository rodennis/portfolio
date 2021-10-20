const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText)
        if(xhr.responseText == 'success') {
            document.getElementById('success').show;
            firstName.value = '';
            lastName.value = '';
            phone.value = '';
            email.value = '';
            message.value = '';
        }
        else{
            alert('Something went wrong.')
        }
    }
})  