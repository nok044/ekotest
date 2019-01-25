var transformWord = (word) => {
    var tmpWord = word
    while(word.indexOf('(') !== -1) {
        var charList = word.split('')
        var stack = []
        var str = ''
        var end = false;
        charList.forEach((char) => {
            if (char === '(' && !end)
                stack.push('(')
            else if (char === ')' && !end) {
                var tmp = ''
                var tmpStr = ''
                while ((tmp = stack.pop()) !== '(')
                    tmpStr += tmp
                var leftStr = ''
                while (tmp = stack.pop())
                    leftStr += tmp
                leftStr = leftStr.split('').reverse().join('')
                str += leftStr + tmpStr
                end = true
            } else if (stack.length && !end)
                stack.push(char)
            else
                str += char
        })
        word = str
    }

    return tmpWord + ' => ' + word
}

console.log(transformWord('foo(bar)'))
console.log(transformWord('(bar)'))
console.log(transformWord('foo(bar)blim'))
console.log(transformWord('foo(foo(bar))blim'))