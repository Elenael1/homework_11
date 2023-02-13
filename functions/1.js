const makeStringFromArray = (array, delimetr) => {
    const string = array.join(delimetr);
    return string
}
const c = makeStringFromArray(["I", "love", "js"], " ");
console.log('c', c)