function calculateBalance() {
  const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
  const houseRent = parseFloat(document.getElementById('houseRent').value);
  const carRent = parseFloat(document.getElementById('carRent').value);
  const electricBill = parseFloat(document.getElementById('electricBill').value);

  if (monthlyIncome < 0 || houseRent < 0 || carRent < 0 || electricBill < 0) {
    document.getElementById('balance').textContent = 'Negative value is not allowed';
    document.getElementById('totalExpenses').textContent = 'Negative value is not allowed';
    document.getElementById('savingAmount').textContent = 'Negative value is not allowed';
    return;
  }

  const totalExpenditure = houseRent + carRent + electricBill;
  const balance = monthlyIncome - totalExpenditure;

  if (!isNaN(balance)) {
    document.getElementById('balance').textContent = `${balance.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `${totalExpenditure.toFixed(2)}`;
  } else {
    document.getElementById('balance').textContent = 'Please enter valid numbers';
    document.getElementById('totalExpenses').textContent = 'Please enter valid numbers';
  }
}

function calculateRemainingBalance() {
  const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);

  if (isNaN(savingsPercentage) || savingsPercentage < 0 || savingsPercentage > 100) {
    document.getElementById('remainingBalance').textContent = 'Invalid savings percentage';
    return;
  }

  const balance = parseFloat(document.getElementById('balance').textContent.replace('$', ''));

  if (balance < 0) {
    document.getElementById('remainingBalance').textContent = 'Negative value is not allowed';
    return;
  }

  const savings = balance * (savingsPercentage / 100);
  const remainingBalance = balance - savings;

  if (!isNaN(remainingBalance)) {
    document.getElementById('remainingBalance').textContent = `${remainingBalance.toFixed(2)}`;
    document.getElementById('savingAmount').textContent = `${savings.toFixed(2)}`;
  } else {
    document.getElementById('remainingBalance').textContent = 'Please enter valid numbers';
  }
}
