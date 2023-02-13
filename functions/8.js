const include = (array, value) => {
    for (const i of array) {
        if (i === value) {
            return true
        }
    }
    return false
}

const a = include([1, 2, 3, 4], 3)
console.log('a', a)