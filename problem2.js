// fined a Number:
function finedNumber(Numbers,findNum){
    let count = 0;
    for(let i of Numbers){
        if (i === findNum){
            count ++
        }
    }
    const result = findNum + ' have ' + count + ' time';
    return result;
}

const NumbersArray = [1,2,3,4,5,6,77,755,34,2,14,,6,21,1,3,2,1,4,5,677,32,1,35,1];

const result1 = finedNumber(NumbersArray,1)
console.log(result1)

const result2 = finedNumber(NumbersArray , 3)
console.log(result2)