let count = 2

while(count < 65536) {
    count = count *2
    console.log(count)
}

let cones = Math.floor((Math.random() * 50) + 50);

do{
    let userQty = Math.floor((Math.random() * 5) + 1);

    if (cones === 0) {
        console.log('Yay! I sold them all!')
        break
    }

    if(userQty > cones) {
        console.log(`Cannot sell you ${userQty} cones, I only have ${cones}`)
        console.log(cones + ' cones sold')
        cones = 0;
        continue
    }

    if(cones > userQty) {
        console.log(userQty + ' cones sold')
        cones = cones-userQty
        continue
    }


}while (cones >= 0);
