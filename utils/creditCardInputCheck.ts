// This function is used to check if the card number is valid
export function checkCardHolder(cardHolder: string) {
  if (blankInputCheck(cardHolder)) {
    return blankInputCheck(cardHolder);
  }

  switch (true) {
    case cardHolder.replace(/\s/g, "").length < 3: {
      return "Card holder name must be at least 3 characters";
    }
    case cardHolder.length > 30: {
      return "Card holder name must be less than 30 characters";
    }
    //check if card holder name has only letters, digits and spaces
    case !/^[a-zA-Z0-9\s]+$/.test(cardHolder): {
      return "Card holder name must contain only letters, digits and spaces";
    }
    default: {
      return "";
    }
  }
}

export function checkCardNumber(cardNumber: string) {
  if (blankInputCheck(cardNumber)) {
    return blankInputCheck(cardNumber);
  }

  switch (true) {
    //check only numbers and spaces
    case !/^[0-9\s]+$/.test(cardNumber): {
      return "Wrong format, numbers only";
    }
    // check if 16 digits without spaces
    case cardNumber.replace(/\s/g, "").length < 16: {
      return "Card number must be 16 digits";
    }
    //remove spaces
    case !luhnCheck(cardNumber.replace(/\s/g, "")): {
      return "Card number is not valid, try for test 4539670073707590";
    }
    default: {
      return "";
    }
  }
}

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

// check card expiry mm
export function checkCardExpiryMM(cardExpiryMM: string) {
  if (blankInputCheck(cardExpiryMM)) {
    return blankInputCheck(cardExpiryMM);
  }

  if (checkDigitsOnly(cardExpiryMM)) {
    return checkDigitsOnly(cardExpiryMM);
  }

  switch (true) {
    case cardExpiryMM.length < 2: {
      return "Card expiry month must be 2 digits";
    }
    case parseInt(cardExpiryMM) > 12: {
      return "Card expiry month must be less than 12";
    }
    default: {
      return "";
    }
  }
}

// check card expiry yy
export function checkCardExpiryYY(cardExpiryYY: string) {
  if (blankInputCheck(cardExpiryYY)) {
    return blankInputCheck(cardExpiryYY);
  }

  if (checkDigitsOnly(cardExpiryYY)) {
    return checkDigitsOnly(cardExpiryYY);
  }

  switch (true) {
    case cardExpiryYY.length < 2: {
      return "Card expiry year must be 2 digits";
    }
    default: {
      return "";
    }
  }
}

//check card expiry date
export function checkCardExpiryDate(
  cardExpiryMM: string,
  cardExpiryYY: string
) {
  //check card expiry
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const expiryYear = parseInt(`20${cardExpiryYY}`);
  const expiryMonth = parseInt(cardExpiryMM);
  if (expiryYear < currentYear) {
    return "Card is expired";
  }
  if (expiryYear === currentYear && expiryMonth < currentMonth) {
    return "Card is expired";
  }
}

// check card cvv
export function checkCardCVV(cardCVV: string) {
  if (blankInputCheck(cardCVV)) {
    return blankInputCheck(cardCVV);
  }

  if (checkDigitsOnly(cardCVV)) {
    return checkDigitsOnly(cardCVV);
  }

  switch (true) {
    case cardCVV.length < 3: {
      return "Card CVV must be 3 digits";
    }
    default: {
      return "";
    }
  }
}

function blankInputCheck(input: string) {
  if (!input.trim()) {
    return "Can’t be blank";
  }
  return "";
}

function checkDigitsOnly(input: string) {
  if (!/^[0-9]+$/.test(input)) {
    return "Wrong format, numbers only";
  }
  return "";
}
