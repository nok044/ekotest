var groupWord = (wordList) => {
    var group = []
    wordList.forEach((item) => {
        var key = item.split('').sort().join('')
        if(!group[key])
            group[key] = []
        group[key].push(item)
    })
    return group
}

var printGroupWord = (groupWordList) => {
    for (var key in groupWordList) {
        var str = ''
        var wordList = groupWordList[key]
        wordList.forEach((item) => {
            str += item+' - '
        })
        console.log(str.substring(0,str.length-2))
    }
}

var run = (wordList) => {
    var groupWordList = groupWord(wordList)
    printGroupWord(groupWordList)
}

var wordList = [
    'AMOR','XISELA','JAMON','ROMA','OMAR','MORA','ESPONJA','RAMO','JAPONES','ARMO','MOJAN','MARO','ORAM','MONJA','ALEXIS'
]

run(wordList)