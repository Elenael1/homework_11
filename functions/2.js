const checkFruit = (fruit) => {
    if (fruit.includes("Apples")) {
        return true;
    }
    return false;
}
const fruits = checkFruit(["Strawberries", "Apples", "Grapes"])
console.log('fruits', fruits)