const fname = document.getElementById("form-fname");
const lname = document.getElementById("form-lname");
const fmail = document.getElementById("form-email");
const fconta = document.getElementById("form-cont");
const fsubmit = document.getElementById("form-info-sub");
const emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const contactformat = /^(?:(\+234)|(0))([789][01])(\d{8})$/;
const formpage = document.getElementById("form1");
const formpagetwo = document.getElementById("form2");
const loader = document.getElementById("loadman");


const depart = document.getElementById("datedepart");
const rooms = document.getElementById("Rooms");
const roomprice = document.getElementById("price-room-div");
const datediv = document.getElementById("dates-ar");
const duluxprices = document.getElementById("price-room");
const priceoutput = document.getElementById("priceout");
const pricediv = document.getElementById("price-sys");
const hotelnext = document.getElementById("hotelnext");
const hotelbook = document.getElementById("hotelbook");
const countdisplay = document.getElementById("countdown");
const section = document.getElementById("section-mid");
const formaway = document.querySelector(".forms");
const cardtext = document.querySelector(".card-text")
const cardcont = document.querySelector(".card-container")




let proceed, daydis, day, hour, min, sec, initialstay, finalstay, counters;




//INNITIAL FORM VALIDATIONS
function formname() {
    if (!fname.value || fname.value.length > 15) {
        proceed = false;
        fname.style.border = "3px solid red";
    }

    else {

        fname.style.border = "none";
        proceed = true;
    }

}
function formlname() {
    if (!lname.value || lname.value.length > 15) {
        proceed = false;
        lname.style.border = "3px solid red";
    }


    else {

        lname.style.border = "none";
        proceed = true;
    }
}
function formemail() {
    if (!fmail.value || !fmail.value.match(emailformat)) {
        proceed = false;
        fmail.style.border = "3px solid red";

    }

    else {

        fmail.style.border = "none";
        proceed = true;
    }
}
function formcontact() {
    if (!fconta.value || !fconta.value.match(contactformat) || isNaN(fconta.value)) {
        proceed = false;
        fconta.style.border = "3px solid red";
    }

    else {
        fconta.style.border = "none";
        proceed = true;

    }
}









//FUNCTION FOR LOADER DURATION
function loadershow(loading, stop) {
    let count = loading;

    function loaderinin() {
        console.log(count);
        if (count === stop) {
            clearInterval(goload)
            loader.style.visibility = "hidden";
            loader.style.position = "absolute";
            formpagetwo.style.position = "relative";
            formpagetwo.style.visibility = "visible";
            formpage.style.position = "absolute";
        }

        else {

            count++

            loader.style.visibility = "visible";
            loader.style.position = "relative";
        }
    }
    let goload = setInterval(loaderinin, 1000)

}













//LOADER AND NEXT FORM INNITIATOR
fsubmit.addEventListener("click", () => {
    // formname();
    // formlname();
    // formemail();
    // formcontact();


    //STATEMENT TO INITIATE OR DEACTIVATE LOADER SEQUENCE
    if (!fname.value || !lname.value || !fmail.value || !fconta.value || proceed == false) {
        formpage.style.visibility = "visible";
        formpage.style.position = "relative";
        loader.style.visibility = "hidden";
        loader.style.position = "absolute";
    }

    else {
        formpage.style.visibility = "hidden";
        formpage.style.position = "relative";



        loadershow(0, 3);

    }



})

function datechange() {
    pricediv.style.visibility = "hidden";
    pricediv.style.position = "absolute";
    hotelnext.style.visibility = "visible";
    hotelnext.style.position = "relative";
    hotelbook.style.visibility = "hidden";
    hotelbook.style.position = "absolute";
    priceoutput.innerHTML = "";
}






function loadsel() {


    depart.style.border = "";
    depart.value = "";
    rooms.style.border = "";
    if (rooms.value === "0") {
        roomprice.style.visibility = "hidden";
        datediv.style.visibility = "hidden";
        datediv.style.position = "absolute";


        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "hidden";
        pricediv.style.position = "absolute";


        depart.value = "";
    }


    if (rooms.value === "2") {
        roomprice.style.visibility = "visible";
        roomprice.style.position = "relative";

        datediv.style.visibility = "hidden";
        datediv.style.position = "absolute";


        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "hidden";
        pricediv.style.position = "absolute";

        depart.value = "";


    }


    else {
        datediv.style.visibility = "visible";
        datediv.style.position = "relative";
        roomprice.style.visibility = "hidden";




        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "hidden";
        pricediv.style.position = "absolute";


        depart.value = "";
    }

}




