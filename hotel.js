let fname = document.getElementById("form-fname");
let lname = document.getElementById("form-lname");
let fmail = document.getElementById("form-email");
let fconta = document.getElementById("form-cont");
let fsubmit = document.getElementById("form-info-sub");
let emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let contactformat = /^(?:(\+234)|(0))([789][01])(\d{8})$/;
let formpage = document.getElementById("form1");
let formpagetwo = document.getElementById("form2");
let loader = document.getElementById("loadman");


let depart = document.getElementById("datedepart");
let rooms = document.getElementById("Rooms");
let roomprice=document.getElementById("price-room-div");
let datediv=document.getElementById("dates-ar");
let duluxprices=document.getElementById("price-room");
let priceoutput = document.getElementById("priceout");
let pricediv = document.getElementById("price-sys");
let hotelnext = document.getElementById("hotelnext");
let hotelbook = document.getElementById("hotelbook");
let countdisplay=document.getElementById("countdown");
let section=document.getElementById("section-mid");
let formaway=document.querySelector(".forms");
let cardtext=document.querySelector(".card-text")
let cardcont=document.querySelector(".card-container")




let proceed, daydis, day, hour, min, sec,initialstay,finalstay,counters;

function formname() {
    if (!fname.value || fname.value.length > 15) {
        proceed = false;
        fname.style.border = "1px solid red";
    }
    else {

        fname.style.border = "none";
    }

}
function formlname() {
    if (!lname.value || lname.value.length > 15) {
        proceed = false;
        lname.style.border = "1px solid red";
    }
    else {

        lname.style.border = "none";
    }
}
function formemail() {
    if (!fmail.value || !fmail.value.match(emailformat)) {
        proceed = false;
        fmail.style.border = "1px solid red";

    } else {

        fmail.style.border = "none";
    }
}
function formcontact() {
    if (!fconta.value || !fconta.value.match(contactformat) || isNaN(fconta.value)) {
        proceed = false;
        fconta.style.border = "1px solid red";
    } else {
        fconta.style.border = "none";

    }
}







//LOADER AND NEXT FORM INNITIATOR
fsubmit.addEventListener("click", () => {


    //STATEMENT TO INITIATE OR DEACTIVATE LOADER SEQUENCE
    if (!fname.value || !lname.value || !fmail.value || !fconta.value) {
        formpage.style.visibility = "visible";
        formpage.style.position = "relative";
        loader.style.visibility = "hidden";
        loader.style.position = "absolute";
    }
    else {
        formpage.style.visibility = "hidden";
        formpage.style.position = "relative";

        //FUNCTION FOR LOADER DURATION
        function loadershow(loading, stop) {
            // let count = loading;

            function loaderinin() {
                console.log(loading);
                if (loading == stop) {
                    clearInterval(goload)
                    loader.style.visibility = "hidden";
                    loader.style.position = "absolute";
                    formpagetwo.style.position = "relative";
                    formpagetwo.style.visibility = "visible";
                    formpage.style.position = "absolute";
                }
                else {

                    loading++

                    loader.style.visibility = "visible";
                    loader.style.position = "relative";
                }
            }
            let goload = setInterval(loaderinin, 1000)

        }
        loadershow(0, 3)

    }



})
function loadsel(){
    if(rooms.value==="0"){
        roomprice.style.visibility="hidden";
        datediv.style.visibility="hidden";
        datediv.style.position="absolute";


        hotelnext.style.visibility="visible";
        hotelnext.style.position="relative";
        hotelbook.style.visibility="hidden";
        hotelbook.style.position="absolute";
        pricediv.style.visibility="hidden";
        pricediv.style.position="absolute";

        
        depart.value="";
    }
    if(rooms.value==="2"){
        roomprice.style.visibility="visible";
        roomprice.style.position="relative";

        datediv.style.visibility="hidden";
        datediv.style.position="absolute";


        hotelnext.style.visibility="visible";
        hotelnext.style.position="relative";
        hotelbook.style.visibility="hidden";
        hotelbook.style.position="absolute";
        pricediv.style.visibility="hidden";
        pricediv.style.position="absolute";
        
        depart.value="";
        

    }
    else{
        datediv.style.visibility="visible";
        datediv.style.position="relative";
        roomprice.style.visibility="hidden";

        // hotelbook.style.width="80%";
        // hotelnext.style.width="80%";


        hotelnext.style.visibility="visible";
        hotelnext.style.position="relative";
        hotelbook.style.visibility="hidden";
        hotelbook.style.position="absolute";
        pricediv.style.visibility="hidden";
        pricediv.style.position="absolute";

        
        depart.value="";
    }

}
function loaddate(){
    if(duluxprices.value!="0"){
        datediv.style.visibility="visible";
        datediv.style.position="relative";
        // hotelbook.style.width="80%";
        // hotelnext.style.width="80%";

        hotelnext.style.visibility="visible";
        hotelnext.style.position="relative";
        hotelbook.style.visibility="hidden";
        hotelbook.style.position="absolute";
        pricediv.style.visibility="hidden";
        pricediv.style.position="absolute";
        
        

    }
    else{
        datediv.style.visibility="visible";
        datediv.style.position="relative";

        hotelnext.style.visibility="visible";
        hotelnext.style.position="relative";
        hotelbook.style.visibility="hidden";
        hotelbook.style.position="absolute";
        pricediv.style.visibility="hidden";
        pricediv.style.position="absolute";
       
    }
}

