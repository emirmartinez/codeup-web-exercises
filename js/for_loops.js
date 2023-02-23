function showMultiplicationTable (num) {
    for(let i = 0; i <= 10; i++) {
        console.log(num * i);
    }
}

// console.log(showMultiplicationTable(5))

function tenRandomNumbers () {
    for(let i = 1; i <= 10; i++) {
        let random = Math.floor((Math.random() * 200) + 20);
        if(random % 2 === 0) {
            console.log(`${random} is even`)
        } else {
            console.log(`${random} is odd`)
        }
    }
}

console.log(tenRandomNumbers())

function pyramid () {
    let num =''
    for(let i = 1; i < 10; i++) {
        let x = i
        while (x != 0) {
            num+=i
            x--
        }
        console.log(num)
        num ='';
    }
}

// console.log(pyramid())

function subtractFive (num) {
    let count = num
    while(count != 0) {
        console.log(count)
        count-=5
    }
}

// console.log(subtractFive(100))
