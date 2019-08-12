// Strings-Library/index.js

String.prototype.convertStringToList = function() {
    return this.split(' ');
}

String.prototype.isLetter = function() {
    return ((this.length === 1 && this.match(/[a-z]/i)) ? true : false)
}

//// CAPITALIZE ////
String.prototype.firstCharUpper = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}

//// ALL CAPS ////
String.prototype.allCaps = function() {
    return this.toUpperCase()
}

//// CAPITALIZE WORDS ////
String.prototype.allfirstCharsToUpper = function() {
    return this.split(' ').map(word => word.firstCharToUpper()).join(' ')
}

//// DEPRECATED: CAPITALIZE FIRST CHAR OF EACH WORD ////
    // String.prototype.allfirstCharsToUpper = function () {
    //     lst = convertStrToLst(this)
    //     for (i in lst) {
    //         lst[i] = firstCharUp(lst[i])
    //     }
    //     return lst.join(' ')
    // }

String.prototype.capEvOthLet = function() {
    return convertStringToList(this).filter((word, idx) => {
        idx % 2 !== 0 && (lst[idx] = firstCharUp(lst[idx]))
    }).join(' ')
}

//// REMOVE ALL WHITE SPACE ////
String.prototype.removeWhitespace = function() {
    return s.replace(/\s/g, "");
}

//// KABOB CASE ////
String.prototype.kabobCase = function () {
    return this.removeWhiteSpace().split(' ').join('-')
}

//// SNAKE CASE ////
String.prototype.snakeCase = function () {
    return this.removeWhiteSpace().split(' ').join('_')
}

/// CAMEL CASE ////  (This function was donated by Jake Shams https://github.com/jshams)
String.prototype.camelCase = function () {
    let camelStr = ''
    let firstWord = true
    for (word of this.removeWhiteSpace().split(' ')) {
        if (firstWord) {
            camelStr += word
            firstWord = false
        }
        else camelStr += word.firstCharToUpper()
    }
    return camelStr
}

// module.exports.test = test
// module.exports.firstCharToUpper = firstCharToUpper
// module.exports.allCaps = allCaps
// module.exports.allfirstCharsToUpper = allfirstCharsToUpper
// module.exports.upperEveryOtherLetter = upperEveryOtherLetter
// module.exports.removeWhiteSpace = removeWhiteSpace
// module.exports.kabobCase = kabobCase
// module.exports.snakeCase = snakeCase
// module.exports.camelCase = camelCase