function datechange(){
    pricediv.style.visibility="hidden";
    pricediv.style.position="absolute";
    hotelnext.style.visibility="visible";
    hotelnext.style.position="relative";
    hotelbook.style.visibility="hidden";
    hotelbook.style.position="absolute";
    priceoutput.innerHTML="";
}

 function loadform()  {
   
    

    

    

    if (!depart.value || rooms.value === "0") {
        arrival.style.border = "1px solid red";
        depart.style.border = "1px solid red";
        rooms.style.border = "1px solid red";
        pricediv.style.visibility="visible";
        pricediv.style.position="relative";
        priceoutput.innerHTML="Error pls check inputs";

    }
   



   
    else {
       

        initialstay = +(new Date().getTime());
        console.log(initialstay);
        finalstay = +(new Date(`${depart.value}`).getTime());
        console.log(finalstay);

        daydis = finalstay - initialstay;
        day = Math.floor(daydis / (1000 * 60 * 60 * 24));
        console.log(day);

        if(rooms.value=="5000"){
            priceoutput.innerHTML=`You have now chosen the regular residential suite since you'll be staying with us for ${day}days your total bill is ${rooms.value*day}`;
            hotelnext.style.visibility="hidden";
            hotelnext.style.position="absolute";
            hotelbook.style.visibility="visible";
            hotelbook.style.position="relative";
            
            pricediv.style.visibility="visible";
            pricediv.style.position="relative";
            datediv.style.visibility="visible";
            datediv.style.position="relative";
            

        }
        if(rooms.value=="2"){
            priceoutput.innerHTML=`You have now chosen the Duluxe residential suite, since you'll be staying with us for ${day}days your total bill is ${duluxprices.value*day}`
            hotelnext.style.visibility="hidden";
            hotelnext.style.position="absolute";
            hotelbook.style.visibility="visible";
            hotelbook.style.position="relative";
            pricediv.style.visibility="visible";
            pricediv.style.position="relative";
            datediv.style.visibility="visible";
            datediv.style.position="relative";
            // hotelbook.style.width="100%";
                                    

        }

       
    }
   

 }

 
 hotelnext.addEventListener("click",loadform)

hotelbook.addEventListener("click",()=>{
    function starcount(){
        initialstay = +(new Date().getTime());
        console.log(initialstay);
        finalstay = +(new Date(`${depart.value}`).getTime());
        console.log(finalstay);


        daydis = finalstay - initialstay;
        day = Math.floor(daydis / (1000 * 60 * 60 * 24)).toString().padStart(2,"0");
        
        hour=Math.floor((daydis%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)).toString().padStart(2,"0");
        min=Math.floor((daydis%(1000 * 60 * 60 ))/(1000 * 60)).toString().padStart(2,"0");
        sec=Math.floor((daydis%(1000 * 60))/(1000)).toString().padStart(2,"0");
        // console.log(day);
        // console.log(hour);
        // console.log(min);
        // console.log(sec);
        countdisplay.innerHTML=` ${day}<span style="color: #460404;">days</span> : 
                                 ${hour}<span style="color: #460404;">hrs</span> : 
                                 ${min}<span style="color: #460404;">m</span> : 
                                 ${sec}<span style="color: #460404;">s</span>`
        
        cardtext.innerHTML=`Dear ${fname.value} ${lname.value} we appreciate your patrontage,
                            here at Home-suites we value customer satisfaction, please kindly
                            make your way to the reception if you are in need of futher assistance `;

        section.style.visibility="hidden";
        section.style.position="absolute"; 
        cardcont.style.position="relative";
        cardcont.style.visibility="visible";
          
        formaway.style.display="none";
        
                            
    
    }
    counters=setInterval(starcount,1000)

})






