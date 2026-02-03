function randomNumbers(min,max){
    let random = Math.ceil(Math.random()*(max-min+1))+min;
    return random;
}

let result = randomNumbers(10,20);
console.log(result)
