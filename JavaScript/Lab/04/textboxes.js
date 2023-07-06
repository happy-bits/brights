//console.log('hallå?')

const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const result = document.querySelector(".result")

render()

function render() {
    
    // console.log('Värdet är nu ' + text1.value + '!')

    // console.log(`Värdet är nu ${text1.value}!`)

    // Ändra text2-rutan värde till text1-rutans värde

    text2.value = text1.value

    const nrOfChars = text1.value.length

    if (nrOfChars === 0){
        result.innerText = "No characters :("
    } else if (nrOfChars === 1) {
        result.innerText = "1 character"
    } else {
        result.innerText = `${nrOfChars} characters`
    }


}