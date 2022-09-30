var inpDate = document.querySelector("#date-input");
var checkNoBtn = document.querySelector("#lucky-no-btn");
const luckyNo = document.querySelector("#inp-lucky-no");
var outputText = document.querySelector("#outputTextContainer");

var sumOfNo = 0;

function checkNoBtnHandler(){
    console.log(inpDate.value);
    var inpLuckyNo = Number(luckyNo.value);
    console.log("inpLuckyNo : ", inpLuckyNo+" typeof inpLuckyNo: "+typeof inpLuckyNo);
    var dateString = inpDate.value;
    const noString = dateString.replaceAll("-","");
    console.log(typeof noString);

    for(let i in noString)
    {
        var no = Number(noString.charAt(i));
        console.log("no : ",no);
        sumOfNo = sumOfNo + no;
        console.log("Sum Of Numbers in Birthdate : ",sumOfNo);

    }

    if(sumOfNo%inpLuckyNo===0)
    {
        outputText.innerText = "Your Birthday is Lucky!";
    }
    else{
        outputText.innerText = "Your Birthday is not Lucky!";
    }
    
}

checkNoBtn.addEventListener("click", checkNoBtnHandler);