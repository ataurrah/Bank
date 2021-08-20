function getInputValue(inputId) {
    // get amount deposited
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear depositInput field;
    inputField.value = "";
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = parseFloat(newDepositTotal);
    return newDepositTotal;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); 
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText); 
    const previousBalanceTotal =getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue("deposit-input");
    if(depositAmount >0){
        updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount,true);
    }

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;
    // update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
   
})
// withdraw calculation
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue("withdraw-input")
    const currentBalance =getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount)
    const balanceTotal = document.getElementById('balance-total');
    updateBalance(withdrawAmount,false);
    }
    if( withdrawAmount > currentBalance){
        console.log('you cannot withdraw ')}

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previouswithdrawText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(previouswithdrawText);
    // const newWithdrawTotal = previouswithdrawTotal + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    // update account balance

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;
    
})