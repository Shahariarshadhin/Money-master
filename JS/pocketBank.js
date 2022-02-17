let incomeAmount;

function expense(inputId) {

    const ExpenseInput = document.getElementById(inputId);
    const ExpenseAmountText = ExpenseInput.value;
    const ExpenseAmount = parseFloat(ExpenseAmountText);

    ExpenseInput.value = '';
    return ExpenseAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function() {


    let incomeAmount = expense('income');

    const foodExpenseAmount = expense('food');

    const rentExpenseAmount = expense('rent');

    const clothesExpenseAmount = expense('clothes');


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
    const balanceAmount = parseFloat(balanceText);

    if (totalExpense.innerText > incomeAmount) {
        alert('You are running out of money');
    } else {
        balance.innerText = incomeAmount - totalExpense.innerText;
    }

    // const savingInput = document.getElementById('saving');
    // const savingAmountText = savingInput.value;
    // const savingAmount = parseFloat(savingAmountText);
    // savingInput.innerText = incomeAmount * 100;






});


function savingCalculation() {

    const savingInput = document.getElementById('saving');
    const savingAmountText = savingInput.value;
    const savingAmount = parseFloat(savingAmountText);

    savingInput.innerText = incomeAmount * savingInput / 100;



}



document.getElementById('save-btn').addEventListener('click', function() {

    // const incomeInput = document.getElementById('income');
    savingCalculation();
    // const incomeAmountText = incomeInput.value;
    // const incomeAmount = parseFloat(incomeAmountText);


    // const savingInput = document.getElementById('saving');
    // const savingAmountText = savingInput.value;
    // const savingAmount = parseFloat(savingAmountText);

    // savingInput.innerText = incomeAmount * savingInput / 100;

    // // document.getElementById("saving").innerHTML = savedAmount;
    // // document.getElementById("rest-balance").innerHTML = afterSave;


})