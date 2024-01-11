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
let arrival=document.getElementById("datearrive");
let depart=document.getElementById("datedepart");
let rooms=document.getElementById("Rooms");
let priceoutput=document.getElementById("priceout");
let hotelnext=document.getElementById("hotelnext")
let initialstay, finalstay;


let proceed;

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
        
        //FUNCTION TO 
        function loadershow(loading, stop) {
            // let count = loading;
          
            function loaderinin() {
                console.log(loading);
                if (loading == stop) {
                    clearInterval(goload)
                    loader.style.visibility = "hidden";
                    loader.style.position = "absolute";
                    formpagetwo.style.position="relative";
                    formpagetwo.style.visibility="visible";
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
        loadershow(0,3)
       
        // loader.style.visibility = "visible";
        // loader.style.position = "relative";
    }



})

hotelnext.addEventListener("click",()=>{
    //function onchan(){
        initialstay=new Date(`${arrival.value}`).getTime()
        console.log(initialstay)
       
    //}
    //function oncha(){
       
        finalstay=new Date(`${depart.value}`).getTime()
        console.log(finalstay)
    //}
    // onchan()
    // oncha()
    let daydis=finalstay-initialstay;
    let day=(daydis/(1000*60*60*24))
    console.log(day)
})




