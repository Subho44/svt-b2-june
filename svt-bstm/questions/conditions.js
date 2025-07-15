function conditionexamples() {
    let score = 75;
    if(score >= 90) {
        console.log("Grade A");
    } else if(score >=70) {
        console.log("Grade B");
    }
    else {
        console.log("Grade C");
    }
    //swich case
    let day = "Monday";
    switch(day) {
        case "Monday":
             console.log("start of week");
             break;
        case "Sunday":
             console.log("Weekend");
             break; 
        default:
             console.log("Midweek");         
    }
    //terneary operator
    let result = score >=50 ? "Pass": "Fail";
    console.log(result);
}
module.exports = conditionexamples;