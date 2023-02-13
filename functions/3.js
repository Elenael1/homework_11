const splitMessage = (message, delimetr) => {
    const mes = message.split(delimetr)
    return mes;
}

const str = splitMessage("Js is cool", " ")
console.log('str', str)