// Esta función verifica si el número de la tarjeta
// cumple la validación de Luhn, como se describe
// en esta página: https://tinyurl.com/regla-luhn

function isLuhnValid(cardNumber) {
    let luhnDigit = Number(cardNumber.substr(-1));
    let sum = 0;
  
    for (
      let position = 0; 
      position < cardNumber.length - 1;
      position += 1) {
      
      const digit = cardNumber[position];
      if (position % 2 === 0) {
        sum += digit * 2;
      } else { 
        sum += digit;
      }
    }
    return sum % 10 === luhnDigit;
  }