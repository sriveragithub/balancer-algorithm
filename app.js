const newFunc = (test) => {
    let emptyArr = []
    for (var i = 0; i < test.length; i++) {
        emptyArr.push(test[i])
    }

    console.log(`starting arr ${emptyArr}`)
   
    // this part of the function sets brace pairs to x's by looping forward through array to find closing braces and then looping backwards to find it's paired opening brace
    for (var i = 0; i < emptyArr.length; i++) {
        if (emptyArr[i] == '}') {
            for (var j = i - 1; j >= 0 ; j--) {
                if (emptyArr[j] == '{') {
                    emptyArr[i] = 'x'
                    emptyArr[j] = 'x'
                    break
                }
            }
        }
    }

    console.log(`ending arr ${emptyArr}`)

    // this for loops checks to see if the converted array has any left over open or closing braces. if it does, it sets the answer equal to the array index of the first leftover brace. if it doesn't, it sets the answer to equal -1
    var answer
    for (let k = 0; k < emptyArr.length; k++) {
        if (emptyArr[k] == '{') {
            answer = k
            break
        } else if (emptyArr[k] == '}') {
            answer = k
            break
        } else if (!emptyArr.includes('{') && !emptyArr.includes('}')) {
            answer = -1
            break
        }
    }

    console.log(`answer is ${answer}`)
    return answer
}

// balance examples
newFunc('hello world');
newFunc('{}');
newFunc('{{{foo();}}}{}');
newFunc('{{}{}}');

// unbalanced examples
newFunc('{{{}');
newFunc('}');
newFunc('{}{foo{}');