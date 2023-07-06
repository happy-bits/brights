
// let x = 134
// let y = 'abc'
// const z = 789
//var w = 567

const inputEmail = document.querySelector('.email')


function sendForm() {

    console.log('Yes!')

    // Emailadress är tom

    if (inputEmail.value === "") {
        console.log('Den är tom!')
    }

    // Emailadress är ogiltig

    // Olika emailaddresser uppe och nere

    // Success

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


