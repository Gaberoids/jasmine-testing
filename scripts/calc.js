// Challenge from lesson
function whatCanIDrink(age) {
    if(1 <= age && age < 14) {
    
        return "Drink Toddy1";
    }
    else if(14 <= age && age < 18) {
        return "Drink Coke";
    }
    else if(18 <= age && age < 21) {
        return "Drink Beer";
    }
    else if(21 <= age && age < 130) {
        return "Drink Whisky";
    }
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}


function fizzBuzz(numbr) {
    if (numbr % 3 == 0 && numbr % 5 == 0) {
        return "FizzBuzz"
    }
    else if (numbr % 3 == 0 && numbr % 5 !== 0) {
        return "Fizz"
    }
    else if (numbr % 3 !== 0 && numbr % 5 == 0) {
        return "Buzz"
    }
    else {
        return numbr;
    }
}



// example 2
// Calculator = function() {
//     this.value = 0;
// }

// Calculator.prototype.add = function(number){
//     if (typeof(number) == "number") {
//         this.value += number;
//     } 
//     else {
//         alert("Error!");
//     }
// }

// Example 1
// function addition(numOne,numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//     return numOne + numTwo;
//     }
//     else{
//         return alert("Error!");
//     }
// }