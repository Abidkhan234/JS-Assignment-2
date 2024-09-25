//! Chapter no 6,7 and 8 start

//? Question no 1 start

// var a = Number(prompt("Enter a number"));
// var b;
// document.write("<p>Result</p>");

// document.write("The value of a is: ",a);

// document.write("<p>................................</p>");

// a = ++a;
// document.write("The value of ++a is: ",a);

// document.write("<br>");

// document.write("Now the value of a is: ",a);

// document.write("<br>");
// document.write("<br>");

// b = a++;
// document.write("The value of a++ is: ",b);

// document.write("<br>");

// document.write("Now the value of a is: ",a);

// document.write("<br>");
// document.write("<br>");

// a = --a;
// document.write("The value of --a is: ",a);

// document.write("<br>");

// document.write("Now the value of a is: ",a);

// document.write("<br>");
// document.write("<br>");

// b = a--;
// document.write("The value of a-- is: ",b);

// document.write("<br>");

// document.write("Now the value of a is: ",a);

//? Question no 1 end

//? Question no 2 start

// var a = 2;
// var b = 1;
// document.write("Value of a is: ",a);

// document.write("<br>")

// document.write("Value of b is: ",b);

// var result = --a - --b;

// document.write("<br>")
// document.write("<br>")

// document.write("Result of --a is: ",a);

// document.write("<br>")
// document.write("<br>")

// document.write("Result of --a - --b is: ",result);

// result = --a - --b + ++b;

// document.write("<br>")
// document.write("<br>")

// document.write("Result of --a - --b + ++b is: ",result);


// result = --a - --b + ++b + b--;

// document.write("<br>")
// document.write("<br>")

// document.write("Result of --a - --b + ++b + b-- is: ",result);

//? Question no 2 end

//?  Question no 3 start

// var userInput = prompt("Enter your Name");

// alert("Welcome "+ userInput + " to my Website");

//?  Question no 3 end

//?  Question no 4 start

// var userNum = Number(prompt("Enter a number for table"));
// var defaultNum = 5;

// document.write(userNum ," *  1 = ",userNum*1);

// document.write("<br>")

// document.write(userNum ," *  2 = ",userNum*2);

// document.write("<br>")

// document.write(userNum ," *  3 = ",userNum*3);

// document.write("<br>")

// document.write(userNum ," *  4 = ",userNum*4);

// document.write("<br>")

// document.write(userNum ," *  5 = ",userNum*5);

// document.write("<br>")

// document.write(userNum ," *  6 = ",userNum*6);

// document.write("<br>")

// document.write(userNum ," *  7 = ",userNum*7);

// document.write("<br>")

// document.write(userNum ," *  8 = ",userNum*8);

// document.write("<br>")

// document.write(userNum ," *  9 = ",userNum*9);

// document.write("<br>")

// document.write(userNum ," *  10 = ",userNum*10);

//?  Question no 4 end

//?  Question no 5 start

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");

// document.write("<br>");

// var userSubject1  = prompt("Enter your First subject name");
// var userSubject2  = prompt("Enter your Second subject name");
// var userSubject3  = prompt("Enter your Third  subject name");

// var totalMarks = 300;

// var obtainedMarks1 = Number(prompt("Enter your obtained "+userSubject1+" marks"));
// var obtainedMarks2 = Number(prompt("Enter your obtained "+userSubject2+" marks"));
// var obtainedMarks3 = Number(prompt("Enter your obtained "+userSubject3+" marks"));
// var totalObtainedmarks =  obtainedMarks1 + obtainedMarks2 + obtainedMarks3  ;

// document.write(userSubject1," 100 "," ",obtainedMarks1," ",obtainedMarks1,"%");

// document.write("<br>");

// document.write(userSubject2," 100 "," ",obtainedMarks2," ",obtainedMarks2,"%");

// document.write("<br>");

// document.write(userSubject3," 100 "," ",obtainedMarks3," ",obtainedMarks3,"%");

// document.write("<br>");

// var totalPercentage =totalObtainedmarks/totalMarks*100;

// document.write("Total marks: ",totalMarks," "," Total Obtained marks: ",totalObtainedmarks," ","Percentage: ",totalPercentage);

//?  Question no 5 end

