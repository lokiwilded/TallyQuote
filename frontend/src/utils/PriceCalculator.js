// src/utils/priceCalculator.js
export const calculatePricePerCredit = (totalCredits) => {
  if (totalCredits > 100) {
    return 4.45;
  } else if (totalCredits >= 40) {
    return 5;
  } else if (totalCredits > 20) {
    return 5.5;
  } else {
    return 6;
  }
};

export const calculateTotalCost = (totalCredits) => {
  const pricePerCredit = calculatePricePerCredit(totalCredits);
  return totalCredits * pricePerCredit;
};
