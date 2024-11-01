document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardType = document.getElementById('cardType').value;
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billingAddress').value;

    if (validateCardNumber(cardNumber) && validateExpDate(expDate) && validateCVV(cvv)) {
        console.log('Payment Submitted!');
        console.log(`Card Type: ${cardType}`);
        console.log(`Name on Card: ${cardName}`);
        console.log(`Card Number: ${cardNumber}`);
        console.log(`Expiration Date: ${expDate}`);
        console.log(`CVV: ${cvv}`);
        console.log(`Billing Address: ${billingAddress}`);

        alert('Thank you for your payment!');
    } else {
        alert('Please enter valid payment details.');
    }
});

function validateCardNumber(number) {
    const regex = /^[0-9]{16}$/;
    return regex.test(number);
}

function validateExpDate(date) {
    const regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    return regex.test(date);
}

function validateCVV(cvv) {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
}
