function getPin() {
  const random = Math.random() * 10000;
  const pin = (random+'').split('.')[0]
  if(pin.length === 4) {
    return pin;
  }
  else{
    return getPin();
  }
}
function generatePin() {
  const getInput = document.getElementById('pin-show');
  getInput.value = getPin();
}
const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function(event) {
  const digit = event.target.innerText;
  if(isNaN(digit)) {
    if(digit === 'C') {
      const typedInput = document.getElementById('typed-pin');
    typedInput.value = "";
    }
  }
  else{
    const typedInput = document.getElementById('typed-pin');
    typedInput.value += digit;
  }
})

function verifyPin() {
  const pin = document.getElementById('pin-show').value;
  const typedPin = document.getElementById('typed-pin').value;

  if(pin === typedPin) {
    displayMatch('block','none');
  }
  else{
    displayMatch('none','block');
  }
 }

 function displayMatch(correctStatus, incorrectStatus) {
  const correct = document.getElementById('correct-pin');
  correct.style.display = correctStatus;
  const incorrect = document.getElementById('incorrect-pin');
  incorrect.style.display = incorrectStatus;
 }