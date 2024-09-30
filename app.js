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

//! Chapter no 12 and 13 start

//? Question no 1 start

//? Question no 1 end

//? Question no 2 start

// var num1 = Number(prompt("Enter a number"));
// var num2 = Number(prompt("Enter a number"));
// var largeNum;

// if (num1 > num2) {
//     largeNum = num1;
//     alert("First value is greater than second value");
// } else if (num2 > num1) {
//     largeNum = num2;
//     alert("Second value is greater than first value");
// }else{
//     alert("First value is equal to Second value");
// }

//? Question no 2 end

//? Question no 3 start

// var userNum = prompt("Enter a number");

// if(userNum == 0){
//     alert("Entered value is "+userNum);
// }else if(userNum > 0){
//     alert("Entered value is positive");
// }else{
//     alert("Entered value is negative");
// }

//? Question no 3 end

//? Question no 4 start

// var userInput = prompt("Enter one vowel");
// var T = "Correct!";

// if (userInput.length == 1) {
//     if (userInput == "a") {
//         alert(T);
//     } else if (userInput == "e") {
//         alert(T);
//     } else if (userInput == "o") {
//         alert(T);
//     } else if (userInput == "u") {
//         alert(T);
//     } else if (userInput == "i") {
//         alert(T);
//     } else {
//         alert("Incorrect");
//     }
// } else {
//     alert("Enter one vowel");
// }

//? Question no 4 end

//? Question no 5 start

// var correctPass = "sungodnika";
// var userPass = prompt("Enter your password");

// if(userPass.length == 0){
//     alert("Please enter your password");
// }else if(userPass == correctPass){
//     alert("Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect Password");
// }

//? Question no 5 end

//? Question no 6 start

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good evening";
// } else {
//     greeting = "Good day";
// }
// console.log(greeting);

//? Question no 6 end

//? Queston no 7 start

// var userTime = Number(prompt("Enter your time in 24 hours clock format like (1900 = 7pm)"));
// var greeting;

// if (userTime >= 0 && userTime < 1200) {
//     greeting = "Good Morning";
// } else if (userTime >= 1200 && userTime < 1700) {
//     greeting = "Good Afternoon";
// } else if (userTime >= 1700 && userTime < 2100) {
//     greeting = "Good evening";
// } else if (userTime >= 2100 && userTime <= 2359) {
//     greeting = "Good night";
// }

// console.log(greeting);

//? Queston no 7 end

//! Chapter no 12 and 13 end

//! Chapter no 13 to 15 start

//? Question no 1 start

// var studentsName = [];

//? Question no 1 end

//? Question no 2 start

// var studentsName = [];

//? Question no 2 end

//? Question no 3 start

// var stringArr = ["Abid", "Ahmed", "Ali", "Mohsin"];

//? Question no 3 end

//? Question no 4 start

// var numberArr = [1, 2, 3, 4, 5];

//? Question no 4 end

//? Question no 5 start

// var booleanArr = [true,false];

//? Question no 5 end

//? Question no 6 start

// var mixArr = ["Abid", 1, true];

//? Question no 6 end

//? Question no 7 start

// var qualificationArr = ["SSC", "HSC", "BCS", "MS", "BCOM", "BS", "M.Phil", "PhD"];

// for (var i = 0; i < qualificationArr.length; i++) {
//     document.write(i,")",qualificationArr[i]);
//     document.write("<br>");
// }

//? Question no 7 end

//? Question no 8 start

// var studentName = ["Abid", "Ali", "Ahmed"];
// var studentScore = [400, 300, 200];
// var percentage;

//! Withoout for loop   
// document.write("Score of ", studentName[0], " is ", studentScore[0], " Percentage ", percentage = studentScore[0] / 500 * 100, "%");

// document.write("<br>");

// document.write("Score of ", studentName[1], " is ", studentScore[1], " Percentage ", percentage = studentScore[1] / 500 * 100, "%");

// document.write("<br>");

// document.write("Score of ", studentName[2], " is ", studentScore[2], " Percentage ", percentage = studentScore[2] / 500 * 100, "%");

//! With for loop
// for (var i = 0; i<studentName.length;i++){
//     document.write("Score of ", studentName[i], " is ", studentScore[i], " Percentage ", percentage = studentScore[i] / 500 * 100, "%");
//     document.write("<br>");
// }

//? Question no 8 end

//? Question no 9 start

// var Colors = ["Red", "Green", "Yellow", "Brown", "Black", "White"];

// var userColor = prompt("Enter a color to add at the start of array");
// var userColor2 = prompt("Enter a color to add at the end of array");

// var userIndex = prompt("Enter the index where you want to add the Color name");
// var userColor3 = prompt("Enter a color to add in array");

// var userIndex2 = Number(prompt("Enter the index where you want to delete the Color name"));
// var userdelCount =Number(prompt("Enter the amount of Colors name you want delete")) ;

// document.write("Before ", Colors);
// document.write("<br>");
// document.write("<br>");

