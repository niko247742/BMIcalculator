/* Udemy Challenge 1 

let markMass =  82;//kg 180 lb
let markHeight = 2; // meters 6ft


let johnMass = 77; //kg 170 lb
let johnHeight = 1.6; // meters 5.4ft


var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiMark + " Mark");
console.log(bmiJohn + " John");

   
function bmi(bmiMark, bmiJohn) {
    if (bmiMark > bmiJohn) {
        console.log("Is Mark's BMI higher than Johns? " + true);
    } else {
        console.log("Is Mark's BMI higher than Johns? " + false);
    }
}

bmi(bmiMark,bmiJohn);

*/

function BMIcalc() {
        //Get input
    var mass_text = document.getElementById("mass");
    var height_text = document.getElementById("height");
        //Convert to numbers if needed
    var mass_number = parseInt(mass_text.value);
    var height_number = parseInt(height_text.value);

        //Validate inputs 
    var errorMessage = "";
        if (mass_number <= 0 || height_number <0) {
            errorMessage = errorMessage + "Height or mass cannot be negative or 0";
        }
        //If error inform user
        if (errorMessage != "") {
            alert(errorMessage);
        }
        // if no error - process and display result
    var BMI = (mass_number/(height_number * height_number));
    
    var result_message = "";
        if (BMI < 19) {
            result_message = "Your BMI is " + BMI + ". You are Underweight!"
        } else if (BMI < 25) {
            result_message = "Your BMI is " + BMI + ". You are Healthy!"
        } else if (BMI < 30) {
            result_message = "Your BMI is " + BMI + ". You are Overweight!"
        } else
            result_message = "Your BMI is " + BMI + ". Your are Obese!"
        
    console.log(result_message);

    alert(result_message);    

    
    
}




