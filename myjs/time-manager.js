let Task = document.getElementById("items");
let Timestart = document.getElementById("time-start");
let TimeEnd = document.getElementById("time-end");
let myOl = document.getElementById("mytextshow");
const itemAdder = document.getElementById("addItem");
let task_to_Do = document.getElementById("task-count");
let errormess = document.getElementById("error");
let errormess2 = document.getElementById("error2");

let openbtn = document.querySelector("#open");
let closebtn = document.getElementById("close");
let sidebar = document.querySelector(".side-bar");
let sidebarcont = document.querySelectorAll(".side-bar .max .link");

let timedistance,
    timecount,
    
    time,
    proceed1,
    proceed2;


//MENU BAR OFFCANVAS TO OPEN AND CLOSE.........  

openbtn.addEventListener("click", () => {
    closebtn.style.display = "inline-block";
    sidebar.style.width = "320px";

    sidebar.style.overflow = "hidden auto";
    sidebar.classList.add("side-bar-features");

    sidebarcont.forEach(a => {
        a.style.visibility = "visible";
        a.style.position = "relative";
    })
})

closebtn.addEventListener("click", () => {
    closebtn.style.display = "none";
    sidebar.style.width = "0px";
    sidebar.style.overflowY = "hidden";
    sidebar.classList.remove("side-bar-features");


    sidebarcont.forEach(a => {
        a.style.visibility = "hidden";
        a.style.position = "absolute";
    })
})



//TIME INPUT VALIDATIONS FOR START AND END.......
function timestart() {
    let startTime = parseInt(Timestart.value);
    if (isNaN(startTime) || startTime > 24) {
        Timestart.style.border = "3px solid red";
        proceed1 = false;
        errormess.style.display = "block";
    }
    else {
        Timestart.style.border = "";
        proceed1 = true;
        errormess.style.display = "none";
    }
}

function timeend() {
    let endTime = parseInt(TimeEnd.value);
    if (isNaN(endTime) || endTime > 24) {

        TimeEnd.style.border = "3px solid red";
        proceed2 = false;
        errormess2.style.display = "block";
    }
    else {
        TimeEnd.style.border = "";
        proceed2 = true;
        errormess2.style.display = "none";
    }
}




