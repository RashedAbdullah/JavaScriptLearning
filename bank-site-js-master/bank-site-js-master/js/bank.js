// get input value
function getInputValue(inputId){
    const input= document.getElementById(inputId);
    const amount = Number(input.value);
    input.value="";
    return amount;
}

// update total amount
function updateTotalAmount(amountId,totalAmount){
    const amount = document.getElementById(amountId);
    const currentTotal = Number(amount.innerText);
    amount.innerText =  currentTotal + totalAmount;
}

// update Balance Amount
function updateBalanceAmount(inputId,balance,isAdd){
    const balanceElement= document.getElementById(inputId);
    const currentBalance= Number(balanceElement.innerText);
    if(isAdd){
        balanceElement.innerText= balance + currentBalance;
    }else{
        balanceElement.innerText= currentBalance - balance;
    }
}


document.getElementById("deposit-btn").addEventListener("click",function(){
    const depositAmount= getInputValue("deposit-input");
    if(depositAmount>0){
        updateTotalAmount("deposit-amount", depositAmount);
        updateBalanceAmount("balance-amount",depositAmount,true);
    }else{
        alert("Please enter positive value for deposit")
    }

});


document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawAmount= getInputValue("withdraw-input");
    updateBalanceAmount("balance-amount",withdrawAmount,false);
});
