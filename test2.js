var regExp = /\(([^)]+)\)/;

var transformWord = (word) => {
    while(matches = regExp.exec(word)){
        var str = matches[1].split('').reverse().join('')
        word = word.replace(matches[0],str)
    }

    return word + ' => ' + word
}

console.log(transformWord('foo(bar)'))
console.log(transformWord('(bar)'))
console.log(transformWord('foo(bar)blim'))
console.log(transformWord('foo(foo(bar))blim'))