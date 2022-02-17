function expense(inputId) {

    const ExpenseInput = document.getElementById(inputId);
    const ExpenseAmountText = ExpenseInput.value;
    const ExpenseAmount = parseFloat(ExpenseAmountText);


    return ExpenseAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function() {


    let incomeAmount = expense('income');

    const foodExpenseAmount = expense('food');

    const rentExpenseAmount = expense('rent');

    const clothesExpenseAmount = expense('clothes');

    if (foodExpenseAmount < 0 || rentExpenseAmount < 0 || clothesExpenseAmount < 0) {

        alert('please add Positive number');
    }



    // get total expense

    const mianIncome = document.getElementById('main-income');
    const incomeText = mianIncome.innerText;
    const amountIncome = parseFloat(incomeText);
    mianIncome.innerText = incomeAmount;



    const totalExpense = document.getElementById('total-expenses');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);

    totalExpense.innerText = foodExpenseAmount + rentExpenseAmount + clothesExpenseAmount;




    const balance = document.getElementById('balance-field');
    const balanceText = balance.innerText;
    // const balanceAmount = parseFloat(balanceText);

    if (totalExpense.innerText > incomeAmount) {
        alert('You are running out of money');
    } else {
        balance.innerText = incomeAmount - totalExpense.innerText;
    }


});

// saving Section

function updateNumber(inputId) {
    const ampuntInput = document.getElementById(inputId);
    const amountInputText = ampuntInput.value;
    const amountNumber = parseFloat(amountInputText);



    return amountNumber;

};

document.getElementById('save-btn').addEventListener('click', function() {


    let incomeAmount = updateNumber('income');

    const SavePersent = updateNumber('saving-field');

    const totalSaving = (incomeAmount * SavePersent) / 100;

    document.getElementById('saving').innerText = totalSaving;


    // remainingg balance
    const foodExpenseAmount = updateNumber('food');
    const rentExpenseAmount = updateNumber('rent');
    const clothesExpenseAmount = updateNumber('clothes');


    if (foodExpenseAmount < 0 || rentExpenseAmount < 0 || clothesExpenseAmount < 0) {

        alert('please add Positive number');
    }



    const totalExpense = document.getElementById('total-expenses');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);

    totalExpense.innerText = foodExpenseAmount + rentExpenseAmount + clothesExpenseAmount;


    const balance = document.getElementById('balance-field');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);

    if (totalExpense.innerText > incomeAmount) {
        alert('You are running out of money');
    } else {
        balance.innerText = incomeAmount - totalExpense.innerText;
    }
    const remainingBalance = balance.innerText - totalSaving;

    document.getElementById('saving').innerText = totalSaving;
    document.getElementById('rest-balance').innerText = remainingBalance;






})