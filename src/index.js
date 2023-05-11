import validator from './validator.js';


const valueInput = document.querySelector('#CreditCardNumber')
const buttonSubmit = document.querySelector('.button')
const myForm = document.querySelector('#myForm')
console.log('valueInput-->', valueInput.value)
console.log('-------->', validator)

myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  !valueInput.value && alert('Por favor ingrese un número de tarjeta de crédito.')

  const validation = validator.isValid(valueInput.value);
  const mask =validator.maskify(valueInput.value);
  
  if (validation) {
    alert("La tarjeta de crédito es válida.");
  } else {
    alert("La tarjeta de crédito no es válida.");
  }

  
document.getElementById("CreditCardNumber").value = mask;
})


console.log(validator);