function loaddate() {
    depart.style.border = "";
    depart.value = "";
    rooms.style.border = "";
    if (duluxprices.value != "0") {
        datediv.style.visibility = "visible";
        datediv.style.position = "relative";


        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "hidden";
        pricediv.style.position = "absolute";



    }


    else {
        datediv.style.visibility = "visible";
        datediv.style.position = "relative";

        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "hidden";
        pricediv.style.position = "absolute";

    }
}


function invisibles(message) {
    priceoutput.innerHTML = message;
    hotelnext.style.visibility = "hidden";
    hotelnext.style.position = "absolute";
    hotelbook.style.visibility = "visible";
    hotelbook.style.position = "relative";

    pricediv.style.visibility = "visible";
    pricediv.style.position = "relative";
    datediv.style.visibility = "visible";
    datediv.style.position = "relative";
}





function loadform() {

    initialstay = +(new Date().getTime());
    console.log(initialstay);
    finalstay = +(new Date(`${depart.value}`).getTime());
    console.log(finalstay);

    daydis = finalstay - initialstay;
    day = Math.floor(daydis / (1000 * 60 * 60 * 24));
    console.log(day);

    if (!depart.value) {
        depart.style.border = "1px solid red";

        pricediv.style.visibility = "visible";
        pricediv.style.position = "relative";
        priceoutput.innerHTML = "Error pls check inputs";

    }

    else if (rooms.value === "0") {
        rooms.style.border = "1px solid red";
        pricediv.style.visibility = "visible";
        pricediv.style.position = "relative";
        priceoutput.innerHTML = "Room type selection invalid";
    }

    else if (day < 0) {
        priceoutput.innerHTML = "Date value invalid";
        depart.style.border = "1px solid red";
        hotelnext.style.visibility = "visible";
        hotelnext.style.position = "relative";
        hotelbook.style.visibility = "hidden";
        hotelbook.style.position = "absolute";
        pricediv.style.visibility = "visible";
        pricediv.style.position = "relative";

    }

    else if (day < 1 && rooms.value === "5000") {

        invisibles(
            `You have now chosen the regular residential suite, 
             since you'll be staying with us for a night your total 
             bill is &#8358;${rooms.value}.`,

        );
    }

    else if (day < 1 && rooms.value === "2") {

        invisibles(
            `You have now chosen the Duluxe residential suite, 
            since you'll be staying with us for a night your total 
            bill is &#8358;${duluxprices.value}.`,

        );
    }

    else {
        depart.style.border = "";
        rooms.style.border = "";




        if (rooms.value === "5000") {

            invisibles(
                `You have now chosen the regular residential suite, 
                 since you'll be staying with us for ${day}days your
                 total bill is &#8358;${rooms.value * day}.`,

            );


        }
        if (rooms.value === "2") {

            invisibles(
                `You have now chosen the Duluxe residential suite, 
                 since you'll be staying with us for ${day}days your total
                 bill is &#8358;${duluxprices.value * day}.`,

            );



        }


    }


}


hotelnext.addEventListener("click", loadform);

hotelbook.addEventListener("click", () => {
    function startcountdown() {
        initialstay = +(new Date().getTime());
        console.log(initialstay);
        finalstay = +(new Date(`${depart.value}`).getTime());
        console.log(finalstay);


        daydis = finalstay - initialstay;
        day = Math.floor(daydis / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");

        hour = Math.floor((daydis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
        min = Math.floor((daydis % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        sec = Math.floor((daydis % (1000 * 60)) / (1000)).toString().padStart(2, "0");

        countdisplay.innerHTML = ` ${day}<span style="color: #460404;">days</span> : 
                                 ${hour}<span style="color: #460404;">hrs</span> : 
                                 ${min}<span style="color: #460404;">m</span> : 
                                 ${sec}<span style="color: #460404;">s</span>`;

        cardtext.innerHTML = `Dear ${fname.value} ${lname.value} we appreciate your patrontage,
                            here at Home-suites we value customer satisfaction, please kindly
                            make your way to the reception if you are in need of futher assistance `;

        section.style.visibility = "hidden";
        section.style.position = "absolute";
        cardcont.style.position = "relative";
        cardcont.style.visibility = "visible";

        formaway.style.display = "none";

        if (daydis == 0) {
            cardtext.innerHTML = `Dear ${fname.value} ${lname.value} we appreciate your patrontage,this is to notify you that you stay with us has come to an end, please kindly
                            make your way to the reception if you are in need of futher assistance `;
        }



    }
    counters = setInterval(startcountdown, 1000);

})






