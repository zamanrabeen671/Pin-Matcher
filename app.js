const getpin = () => {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        getPin();
    }
}
const generatePin = () => {
    const inputValue = document.getElementById('pin-show');
    inputValue.value = getpin();
}

const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = ""
        }
        else if (digit === '<') {
            const typedInput = document.getElementById('typed-pin').value;
            const InputNumber = parseInt(typedInput);
            let delValue = InputNumber / 10;
            delValue = parseInt(delValue);
            if (delValue <= 0) {
                document.getElementById('typed-pin').value = ""

            }
            else if(isNaN(typedInput || delValue)) {
                const delBtn = document.getElementById('del-btn');
                delBtn.disabled = true;
            }
            else {
                document.getElementById('typed-pin').value = delValue;
            }
        }
    }
    else {
        const typedValue = document.getElementById('typed-pin');
        typedValue.value += digit;
    }
})
const verifyPin = () => {
    const pin = document.getElementById('pin-show').value;
    const typedPin = document.getElementById('typed-pin').value;

    if (pin === typedPin) {
        displayMatch('block', 'none');
    }
    else {
        displayMatch('none', 'block');

        const submitBtn = document.getElementById('submitBtn');
        let catchTryLeft = document.getElementById('try-left').innerText;
        let TryLeft = parseInt(catchTryLeft);
        TryLeft--;
        if (TryLeft <= 0) {
            submitBtn.disabled = true;
        }
        document.getElementById('try-left').innerText = TryLeft;
    }
}

const displayMatch = (correctStatus, incorrectStatus) => {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}
document.getElementById('typed-pin').addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        verifyPin();
    }
})
