
// let x = 134
// let y = 'abc'
// const z = 789
//var w = 567

const inputEmail = document.querySelector('.email')
const inputEmailAgain = document.querySelector('.email-again')
const resultArea = document.querySelector('.result')


function sendForm() {

    console.log('Start...........')

    // Nollställ klasser

    resultArea.classList.remove('hidden', 'success','error')

    // Emailadress är tom

    if (inputEmail.value === "") {
        resultArea.classList.add('error')
        resultArea.innerText = 'Empty email address'
        return
    }

    // Emailadress är ogiltig

    if(!isValidEmailAddress(inputEmail.value)){
        resultArea.classList.add('error')
        resultArea.innerText = 'Invalid email address'        
        return
    }

    // Olika emailaddresser uppe och nere
    if(inputEmail.value !== inputEmailAgain.value){
        resultArea.classList.add('error')
        resultArea.innerText = 'Not the same'        
        return
    }

    // Success

    resultArea.classList.add('success')
    resultArea.innerText = 'The email addresses are the same :)'       
    

}


function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};


// void SendForm()
// {

// }


