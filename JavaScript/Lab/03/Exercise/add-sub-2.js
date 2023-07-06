const result = document.querySelector(".result")

let number

reset()

function addOne() {
    number++
    render()
}

function addTen() {
    number+=10
    render()
}

function substractOne() {
    number--
    render()
}

function substractTen() {
    number-=10
    render()
}

function reset() {
    number = 1337
    render()
}

function render() {
    result.innerHTML = number
    if (number % 2 === 1){
        result.classList.add("blue-dots")
    } else {
        result.classList.remove("blue-dots")
    }
}