var inpDate = document.querySelector("#date-input");
var checkNoBtn = document.querySelector("#lucky-no-btn");
const luckyNo = document.querySelector("#inp-lucky-no");
var outputText = document.querySelector("#outputTextContainer");

var sumOfNo = 0;

function calculateDateSum(noString, inpLuckyNo)
{
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

function checkNoBtnHandler(){
    console.log(inpDate.value);
    var inpLuckyNo = Number(luckyNo.value);
    console.log("inpLuckyNo : ", inpLuckyNo+" typeof inpLuckyNo: "+typeof inpLuckyNo);
    var dateString = inpDate.value;
    var noString = dateString.replaceAll("-","");
    console.log(typeof noString);

    if(dateString && inpLuckyNo)
    {
        calculateDateSum(noString, inpLuckyNo);
    }
    else
    {
        outputText.innerText = "Please enter value in both fields!";
    }

}

checkNoBtn.addEventListener("click", checkNoBtnHandler);