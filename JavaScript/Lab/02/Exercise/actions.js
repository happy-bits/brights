const result = document.querySelector(".result")

function changeHtml() {
    result.innerHTML = "What does the <b>fox</b> says?"
}

function changeText() {
    result.innerText = "What does the <b>fox</b> says?"
}

function highlight() {
    result.classList.add("fat-borders")
    result.classList.add("big-orange-font")
}

function unHighlight() {
    result.classList.remove("fat-borders")
    result.classList.remove("big-orange-font")
}

function hide() {
    result.classList.add("hidden")
}

function show() {
    result.classList.remove("hidden")
}

function secret() {
    result.innerHTML = "The <b>secret</b> of the fox"
}

function ancient() {
    result.innerHTML = "<b>Ancient</b> mystery"
    result.classList.add("fat-borders")
}

function snowFox() {
    result.classList.add("fox")
    result.innerHTML=""
}