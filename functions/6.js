const spliceArr = (array) => {
    const string = array.indexOf("Orange")
    const arr = array.splice(string, 1, "grapefruit")
    return arr;

}
const b = spliceArr(["Apple", "Orange", "Plum"])
console.log('b', b)