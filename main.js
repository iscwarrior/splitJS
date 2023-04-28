let phrase = "La mejor forma de cambiar algo es intentando o algo asi"

let getPhreses = phrases => {
    splitLetter = phrase.split(" ")
    for (let i = 0; i < splitLetter.length; i++) {
        console.log(splitLetter[i])
    }
}
console.log(getPhreses())