// This function is used to check if the card number is valid
export function luhnCheck(cardNumber: string): boolean {
  let sum = 0;
  let digit;
  let i;
  let addend;

  for (i = 0; i < cardNumber.length; i++) {
    digit = parseInt(cardNumber.charAt(i));
    if ((cardNumber.length - i) % 2 === 0) {
      addend = digit * 2;
      if (addend >= 10) {
        addend = (addend % 10) + 1;
      }
      sum += addend;
    } else {
      sum += digit;
    }
  }

  return sum % 10 === 0;
}
