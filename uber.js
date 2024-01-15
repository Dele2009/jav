let presentdesti = document.getElementById("from");
let futuredesti = document.getElementById("to");
let tripinfo = document.getElementById("text");
let formerror = document.getElementById("fromerror");
let toerror = document.getElementById("toerror");
let minute = document.getElementById("min");
let seconds = document.getElementById("sec");

let proceedBtn = document.getElementById("btnproceed");
let startBtn = document.getElementById("btnstart");
let cancelBtn = document.getElementById("btncancel");
let confirminfo = document.getElementById("confirmtext");
let pauseBtn = document.getElementById("btnpause");
let contBtn = document.getElementById("btncont");
let stopBtn = document.getElementById("btnstop");
let genertBtn = document.getElementById("btngenert");
let resetBtn = document.getElementById("btnreset");
let showtime = document.getElementById("time-display");
let spinner = document.getElementById("spin");

let showreceipt = document.getElementById("bill");
let receiptprices = document.querySelectorAll(".price");



let initiator = 0;
let p, minout, secout;

function fromvalidate() {
    if (presentdesti.value === "") {
        formerror.innerHTML = "";
    }
    else if (!presentdesti.value || !isNaN(presentdesti.value)) {
        formerror.innerHTML = "Invalid input";
    }
    else {
        formerror.innerHTML = "";

    }
}

function tovalidate() {
    if (futuredesti.value === "") {
        formerror.innerHTML = "";
    }
    if (!futuredesti.value || !isNaN(futuredesti.value)) {
        toerror.innerHTML = "Invalid input";
    }
    else {
        toerror.innerHTML = "";

    }
}


proceedBtn.addEventListener("click", () => {
    if (futuredesti.value && presentdesti.value) {
        startBtn.style.visibility = "visible";
        startBtn.style.position = "relative";
        cancelBtn.style.visibility = "visible";
        cancelBtn.style.position = "relative";

        proceedBtn.style.visibility = "hidden";
        proceedBtn.style.position = "absolute";
        confirminfo.innerHTML = `You are requesting a ride from ${presentdesti.value} to ${futuredesti.value}, kindly confirm `


    }
    else {
        confirminfo.innerHTML = "Input your destinations";
    }
})







function countstarter() {
    initiator++
    minout = parseInt(initiator / 60).toString().padStart(2, "0");
    secout = (initiator % 60).toString().padStart(2, "0");
    console.log(minout);
    console.log(secout);
    minute.innerHTML = minout;
    seconds.innerHTML = secout;

}

function tripGo() {
    p = setInterval(countstarter, 1000);
    startBtn.style.visibility = "hidden";
    startBtn.style.position = "absolute";
    cancelBtn.style.visibility = "hidden";
    cancelBtn.style.position = "absolute";
    pauseBtn.style.visibility = "visible";
    pauseBtn.style.position = "relative";
    stopBtn.style.visibility = "visible";
    stopBtn.style.position = "relative";
    showtime.style.visibility = "visible";
    showtime.style.position = "relative";
    confirminfo.innerHTML = "";
    tripinfo.innerHTML = `You are now in transit from ${presentdesti.value} to ${futuredesti.value} `


}


startBtn.addEventListener("click", tripGo);


cancelBtn.addEventListener("click", () => {
    startBtn.style.visibility = "hidden";
    startBtn.style.position = "absolute";
    cancelBtn.style.visibility = "hidden";
    cancelBtn.style.position = "absolute";

    proceedBtn.style.visibility = "visible";
    proceedBtn.style.position = "relative";
    futuredesti.value = "";
    presentdesti.value = "";
    confirminfo.innerHTML = "Input your destinations";
})

btnpause.addEventListener("click", () => {
    clearInterval(p);
    contBtn.style.visibility = "visible";
    contBtn.style.position = "relative";
    pauseBtn.style.visibility = "hidden";
    pauseBtn.style.position = "absolute";
    tripinfo.innerHTML = `You have paused your transit from ${presentdesti.value} to ${futuredesti.value} `

})

contBtn.addEventListener("click", () => {
    p = setInterval(countstarter, 1000);
    contBtn.style.visibility = "hidden";
    contBtn.style.position = "absolute";
    pauseBtn.style.visibility = "visible";
    pauseBtn.style.position = "relative";
    tripinfo.innerHTML = `You are now in transit from ${presentdesti.value} to ${futuredesti.value} `;
})


stopBtn.addEventListener("click", () => {
    clearInterval(p);

    genertBtn.style.visibility = "visible";
    genertBtn.style.position = "relative";
    pauseBtn.style.visibility = "hidden";
    pauseBtn.style.position = "absolute";
    stopBtn.style.visibility = "hidden";
    stopBtn.style.position = "absolute";
    contBtn.style.visibility = "hidden";
    contBtn.style.position = "absolute";
    tripinfo.innerHTML = `Your trip has come to an end`
})


function loadershow(loading, stop) {
    let count = loading;

    function loaderinin() {
        console.log(count);
        if (count === stop) {
            clearInterval(goload);
            showreceipt.style.visibility = "visible";
            showreceipt.style.position = "relative";
            genertBtn.style.visibility = "hidden";
            genertBtn.style.position = "absolute";
            resetBtn.style.visibility = "visible";
            resetBtn.style.position = "relative";
            spinner.style.visibility = "hidden";
            spinner.style.position = "absolute";

            base = 1000;
            minout = +(minout)
            secout = +(secout)
            timeprice = Math.round((minout + (secout / 60)) * 100);
            initotal = base + timeprice;
            taxamount = Math.round(initotal * 0.10);
            totalpay = initotal + taxamount;


            receiptprices.forEach(receiptprices => {
                if (receiptprices.id == "base") receiptprices.innerHTML = `&#8358;${base}`;
                else if (receiptprices.id == "time") receiptprices.innerHTML = `&#8358;${timeprice}`;
                else if (receiptprices.id == "initot") receiptprices.innerHTML = `&#8358;${initotal}`;
                else if (receiptprices.id == "tax") receiptprices.innerHTML = `&#8358;${taxamount}`;
                else if (receiptprices.id == "payable") receiptprices.innerHTML = `&#8358;${totalpay}`;

            })

        }

        else {

            count++

            spinner.style.visibility = "visible";
            spinner.style.position = "relative";
        }
    }
    let goload = setInterval(loaderinin, 1000)

}


genertBtn.addEventListener("click", () => {
    
    loadershow(0, 5)
})

resetBtn.addEventListener("click", () => {
    initiator = 0;
    minute.innerHTML = "00";
    seconds.innerHTML = "00";
    startBtn.style.visibility = "hidden";
    startBtn.style.position = "absolute";
    cancelBtn.style.visibility = "hidden";
    cancelBtn.style.position = "absolute";

    proceedBtn.style.visibility = "visible";
    proceedBtn.style.position = "relative";
    futuredesti.value = "";
    presentdesti.value = "";
    confirminfo.innerHTML = "Input your destinations";
    resetBtn.style.visibility = "hidden";
    resetBtn.style.position = "absolute";
    showreceipt.style.visibility = "hidden";
    showreceipt.style.position = "absolute";
    showtime.style.visibility = "hidden";
    showtime.style.position = "absolute";
    tripinfo.innerHTML = "";
})