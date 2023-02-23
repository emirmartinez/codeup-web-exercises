let userNumber = prompt('Enter an odd number between 1 - 50');

while(userNumber % 2 !== 1) {
    userNumber = prompt('Enter an odd number between 1 - 50');
}

for(let i = 0; i < 50; i++) {
    if(i % 2 !== 0) {
        if(Number(userNumber) === i) {
            console.log('Yikes! Skipping number: ' + i)
        } else {
            console.log('Here is an odd number: ' + i)
        }
    }
}

