// // Inputs:
// const depositInput = document.querySelector("#deposit-input");
// const withdrawInput = document.querySelector("#withdraw-input");

// // Amounts:
// const depositAmount = document.querySelector("#deposit-amount");
// const withdrawAmount = document.querySelector("#withdraw-amount");
// const balanceAmount = document.querySelector("#balance-amount");

// // Buttons:
// const depositBtn = document.querySelector("#deposit-btn");
// const withdrawBtn = document.querySelector("#withdraw-btn");

// // Deposit function:
// function depositFunc(){
//     const depositToNum =  Number(depositInput.value);
//     const balanceAmountNum = Number(balanceAmount.innerText);
    
//     if(depositToNum >= 0) {
//         const depositAmountNum = Number(depositAmount.innerText);
//         depositAmount.innerText = depositAmountNum + depositToNum;
//         balanceAmount.innerText = depositToNum + balanceAmountNum;
//         depositInput.value = "";
//     } else {
//         alert("Please input positive number");
//         depositInput.value = "";
//     }
    
    
// }

// depositBtn.addEventListener("click", ()=>{
//     depositFunc();
// })




// // withdrow function:
// function withdrawFunc(){
//     const withdrawInputNum = Number(withdrawInput.value);
//     const withdrawAmountNum = Number(withdrawAmount.innerText)
//     const balanceAmountNum = Number(balanceAmount.innerText);
    
//     if(withdrawAmountNum >= 0){
//         withdrawAmount.innerHTML = withdrawInputNum + withdrawAmountNum;
//         withdrawInput.value = "";
        
//     } else {
//         alert("Sorry! you don't have enough money for withdraw");
//         withdrawInput.value = "";
//     }
//     // balanceAmount.innerText = withdrawInputNum - balanceAmountNum;
// }

// withdrawBtn.addEventListener("click", function(){
//     withdrawFunc();
// });


// From discord:
function updateAmount(currentAmount, previousAmount, shouldSubtract) {
    if (shouldSubtract) {
      return previousAmount - currentAmount;
    } else {
      return previousAmount + currentAmount;
    }
}
  
function getAmountFromUiElement(uiElement, elementType) {
if (elementType === "input") return Number(uiElement.value);
return Number(uiElement.innerText);
}
  
function updateUi(uiElement, updatedValue) {
uiElement.innerText = updatedValue;
}
  
function initializeApp() {
// document.querySelector in-short --> qs
const qs = document.querySelector.bind(document);
const uiElements = {
    depositFormElement: qs("#deposit-form"),
    depositInputElement: qs("#deposit-input"),
    depositAmountElement: qs("#deposit-amount"),
    withdrawFormElement: qs("#withdraw-form"),
    withdrawInputElement: qs("#withdraw-input"),
    withdrawAmountElement: qs("#withdraw-amount"),
    balanceAmountElement: qs("#balance-amount"),
};
//Deposit
uiElements["depositFormElement"].addEventListener(
    "submit",
    handelDepositSubmit,
);

function handelDepositSubmit(e) {
    e.preventDefault();
    const depositAmount = getAmountFromUiElement(
    uiElements["depositInputElement"],
    "input",
    );
    if (isNaN(depositAmount) || depositAmount <= 0)
    return alert("Please enter a valid amount");

    const prevDepositAmount = getAmountFromUiElement(
    uiElements["depositAmountElement"],
    );
    const prevBalanceAmount = getAmountFromUiElement(
    uiElements["balanceAmountElement"],
    );
    const updatedDepositValue = updateAmount(depositAmount, prevDepositAmount);
    const upDatedBalanceValue = updateAmount(depositAmount, prevBalanceAmount);
    updateUi(uiElements["depositAmountElement"], updatedDepositValue);
    updateUi(uiElements["balanceAmountElement"], upDatedBalanceValue);
    uiElements["depositInputElement"].value = "";
}

//Withdraw
uiElements["withdrawFormElement"].addEventListener(
    "submit",
    handelWithdrawSubmit,
);
  
function handelWithdrawSubmit(e) {
    e.preventDefault();
    const withdrawAmount = getAmountFromUiElement(
    uiElements["withdrawInputElement"],
    "input",
    );
    if (isNaN(withdrawAmount) || withdrawAmount <= 0)
    return alert("Please enter a valid amount");
    const prevWithdrawAmount = getAmountFromUiElement(
    uiElements["withdrawAmountElement"],
    );
    const prevBalanceAmount = getAmountFromUiElement(
    uiElements["balanceAmountElement"],
    );
    const updatedBalanceAmount = updateAmount(
    withdrawAmount,
    prevBalanceAmount,
    true,
    );
    if (updatedBalanceAmount < 0)
    return alert("You do not have sufficient balance!");
    const updatedWithdrawAmount = updateAmount(
    withdrawAmount,
    prevWithdrawAmount,
    );
    updateUi(uiElements["withdrawAmountElement"], updatedWithdrawAmount);
    updateUi(uiElements["balanceAmountElement"], updatedBalanceAmount);
    uiElements["withdrawInputElement"].value = "";
}
}
  
window.onload = initializeApp;