// Colors.unshift(userColor);

// Colors.push(userColor2);

// Colors.unshift("Purple,Gray");

// Colors.pop();

// Colors.shift();

// Colors.splice(userIndex, 0, userColor3);

// Colors.splice(userIndex2,userdelCount);

// document.write("After ", Colors);

//? Question no 9 end

//? Question no 10 start

// var studentScore = [320,230,120,500];

// document.write("Before ",studentScore);
// document.write("<br>");

// studentScore.sort();

// document.write("After ",studentScore);

//? Question no 10 end

//? Question no 11 start

// var Cities = ["Karachi", "Lahore", "Islamabad", "Dadu", "Thatta"];
// var selectedCities = Cities.slice(1,3);

// document.write("<p>Cities list:</p>");
// document.write(Cities);

// document.write("<p>Selected Cities:</p>");
// document.write(selectedCities);

//? Question no 11 end

//? Question no 12 start

// var arr = ["This", "is", "my", "cat"];
// var arr2 = arr.join(" ");

// document.write("Before ",arr);
// document.write("<br>");

// document.write("After ",arr2);

//? Question no 12 end

//? Question no 13 start

// var Devices = ["Keyboard", "Mouse", "Monitor", "Printer"];

// document.write("<p>OUT</p>");

// document.write(Devices[0]);

// document.write("<p>OUT</p>");

// document.write(Devices[1]);

// document.write("<p>OUT</p>");

// document.write(Devices[2]);

// document.write("<p>OUT</p>");

// document.write(Devices[3]);

//? Question no 13 end

//? Question no 14 start

// var Devices = ["Keyboard", "Mouse", "Monitor", "Printer"];

// document.write("<p>OUT</p>");

// document.write(Devices[3]);

// document.write("<p>OUT</p>");

// document.write(Devices[2]);

// document.write("<p>OUT</p>");

// document.write(Devices[1]);

// document.write("<p>OUT</p>");

// document.write(Devices[0]);

//? Question no 14 end

//? Question no 15 start

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<label for="manufacturers">Choose a phone manufacturer:</label>');
// document.write('<select id="manufacturers">');

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// document.write('</select>');

//? Question no 15 end

//! Chapter no 13 to 15 end

//! Chapter no 16 to 20 start

//? Question no 1 start

// var arr = [[1, 2, 3], [2, 4, 6], [1, 3, 5]];

//? Question no 1 end

//? Qustion no 2 start

// var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i])
//     document.write("<br>")
// }

//? Qustion no 2 end

//? Question no 3 start

// for(var i = 1;i<=10;i++){
//     document.write(i);
//     document.write("<br>");
// }

//? Question no 3 end

//? Question no 4 start

// var userCount = Number(prompt("Enter a number for length"));
// var userNum = Number(prompt("Enter a number for multiplication"));

// for (var i = 1; i <= userCount; i++) {
//     document.write(userNum, " x ", i, " = ", userNum * i);
//     document.write("<br>");
// }

//? Question no 4 end

//? Question no 5 start 

// var friuts = ["Banana", "Apple", "Mango", "Orange"];

// for (var i = 0; i < friuts.length; i++) {
//     document.write(friuts[i]);
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Element at ",i," index is ",friuts[i]);
//     document.write("<br>");
//     document.write("<br>");
// }

//? Question no 5 end


//? Question no 6 start

// for (var i = 1; i <= 15; i++) {
//     document.write(i," ");
// }

// for (var i = 10; i > 0; i--) {
//         document.write(i," ");
// }

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i," ");
//     }
// }

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i," ");
//     }
// }

// for (var i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i,"k"," ");
//     }
// }

//? Question no 6 end

//? Questio no 7 start

// var Items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter what you want to eat from bakery");
// var flag = false;

// for (var i = 0; i < Items.length; i++) {
//     if(userInput == Items[i]){
//         flag = true;
//     }
// }

// if(flag){
//     alert(userInput+" is "+" available");
// }else{
//     alert("Sorry this "+ userInput +" not available")
// }

//? Questio no 7 end

//? Questio no 8 start

// var A = [24, 53, 78, 91, 12];
// var maxNum = 0;

// for (var i = 0; i < A.length; i++) {
//     if(A[i] > maxNum ){
//         maxNum = A[i];
//     }
// }

// document.write("Array items: " + A);

// document.write("<br>");

// document.write("The largest number is: " + maxNum);

//? Questio no 8 end

//? Questio no 9 start

// var A = [24, 53, 78, 91, 12];
// var minNum = A[0];

// for (var i = 0; i < A.length; i++) {
//     if(A[i] < minNum ){
//         minNum = A[i];
//     }
// }

// document.write("Array items: " + A);

// document.write("<br>");

// document.write("The Minimum number is: " + minNum);

//? Questio no 9 end

//? Question no 10 start

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + " ");
//     }
// }

//? Question no 10 end

//! Chapter no 16 to 20 end
