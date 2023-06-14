const submitBtn = document.querySelector('.submit-btn'),
        phone = document.querySelector('#phone'),
        password = document.querySelector('#user-password'),
        passwordConfirm = document.querySelector('#user-password-confirm'),
        email = document.querySelector('#mail'),
        errorDisplayer = document.getElementsByClassName('error'),
        inputFields = document.querySelectorAll('input'),
        cardContainer = document.querySelectorAll('input'),
        outroOverlay = document.querySelector('.outro-overkay')

let count = 2

function onValidation(current, messageString, booleanTest){
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count :count
}

for(let i=0; i<inputFields.length; i++){
    let currentInputField = inputFields[i]
    let currentErrorDisplayer = errorDisplayer[i]

    currentInputField.addEventListener('keyup', (e)=>{
        let message = currentErrorDisplayer
        e.target.value != "" ? onValidation(currentErrorDisplayer, '',0) : onValidation(currentErrorDisplayer, '*This field is required', 0)
    })
}

phone.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[3]
    e.target.value == e.target.value.replace(/\D/g,'') ? onValidation(message, '',1) : onValidation(message, 'Please enter valid number',0)
})

email.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[2]
    mail.value.includes('@') & mail.value.includes('.com') ? onValidation(message,'',1) : onValidation(message, 'please provide a valid Email', 0)
})

password.addEventListener('keyup',(e)=>{
    let message = errorDisplayer[4]
    password.value.length >=8 ? onValidation(message,'',1): onValidation(message,'Password requires menimun 8 characters',0)
})

passwordConfirm.addEventListener('keyup',(e)=>{
    let message = errorDisplayer[5]
    password.value === e.target.value ? onValidation(message,'',1) : onValidation(message,'*Password did not match',0)
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(count > 5){
        cardContainer.style.display = 'none'
        outroOverlay.classList.remove('disabled')
    }else{
        for(let i=0; i<errorDisplayer.length;i++){
            errorDisplayer[i].textContent = '*This field is required'
        }
    }
})