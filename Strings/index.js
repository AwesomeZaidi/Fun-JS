// Write a function that uppercases the first character of string
function firstCharUp(s) {
    // let new = s.charAt(0).toUppercase();
    const hello = s.charAt(0).toUpperCase() + s.slice(1);
    return hello
}

// convert str to lst
function convertStrToLst(s) {
    return s.split(' ');
}

// Write a function that uppercases the first letter of each word in a string
function upperCaseEachFirstLet(s) {
    lst = convertStrToLst(s)
    for (idx in lst) {
        lst[idx] = firstCharUp(lst[idx])
    }
    return lst.join(' ')
}

// Write a function that uppercases every other words first letter
function capEvOthLet(s) {
    lst = convertStrToLst(s);
    // this is creating extra memory.
    lst.filter((word, idx) => {
        idx % 2 !== 0 && (lst[idx] = firstCharUp(lst[idx]))
    }).join(' ')
    
    // Try reduce later.
    // lst.reduce((word, idx) => {
    //     idx % 2 !== 0 && (lst[idx] = firstCharUp(lst[idx]))
    // }).join(' ')
    return lst
}

function removeWhitespace(s) {
    return s.replace(/\s/g, "");
    // let newS =  s.trim(' ')
    // return newS
}

// Write a function that removes only the extra whitespace from a given string
// (example: “ a        b ” → “a b”)
function removeExtras(s) {
    for (let i=0; i < s.length; i++) {
        console.log('s:', s)
    }
}

function snakeCase(s) {
    let newS = s.replace(' ', '_') // why isn't thing working on all matching patterns    
    newS = newS.toLowerCase()
    return newS
}

console.log(snakeCase('a ASIM ImAZ'))


// console.log(removeWhitespace('hello word yo i asim'))
// console.log(capEvOthLet('hello word yo i asim'))
// console.log(upperCaseEachFirstLet('hello word yo i asim'))
// console.log(firstCharUp('asim'))