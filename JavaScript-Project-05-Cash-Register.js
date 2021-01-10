//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//cid is a 2D array listing available currency.
//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

//$0.01 (PENNY)
//$0.05 (NICKEL)
//$0.1 (DIME)
//$0.25 (QUARTER)
//$1 (ONE)
//$5 (FIVE)
//$10 (TEN)
//$20 (TWENTY)
//$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
  var valueArr = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var drawAmount=0;
  var change = cash-price;
  var reObj = {
    status:null,
    change:[]
  };

  //--------------------------------------------------------------------------------------------------------------

  for (var i = 0;i<cid.length;i++){
    drawAmount += cid[i][1];
  };
  
  drawAmount = drawAmount.toFixed(2);
 //--------------------------------------------------------------------------------------------------------------

  if(drawAmount < change){
    reObj.status = "INSUFFICIENT_FUNDS";
  }else if(drawAmount == change){
    reObj.status ="CLOSED";
    reObj.change = cid;
  }else {
    reObj.status = "OPEN"; 

    for (var k = 0; k < cid.length; k++) {
    cid[k].push(cid[k][1]/valueArr[k], valueArr[k]);
    };

    for(var j = cid.length -1;j>=0;j--){
      let coinsBills =0;
      if(change / cid[j][3] >=1){
        coinsBills = parseInt(change/(cid[j][3]));
        if (coinsBills > cid[j][2]) {
          coinsBills = cid[j][2];
        };
        reObj.change.push([cid[j][0], (cid[j][3])*coinsBills]);
        change -= (cid[j][3])*coinsBills;
        change = Number(change.toFixed(2));
      };
    };

    if(change >0){
      reObj.status ="INSUFFICIENT_FUNDS";
      reObj.change =[];
    };
    
  };
  return reObj;
};

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