//!  Chapter no 6,7 and 8 end

//! Chapter no 9,10 and 11 start

//? Question no 1 start

// var userCity = prompt("Enter your city name");

// if (userCity == "Karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + userCity);
// }

//? Question no 1 end

//? Question no 2 start

// var userGender = prompt("Enter your gender");

// if(userGender == "Male"){
//     alert("Good Morning Sir");
// }else{
//     alert("Good Morning Ma’am.");
// }

//? Question no 2 end

//? Question no 3 start

// var userColor = prompt("Enter Traffic signal color");

// if(userColor == "Red"){
//     alert("Must Stop");
// }else if (userColor == "Yellow"){
//     alert("Ready to Move");
// }else if(userColor == "Green"){
//     alert("Move now");
// }else{
//     alert("Incorrect Color");
// }

//? Question no 3 end

//? Question no 4 start

// var userFuel = Number(prompt("Enter your Fuel"));

// if(userFuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }else{
//     alert("Your fuel is good");
// }

//? Question no 4 end

//? Question no 5 start

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

//? Question no 5 end

//? Question no 6 start

// var totalMarks = Number(prompt("Enter your total marks"));
// var obtainedMarks = Number(prompt("Enter your obtained marks"));
// var grade;
// var remarks;
// var percentage = obtainedMarks/totalMarks*100;

// if (percentage >= 80 && percentage <=100) {
//     grade = "A-one";
//     remarks = "Excellent";
// }else if(percentage >= 70 && percentage <=79){
//     grade = "A";
//     remarks = "Good";
// }else if(percentage >= 60 && percentage <=69){
//     grade = "B";
//     remarks = "You need to improve";
// }else{
//     grade = "F";
//     remarks = "Fail";
// }

// document.write("<h1>Mark Sheet</h1>");

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// document.write("Total Marks: ",totalMarks);

// document.write("<br>");

// document.write("Obtained Marks: ",obtainedMarks);

// document.write("<br>");

// document.write("Percentage: ",percentage,"%");

// document.write("<br>");

// document.write("Grade: ",grade);

// document.write("<br>");

// document.write("Remarks: ",remarks);

//? Question no 6 end

//? Question no 7 start

// var secretNum = 7;
// var userNum = Number(prompt("Guess the number between 1 to 10"));

// if(userNum == secretNum){
//     alert("Bingo! Correct answer")
// }else if(userNum == 8 || userNum == 6){
//     alert("Close enough to the correct answer");
// }

//? Question no 7 end

//? Question no 8 start

// var userNum = Number(prompt("Enter a number"));

// if (userNum % 3 === 0) {
//     alert(userNum + " " + "is divisible by 3");
// } else {
//     alert(userNum + " " + "is not divisible by 3");
// }

//? Question no 8 end

//? Question no 9 start

// var userNum = Number(prompt("Enter a number"));

// if (userNum % 2 === 0) {
//     alert(userNum + " " + "is even number");
// } else {
//     alert(userNum + " " + "is odd number");
// }

//? Question no 9 end

//? Question no 10 start

// var T =  Number(prompt("Enter the temperature number"));

// if(T > 40){
//     alert("It is too hot outside");
// }else if(T>30){
//     alert("The Weather today is Normal");
// }else if(T>20){
//     alert("Today’s Weather is cool");
// }else{
//     alert("OMG! Today’s weather is so Cool");
// }

//? Question no 10 end

//? Question no 11 start

// var firstNum = Number(prompt("Enter First number"));
// var secondNum = Number(prompt("Enter Second number"));
// var result;
// var operation = prompt("Enter the operation (+ , - , * , /)");

// if (operation == "+") {
//     result = firstNum + secondNum;
//     alert(firstNum + " + " + secondNum + " = " + result);
// } else if (operation == "-") {
//     result = firstNum - secondNum;
//     alert(firstNum + " - " + secondNum + " = " + result);
// } else if (operation == "*") {
//     result = firstNum * secondNum;
//     alert(firstNum + " * " + secondNum + " = " + result);
// } else if (operation == "/") {
//     result = firstNum / secondNum;
//     alert(firstNum + " / " + secondNum + " = " + result);
// }

//? Question no 11 end

//! Chapter no 9,10 and 11 end 