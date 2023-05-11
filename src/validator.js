/* const validator = {
  isValid: function (creditCardNumber) {
    // Algoritmo de Luhn para validar la tarjeta va en validator
    
  }, 


};

export default validator; */

const validator = {
  isValid: (creditCardNumber) => {
    let cardArr = creditCardNumber.split("").reverse();
    let sum = 0;
    for (let i = 0; i < cardArr.length; i++) {
      let digit = parseInt(cardArr[i]);
      if (i % 2 !== 0) { // multiplica por 2 los dígitos en posiciones impares
        digit *= 2;
        if (digit > 9) {
          digit = digit - 9; // suma los dígitos del resultado si es mayor a 9
        }
      }
      sum += digit;
    }
    return sum % 10 === 0; // devuelve true si la suma es divisible por 10
  },


maskify(creditCardNumber) {
  return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
}
};



export default validator;
