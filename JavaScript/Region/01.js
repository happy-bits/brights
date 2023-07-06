const result = document.querySelector(".result")
const state = document.querySelector(".state")
const city = document.querySelector(".city")

const stateData = [

    { id: "CA", name: "California", cities: [{ id:"LO", population: 3898747, name: "Los Angeles" }, { id:"SA", population: 1386932, name: "San Diego" }, { id:"OA", population: 440646, name: "Oakland" }] },
    { id: "FL", name: "Florida", cities: [{ id:"JA", population: 949611, name: "Jacksonville" }, { id:"MI", population: 442241, name: "Miami" }, { id:"OR", population: 307573, name: "Orlando" }] },
    { id: "KY", name: "Kentucky", cities: [{ id:"LO",population: 633045, name: "Louisville" }, { id:"BO",population: 72294, name: "Bowling Green" }, { id:"GE",population: 33660, name: "Georgetown" }] },
    { id: "TX", name: "Texas", cities: [{ id:"HO",population: 2320268, name: "Houston" }, { id:"DA",population: 1343573, name: "Dallas" }, { id:"AU",population: 978908, name: "Austin" }] },
]

renderState()

function renderState() {
    let html = `<option value="">Choose state...</option>`

    for(let c of stateData) {

        html += `<option value="${c.id}">${c.name}</option>`
        
    }
    state.innerHTML = html
}

function selectedState(){
    return stateData.find(s=>s.id == state.value)
} 

function selectedCity(){
    return selectedState().cities.find(c=>c.id == city.value)
} 

function renderCity() {

    if (state.value == "") {
        city.classList.add("hidden")
        return
    }
    let html= `<option value="">Choose city...</option>`

    for (let m of selectedState().cities) {
        html += `<option value="${m.id}">${m.name}</option>`
    }

    city.innerHTML = html

    city.classList.remove("hidden")

}

function stateChanged() {
    renderCity()
    result.classList.add("hidden")
}

function cityChanged() {
    if (city.value == "") {
        result.classList.add("hidden")
        return
    }

    city.classList.remove("hidden")
    result.classList.remove("hidden")

    result.innerHTML = `${selectedCity().name} has ${selectedCity().population} inhabitants`
}