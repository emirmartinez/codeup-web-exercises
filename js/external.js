console.log("Hello from external JavaScript");

//Favorite Color Exercise
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert(`Great, ${favColor} is my favorite color too!`)

//Rented Movies Exercise
alert("Thanks for renting our movies");
let question = 'How many day do you want to rent ';
let mermaid = prompt(question + "The little Mermaid");
let brotherBear = prompt(question + "Brother Bear");
let hercules = prompt(question + "Hercules");
let total = mermaid*3 + brotherBear*3 + hercules*3;
alert(`Great, your total is $${total}.`);

//Work Pay Calculation Exercise
alert('Lets now calculate your pay');
let Google = prompt('How many hours did you work at Google?');
let Amazon = prompt('How many hours did you work at Amazon?');
let Facebook = prompt('How many hours did you work at Facebook?');
let GooglePay = Google * 400;
let AmazonPay = Amazon * 380;
let FacebookPay = Facebook * 350;
alert(`Your total pay was $${GooglePay + AmazonPay + FacebookPay}`)

//Student Enrollment Exercise
let openEnrollment = true;
let enroll = confirm('Would you like to check if enrollment is open ?');
let checkConfirmation = enroll && openEnrollment ? alert("Our enrollment is open") : alert("Sorry, enrollment is full")

//Product Offer
let offerValid = true;
let checkProducts = prompt("How many products have you purchased");
let offer =  offerValid && checkProducts > 2 ? alert("Offer can be applied") : alert("Sorry you dont qualify for the offer");







