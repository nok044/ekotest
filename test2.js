var transformWord = (word) => {
    var charList = word.split('')
    var stack = []
    var str = ''
    charList.forEach((char) => {
        if(char === '(')
            stack.push('(')
        else if(char === ')'){
            var tmp = ''
            var tmpStr = ''
            while((tmp = stack.pop()) !== '(')
                tmpStr += tmp
            str += tmpStr
        }else if(stack.length)
            stack.push(char)
        else
            str += char
    })

    return word + ' => ' + str
}

console.log(transformWord('foo(bar)'))
console.log(transformWord('(bar)'))
console.log(transformWord('foo(bar)blim'))
console.log(transformWord('foo(foo(bar))blim'))