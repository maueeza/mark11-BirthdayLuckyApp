var inpDate = document.querySelector("#date-input");
var checkNoBtn = document.querySelector("#lucky-no-btn");
var sumOfNo = 0;

function checkNoBtnHandler(){
    console.log(inpDate.value);
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
}

checkNoBtn.addEventListener("click", checkNoBtnHandler);