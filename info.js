
const cvc = document.getElementById('card-cvc');
const inputCvc = document.getElementById('cvc');
const name = document.getElementById('card-name');
const inputName = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const inputCN = document.querySelector('#number');
const month = document.getElementById('card-expiry');
const inputMonth = document.getElementById('month');
const year = document.getElementById('card-expiry1');
const inputYear = document.getElementById('year');
const submitBtn = document.querySelector("#submit");
const proceed = document.querySelector("#continue")
const cardDetails = document.querySelector('.card-details');
const completeState = document.querySelector('.completed');
const page = document.querySelector('html');
const errorName = document.querySelector('.name');
const errorCN = document.querySelector('.card-error');
const errorCVC = document.querySelector('.cvc-error');
const errorMonth = document.querySelector('.month-error');
const errorYear = document.querySelector('.year-error');

inputCvc.onkeyup = function (e) {
    if (!e.target.value) {
        cvc.innerText = "000"
    } else {
        cvc.innerHTML = this.value;
    }
}

inputName.onkeyup = function (e) {
    if (!e.target.value) {
        name.innerText = "Jane Appleseed"
    }
    else {
        name.innerHTML = this.value;
    }
}

inputCN.addEventListener('keyup', (e) => {

    if (!e.target.value) {
        cardNumber.innerText = "0000 0000 0000 0000"
    }
    else {
        const inputValue = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        }
        else if (e.target.value.length > 9) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        }
        else if (e.target.value.length > 4) {
            e.target.value = inputValue.
                replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumber.innerText = inputValue.
                replace(/(\d{4})(\d{0,4})/, "$1 $2");
        }
        else {
            cardNumber.innerText = inputValue;
        }
    }
})

const noAlphabet = e => {
    let x = e.which || e.keycode;
    if (x >= 48 && x <= 57) {
        return true;
    }
    else
        return false;
}




inputMonth.onkeyup = function (e) {
    if (!e.target.value) {
        month.innerText = "00/"
    }
    else {
        month.innerHTML = `${this.value}/`
        if (month.innerHTML === ' ') {
            month.innerHTML = '00/'
        }
    }
}

inputYear.onkeyup = function (e) {
    if (!e.target.value) {
        year.innerText = "00"
    }
    else {
        year.innerHTML = this.value;
    }
}


submitBtn.addEventListener('click', () => {
    if (inputName.value !== "" && inputCN.value !== "" && inputCvc.value !== "" 
    && inputMonth.value !== "" && inputMonth.value > 12 || inputMonth.value < 1
    && inputYear.value !== "" && inputYear.value < 22) {
        cardDetails.classList.add('active');
        completeState.classList.add('active');
    }
    else
        if (inputName.value == "") {
            inputName.classList.add('wrong');
            errorName.classList.add('wrong');
        }
        if (inputCN.value == "") {
            inputCN.classList.add('wrong');
            errorCN.classList.add('wrong');
        }   
        if (inputCvc.value == "") {
            inputCvc.classList.add('wrong');
            errorCVC.classList.add('wrong');
        }
        if (inputMonth.value == "") {
            inputMonth.classList.add('wrong');
            errorMonth.classList.add('wrong');

        }
        if (inputMonth.value > 12 || inputMonth.value < 1) {
            inputMonth.classList.add('wrong');
            errorMonth.textContent = "Month invalid"
            errorMonth.classList.add('wrong');
        }
        if (inputYear.value == "") {
            inputYear.classList.add('wrong');
            errorYear.classList.add('wrong');
        }
        if (inputYear.value < 22) {
            inputYear.classList.add('wrong');
            errorYear.textContent = "Year invalid"
            errorYear.classList.add('wrong');
        }

});

proceed.addEventListener('click', (e) => {
    cardDetails.classList.remove('active');
    completeState.classList.remove('active');
    inputName.value = '';
    name.innerText = "Jane Appleseed";
    cvc.innerText = "000";
    cardNumber.innerText = "0000 0000 0000 0000";
    month.innerText = "00/";
    year.innerText = "00";
    cardNumber.value = '';
    inputCN.value = '';
    cvc.value = '';
    inputCvc.value = "";
    inputMonth.value = "";
    inputYear.value = '';
    inputName.classList.remove('wrong');
    inputCN.classList.remove('wrong');
    inputCvc.classList.remove('wrong');
    inputMonth.classList.remove('wrong');
    inputYear.classList.remove('wrong');
    errorName.classList.remove('wrong');
    errorCN.classList.remove('wrong');
    errorCVC.classList.remove('wrong');
    errorMonth.classList.remove('wrong');
    errorYear.classList.remove('wrong');


})

page.addEventListener('keypress', () => {
    if (inputName.value !== "") {
        inputName.classList.remove('wrong');
        errorName.classList.remove('wrong');
    }
    if (inputCN.value !== "") {
        inputCN.classList.remove('wrong');
        errorCN.classList.remove('wrong');
    }
    if (inputCvc.value !== "") {
        inputCvc.classList.remove('wrong');
        errorCVC.classList.remove('wrong');
    }
    if (inputMonth.value !== "") {
        inputMonth.classList.remove('wrong');
        errorMonth.classList.remove('wrong');
    }
    if (inputYear.value !== "") {
        inputYear.classList.remove('wrong');
        errorYear.classList.remove('wrong');
    }
})
