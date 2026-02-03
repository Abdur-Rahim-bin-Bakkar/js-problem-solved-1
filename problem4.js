let message = ' I am learning Programming to become a programmer';
let message2 = 'my name is md rahim sikdar, i am a full-stack wev developer'

function findLargestWrodInString(string){
    let stringConverdArray = string.trim().split(' ')
    let size = stringConverdArray[0].length
    let findstring = stringConverdArray[0];
    for(let i of stringConverdArray){
        if(i.length > size){
            size = i.length;
            findstring = i;
        }
    }
    return findstring
}
let resunt1 = findLargestWrodInString(message);
console.log(resunt1)

let result2 = findLargestWrodInString(message2)
console.log(result2)