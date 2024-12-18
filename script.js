const depositInput = document.querySelector("#depositInp");
const depositBtn = document.querySelector("#depositBtn");
const withdrawInput = document.querySelector("#withdrawInp");
const withdrawBtn = document.querySelector("#withdrawBtn");
const balanceDisplay = document.querySelector(".balance-card p");  
const historyDisplay = document.querySelector(".history-card p"); 
const cardName = document.querySelector(".cardName");




let balance = 0;
let transactionHistoryList = [];

//Set-Username
function setUserName(){
    const userName = prompt("Enter Your Username:");
    if(userName){
        cardName.textContent =`${userName.toUpperCase()}`;
     }
}

// Function to deposit money
function deposit() {
    const depositAmount = Number(depositInput.value);
    if(!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        transactionHistoryList.push({type: "Deposit", amount: depositAmount});
        getBalance();
        depositInput.value = '';
        alert(`Deposited: ${amount} ₼`);
  } else {
    alert('Please enter a valid amount to deposit!');
  
    }
}

// Function to withdraw money
function withdraw() {
    const withdrawAmount = Number(withdrawInput.value);
    if(!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        transactionHistoryList.push({type: "Withdraw", amount: withdrawAmount});
        getBalance();
        withdrawInput.value = '';
        alert(`Withdrawn: ${amount} ₼`);
    } else {
      alert('Invalid amount or insufficient balance!');
    
    }
}

// Function to update the balance display
function getBalance() {
    balanceDisplay.textContent = `${balance} ₼`;
}

// Function to view transaction history
function transactionViewHistory() {
    if (transactionHistoryList.length === 0) {
        historyDisplay.textContent = "No transactions yet!";
    } else {
        let history="";
        for (let i = 0; i < transactionHistoryList.length; i++) {
            const transaction = transactionHistoryList[i];
            history += `${i + 1}. ${transaction.type}: ${transaction.amount} ₼<br>`;
        }
        historyDisplay.innerHTML = history;  // Display the history 
    }
}



// Event listeners for buttons
depositBtn.onclick = deposit;
withdrawBtn.onclick = withdraw;
historyDisplay.onclick = transactionViewHistory;   
setUserName();