// MAIN APP CREATION ENGINE.........
function create() {
    let newli = document.createElement("li");
    let mylicontent = document.createTextNode(Task.value);
    let taskdiv = document.createElement("span");
    taskdiv.className = "task"
    let timediv = document.createElement("span");
    timediv.className = "time-flex"





    let Time_span = document.createElement("span");
    Time_span.className = "timevalue";
    let enddiv = document.createElement("span");
    enddiv.className = "endvalue"


    //COLLAPSE TIME-RECORDING CREATION SYSTEM......

    let start_val = Timestart.value + ":00";
    let end_val = TimeEnd.value + ":00";

    timedistance = TimeEnd.value - Timestart.value;






    let countdownValue = timedistance * 60 * 60; //To Convert the hours to seconds.......
    function updateCountdown() {
        let hours = parseInt(countdownValue / 3600).toString().padStart(2, "0");
        let minutes = parseInt((countdownValue % 3600) / 60).toString().padStart(2, "0");
        let seconds = parseInt(countdownValue % 60).toString().padStart(2, "0");

        
        collapP3.textContent = `Time left: ${hours}h ${minutes}m ${seconds}s`;
        Time_span.textContent = `${hours}h ${minutes}m ${seconds}s`;

        if (countdownValue <= 0) {
            clearInterval(countdownTimer);
            collapP3.textContent = "Time's up!";
            Time_span.textContent = "Time's up!";
        } else {
            countdownValue--;
        }
    }

     let countdownTimer = setInterval(updateCountdown, 1000);




    //COLLAPSE MAIN DIV.....
    let collapDiv = document.createElement("div");
    collapDiv.className = "dropdown";

    //COLLAPSE BUTTON......
    let collapDivbtn = document.createElement("button");
    collapDivbtn.className = "btn btn-secondary dropdown-toggle";
    collapDivbtn.type = "button";
    collapDivbtn.setAttribute("data-bs-toggle", "dropdown");

    //COLLAPSE_BTN LOGO......
    let collapDivbtnlogo = document.createElement("i");
    collapDivbtnlogo.className = "bi bi-hourglass-split";
    collapDivbtn.appendChild(collapDivbtnlogo);

    //COLLAPSE UL.......
    let collapDivUl = document.createElement("ul");
    collapDivUl.className = "dropdown-menu";

    //COLLAPSE LI.......
    let collapDivli1 = document.createElement("li");
    let collapDivli2 = document.createElement("li");
    let collapDivli3 = document.createElement("li");

    //FISRT COLLAPSE TEXT.......
    let collapP = document.createElement("a");
    collapP.className = "dropdown-item";

    //SECOND COLLAPSE TEXT.......
    let collapP2 = document.createElement("a");
    collapP2.className = "dropdown-item";

    //THIRD COLLAPSE TEXT.......
    let collapP3 = document.createElement("a");
    collapP3.className = "dropdown-item time-count";

    let textP1 = document.createTextNode(`Your selected time is ${start_val}--${end_val}`)
    let textP2 = document.createTextNode(`You have ${timedistance}Hour to complete this task`)

    collapP.appendChild(textP1);
    collapP2.appendChild(textP2);






    //COLLAPSE COMPONENT APPENDING
    collapDiv.appendChild(collapDivbtn);
    collapDiv.appendChild(collapDivUl);

    collapDivUl.appendChild(collapDivli1);
    collapDivUl.appendChild(collapDivli2);
    collapDivUl.appendChild(collapDivli3);
    collapDivli1.appendChild(collapP);
    collapDivli2.appendChild(collapP2);
    collapDivli3.appendChild(collapP3);
    collapDivli3.className = "time-count";






   











    taskdiv.appendChild(mylicontent);
    timediv.appendChild(Time_span);
    timediv.appendChild(collapDiv);



    newli.appendChild(taskdiv);

    newli.appendChild(timediv);
    newli.className = "flex";

    myOl.insertBefore(newli, null);
    document.getElementById("items").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";


    //ICON CREATION SYSTEM
    let deletekey = document.createElement("span");

    deletekey.className = "allbtns";
    let delelogo = document.createElement("i");
    delelogo.className = "fa-solid fa-trash";
    let checklogo = document.createElement("i");
    checklogo.className = "fa-solid fa-circle-check";
    let editlogo = document.createElement("i");
    editlogo.className = "fa-solid fa-pen-to-square";

    deletekey.appendChild(delelogo);
    deletekey.appendChild(checklogo);
    deletekey.appendChild(editlogo);
    newli.appendChild(deletekey);
    let btnCont = document.getElementsByClassName("allbtns");
   
    
    let deletebtn = document.getElementsByClassName("fa-trash");
   

    let checkedbtn = document.getElementsByClassName("fa-circle-check");
    

    let editbtn = document.getElementsByClassName("fa-pen-to-square");




    pending_task_number = btnCont.length;
    task_to_Do.textContent = pending_task_number;
    let i;

    for (i = 0; i < btnCont.length; i++) {
        
        deletebtn[i].onclick = function () {
            let theclosestFlex = this.closest(".flex");
           


            if (!theclosestFlex.classList.contains("completed")) {
                theclosestFlex.remove();
                task_to_Do.textContent = --pending_task_number;
            }
            else {
                theclosestFlex.remove();
            }




        }


        checkedbtn[i].onclick = function () {
            let theclosestFlex = this.closest(".flex");
            let thetask = theclosestFlex.querySelector(".flex .task");
            if (!theclosestFlex.classList.contains("completed")) {
                thetask.style.textDecoration = "line-through";
                thetask.style.color = "green";
                theclosestFlex.classList.add("completed");
                task_to_Do.textContent = --pending_task_number;
                
                theclosestFlex.querySelector(".flex .time-count").remove()
                theclosestFlex.querySelector(".flex .timevalue").remove()
               
            }
        }


        editbtn[i].onclick = function () {
            if (Task.value) {
                Task.focus();
            }
            else {
                let theclosestFlex = this.closest(".flex");
                let task_content = theclosestFlex.querySelector(".flex .task").textContent;
                let start_content = +(start_val.replace(":00", ""));
                let end_content = +(end_val.replace(":00", ""));
                document.getElementById("items").value = task_content;
                document.getElementById("time-start").value = start_content;
                document.getElementById("time-end").value = end_content;
                theclosestFlex.remove();
                theclosestFlex.querySelector(".flex .time-count").remove()
                theclosestFlex.querySelector(".flex .timevalue").remove()
                if (!theclosestFlex.classList.contains("completed")) {


                    task_to_Do.textContent = --pending_task_number;
                }





            }

        }

    }





}

const approvedformat = () => {
    timeend();
    timestart();
    if (Task.value && Timestart.value && TimeEnd.value && proceed1 == true && proceed2 == true) {
        create();
    }
    else {
        if (!Task.value) {
            Task.focus();
        }
        else if (!Timestart.value) {
            Timestart.focus();
        }
        else if (!TimeEnd.value) {
            TimeEnd.focus();
        }

    }
}

itemAdder.addEventListener("click", () => {
    approvedformat();
})




document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        approvedformat();
       
    }
})

