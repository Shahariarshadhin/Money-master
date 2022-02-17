function expense(inputId) {

    const ExpenseInput = document.getElementById(inputId);
    const ExpenseAmountText = ExpenseInput.value;
    const ExpenseAmount = parseFloat(ExpenseAmountText);

    ExpenseInput.value = '';
    return ExpenseAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function() {

    const foodExpenseAmount = expense('food');

    const rentExpenseAmount = expense('rent');

    const clothesExpenseAmount = expense('clothes');


    // get total expense

    const totalExpense = document.getElementById('total-expenses');
    const totalExpenseText = totalExpense.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);
    totalExpense.innerText = foodExpenseAmount + rentExpenseAmount + clothesExpenseAmount;




})