// সেলসিয়াস থেকে ফারেনহাইট এবং ফারেনহাইট থেকে সেলসিয়াসঃঃ 

// c to f:
function celToFar(celsius){
    let farenhight = (celsius * 9/5) + 32
    return farenhight;
}

let celsius1 = celToFar(56);
console.log(celsius1)
let celsius2 = celToFar(96);
console.log(celsius2)

console.log('----------------------')


// f to c

function farToCel(farenhight){
    let celsius = (farenhight - 32) * 5/9 ;
    return celsius
}

let farenhight1 = farToCel(132.8)
console.log(farenhight1)
let farenhight2 = farToCel(1382.8)
console.log(farenhight2)