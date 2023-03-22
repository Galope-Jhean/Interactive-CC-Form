
const cvc = document.getElementById('card-cvc');
const inputCvc = document.getElementById('cvc');
const name = document.getElementById('card-name');
const inputName = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const inputCN = document.getElementById('number');
const month = document.getElementById('card-expiry');
const inputMonth = document.getElementById('month');
const year = document.getElementById('card-expiry1');
const inputYear = document.getElementById('year');
inputCvc.onkeyup = function () {
    cvc.innerHTML = this.value;
}

inputName.onkeyup = function () {
    name.innerHTML = this.value;
}

inputCN.onkeyup = function(){
    cardNumber.textContent = this.value
};

inputMonth.onkeyup = function () {
    month.innerHTML = `${this.value}/`
    if (month.innerHTML === ' ') {
        month.innerHTML = '00/'
    }
}

inputYear.onkeyup = function () {
    year.innerHTML = this.value;
}
