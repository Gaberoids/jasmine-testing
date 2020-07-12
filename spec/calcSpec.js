// Challenge
describe("What should the person drink", function(){
    it("if age is less than 14 drink toddy", function(){
        expect(whatCanIDrink(5)).toBe("Drink Toddy1");
    })
    it("if age is less than 18, drink coke.", function(){
        expect(whatCanIDrink(16)).toBe("Drink Coke");
    })
    it("if age is less than 21 drink beer", function(){
        expect(whatCanIDrink(20)).toBe("Drink Beer");

    })
    it("if age is less than 130, drink whisky", function(){
        expect(whatCanIDrink(50)).toBe("Drink Whisky");
    })
    it("if age is 130 or more, or 0 or less, Sorry message", function(){
        expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");

    })
})

// fizzBuzz Game challenge
describe("fizzbuzz game", function() {
    it("if divisible by 3 and 5", function() {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("if divisible by 3 and not by 5", function() {
        expect(fizzBuzz(9)).toBe("Fizz");
    })
    it("if divisible by 5 only", function() {
        expect(fizzBuzz(20)).toBe("Buzz");
    })
    it("if NOT divisible by 3 and 5", function() {
        expect(fizzBuzz(8)).toBe(8);
    })
})



// example 2
// describe("Calulator", function(){
   
//     beforeEach(function() {
//     calc = new Calculator;
// });
   
//     describe("Addition tests", function(){
//         it("should return 42", function(){
//             calc.add(20);
//             calc.add(22);
//             expect(calc.value).toBe(42);
//         });
//         it("should return 26", function() {
//             calc.add(7);
//             calc.add(19);
//             expect(calc.value).toBe(26);
//         });
//         it("it should return error if we don't supply the numbers2", function(){
//             spyOn(window, "alert");
//             calc.add("Hitchhikers");
//             expect(window.alert).toHaveBeenCalledWith("Error!");
//         })
//     })
// })




// example 1
        // it("should return 42", function(){
        //     
        //     expect(addition(20,22)).toBe(42);
        // });
        // it("should return 26", function() {
        //     expect(addition(7,19)).toBe(26);
        // });
        // it("it should return error if we don't supply the numbers2", function(){
        //     spyOn(window, "alert");
        //     addition("Hitchhikers", "Guide");
        //     expect(window.alert).toHaveBeenCalledWith("Error!");
        // })
