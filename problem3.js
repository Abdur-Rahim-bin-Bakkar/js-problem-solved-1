// find vowels form string :

function findvowels(string){
    let count = 0;
    string = string.toLocaleLowerCase()
    for(let i of string){
        if(i ==='a' || i==='e' || i==="i" || i==='o' || i ==='u'){
            count ++;
        }
    }
    return count;
}

let string1 = 'my name is md rahim sIkdar. i am a student';

let result1 = findvowels(string1);
console.log(result1)