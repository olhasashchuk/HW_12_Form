// Поля:
// Name - обовьязкове текстове поле
// Message - текстове поле не меньше 5 символів
// Phone number - обовьязкове поле типу phone. З початком на +380, та тільки числами
// Email - email обовьязково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--class');
    form.addEventListener('submit', event => {
        event.preventDefault();

        deleteErrorMessage()

        const formData = new FormData (event.target);
        formData.forEach (function (value, name) {
            console.log(`${name} - ${value}`)
            if (name === 'message') {
                const regCheckMessage = /[\w\W]{5,}/;
                if (value.match(regCheckMessage) === null) {
                    const messageField = document.querySelector('.js--message');
                    getErrorMessage (messageField, 'Enter at least 5 characters')
                }
            }

            if (name === 'tel') {
                const regCheckPhone = /^[+380][0-9]+$/;
                if (value.match(regCheckPhone) === null) {
                    const phoneField = document.querySelector('.js--phone');
                    getErrorMessage (phoneField, 'Incorrect phone number. Enter in the format +380000000000')
                }
            }

            if (name === 'email') {
                const regCheckEmail = /.*@.*\..*/;
                if (value.match(regCheckEmail) === null) {
                    const emailField = document.querySelector('.js--email');
                    getErrorMessage (emailField, 'Incorrect email. Email should have "@" and "."')
                }
            }

        })
    })

    function deleteErrorMessage() {
        const errorFields = document.querySelectorAll('.error-message');
        errorFields.forEach(function (field) {
            field.textContent = '';
        });
    }
    function getErrorMessage (field, textMassage) {
        const elementError = document.createElement('span');
        elementError.innerText = textMassage;
        elementError.style.color = 'red';
        elementError.className = 'error-message';
        field.appendChild(elementError);
    }

})