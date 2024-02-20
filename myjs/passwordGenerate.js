



// function walkdog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = false;
//             if (dogwalked) {
//                 resolve("you walked the dog");
//             }
//             else {
//                 reject("dog not walked");
//             }
//         }, 1000)

//     })
// }

// function cleankitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitclean = true;
//             if (kitclean) {
//                 resolve("you clean kitchen");
//             }
//             else {
//                 reject("kitchen not clean");
//             }
//         }, 3000)

//     })
// }


// walkdog().then(value => { console.log(value); return cleankitchen() })
//     .then(value => { console.log(value); console.log("you are done") })
//     .catch(error => { console.error(error) })

// function foods(...foods) {
//     console.log(...foods)
// }
// let food1 = "egg";
// let food2 = "bread";
// let food3 = "rice";
// let food4 = "meat";
// let food5 = "tea";

// foods(food1, food2, food3, food4, food5);


// {/* <div class="section">
// <input type="checkbox" id="uppLetr"/>
// <label for="uppLetr">include Uppercase letter</label><br/>
// <input type="checkbox" id="lowLetr"/>
// <label for="lowLetr">include Lowercase letter</label><br/>
// <input type="checkbox" id="numbers"/>
// <label for="numbers">include numbers</label><br/>
// <input type="checkbox" id="spechal"/>
// <label for="spechal">include special characters</label><br/>
// </div><br>
// <div class="button">
// <button type="button" id="generate">Generate password</button>
// </div>
// <div class="display">
// <input type="text" id="output">
// </div> */}

const includeUppercase = document.getElementById('uppLetr');
const includeLowercase = document.getElementById('lowLetr');
const includeNumbers = document.getElementById("numbers");
const includeSpecialchac = document.getElementById("spechal");
const passlenth = document.getElementById('passlength')

const genrteBtn = document.getElementById('generate');
const passwordout = document.getElementById('output');


let password, 
    charcters, 
    passwordlength, 
    allowletterupper, 
    allowletterlower, 
    allownumbers, 
    allowspecialchars,
    lowerletter,
    upperletter,
    numbers,
    specialcharc;



function generate() {
    passwordlength = passlenth.value;
    allowletterupper = includeUppercase.checked;
    allowletterlower = includeLowercase.checked;
    allownumbers = includeNumbers.checked;
    allowspecialchars = includeSpecialchac.checked;


    lowerletter = "abcdefghijklmnopqrstuvwxyz";
    upperletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numbers = "0123456789";
    specialcharc = "@#$%_#?<*>%&-?/";

    charcters = "";
    password = "";

    charcters += allowletterupper ? upperletter : "";
    charcters += allowletterlower ? lowerletter : "";
    charcters += allownumbers ? numbers : "";
    charcters += allowspecialchars ? specialcharc : "";
    console.log(charcters)
    if (charcters.length == 0) {
        passwordout.value = "Pls select password format";
    }
    else if (passwordlength <= 0 || !passwordlength) {
        passwordout.value = "Pls select a password length";
    }

    else {
        randommizzPassword();
    }

}

function randommizzPassword() {
    for (let i = 0; i < passwordlength; i++) {
        let randommizz = Math.trunc(Math.random() * charcters.length)
        password += charcters[randommizz]

    }
    passwordout.value = password;
}

genrteBtn.addEventListener("click", generate)
