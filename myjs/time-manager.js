let Task = document.getElementById("items");
let Timestart = document.getElementById("time-start");
let TimeEnd = document.getElementById("time-end");
let myOl = document.getElementById("mytextshow");
const itemAdder = document.getElementById("addItem");
let TaskCounter = document.getElementById("task-count");
let errormess = document.getElementById("error");
let errormess2 = document.getElementById("error2");

let openbtn = document.querySelector("#open");
let closebtn = document.getElementById("close");
let sidebar = document.querySelector(".side-bar");
let sidebarcont = document.querySelectorAll(".side-bar .max .link");




let countdownTimers = [];


let timedistance,
    timecount,
    start_val,
    end_val,
    proceed1,
    proceed2;


//FUNCTIONAL INTERVAL FOR EVALUATING THE NUMBER OF PENDING AND COMPLETED TASK
function updateTaskCount() {
    let completedtask = document.getElementsByClassName("completed");
    completedcount = completedtask.length;

    let task_number = document.getElementsByClassName("flex");
    pending_task_number = task_number.length;

    TaskCounter.textContent = pending_task_number - completedcount;
}
setInterval(updateTaskCount, 500);





//MENU BAR OFFCANVAS TO OPEN AND CLOSE......... 

function open_side_bar() {
    closebtn.style.display = "inline-block";
    sidebar.style.width = "320px";

    sidebar.style.overflow = "hidden auto";
    sidebar.classList.add("side-bar-features");

    sidebarcont.forEach(a => {
        a.style.visibility = "visible";
        a.style.position = "relative";
    })
}

function close_side_bar() {
    closebtn.style.display = "none";
    sidebar.style.width = "0px";
    sidebar.style.overflowY = "hidden";
    sidebar.classList.remove("side-bar-features");


    sidebarcont.forEach(a => {
        a.style.visibility = "hidden";
        a.style.position = "absolute";
    })
}





//TIME INPUT VALIDATIONS FOR START AND END.......
function validateTimeInput(timeinput, messageToDisplay) {
    let startTime = parseInt(timeinput.value);
    if (isNaN(startTime) || startTime > 24) {
        timeinput.style.border = "3px solid red";
        messageToDisplay.style.display = "block";
        return false;
    }
    else {
        timeinput.style.border = "";
        messageToDisplay.style.display = "none";
        return true;
    }
}



// MAIN APP CREATION ENGINE.........
function create() {
    let newli = document.createElement("li");
    let mylicontent = document.createTextNode(Task.value);
    let taskdiv = document.createElement("span");
    taskdiv.className = "task";
    let timediv = document.createElement("span");
    timediv.className = "time-flex";

    let Time_span = document.createElement("span");
    Time_span.className = "timevalue timp-up";
    let enddiv = document.createElement("span");
    enddiv.className = "endvalue";


    //COLLAPSE TIME-RECORDING SYSTEM......
    start_val = Timestart.value + ":00";
    end_val = TimeEnd.value + ":00";

    timedistance = TimeEnd.value - Timestart.value;


    //To Convert the hours to seconds.......
    let countdownValue = timedistance * 60 * 60;
    function updateCountdown() {
        let hours = parseInt(countdownValue / 3600).toString().padStart(2, "0");
        let minutes = parseInt((countdownValue % 3600) / 60).toString().padStart(2, "0");
        let seconds = parseInt(countdownValue % 60).toString().padStart(2, "0");


        collapP3.textContent = `Time left: ${hours}h : ${minutes}m : ${seconds}s`;
        Time_span.textContent = `${hours}h : ${minutes}m : ${seconds}s`;

        if (countdownValue <= 0) {
            clearInterval(newli.countdownTimer);
            collapP3.textContent = "Time's up!";
            Time_span.textContent = "Time's up!";
        } else {
            countdownValue--;
        }
    }
    newli.countdownTimer = setInterval(updateCountdown, 1000);
    countdownTimers.push(newli.countdownTimer);
    newli.dataset.index = countdownTimers.length - 1;

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
    let collapDivli4 = document.createElement("li");
    let collapDivli5 = document.createElement("li");

    //FISRT COLLAPSE TEXT.......
    let collapP = document.createElement("a");
    collapP.className = "dropdown-item";

    //SECOND COLLAPSE TEXT.......
    let collapP2 = document.createElement("a");
    collapP2.className = "dropdown-item";

    //THIRD COLLAPSE TEXT.......
    let collapP3 = document.createElement("a");
    collapP3.className = "dropdown-item  timp-up";

    let collapP4 = document.createElement("a");
    collapP4.className = "dropdown-item get-start-time";

    let collapP5 = document.createElement("a");
    collapP5.className = "dropdown-item get-start-end";

    let textP1 = document.createTextNode(`Your selected time is ${start_val}--${end_val}`)
    let textP2 = document.createTextNode(`You have ${timedistance}Hour to complete this task`)
    let textP3 = document.createTextNode(`${start_val}`);
    let textP4 = document.createTextNode(`${end_val}`);

    collapP.appendChild(textP1);
    collapP2.appendChild(textP2);
    collapP4.appendChild(textP3);
    collapP5.appendChild(textP4);

    //COLLAPSE COMPONENT APPENDING
    collapDiv.appendChild(collapDivbtn);
    collapDiv.appendChild(collapDivUl);

    collapDivUl.appendChild(collapDivli1);
    collapDivUl.appendChild(collapDivli2);
    collapDivUl.appendChild(collapDivli3);
    collapDivUl.appendChild(collapDivli4);
    collapDivUl.appendChild(collapDivli5);

    collapDivli1.appendChild(collapP);
    collapDivli2.appendChild(collapP2);
    collapDivli3.appendChild(collapP3);
    collapDivli3.className = "time-count"

    collapDivli4.appendChild(collapP4);
    collapDivli4.className = "noshow";
    collapDivli5.appendChild(collapP5);
    collapDivli5.className = "noshow";


    //TASK CONTENT DINAMIC CREATIVE THROUGH APPENDING AND CLASSNAMES
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
    //FONT-AWESOME ICONS CREATED DINAMICALLY
    let checklogo = document.createElement("i");
    checklogo.className = "fa-solid fa-circle-check";
    checklogo.title = "Check task done!";
    let delelogo = document.createElement("i");
    delelogo.className = "fa-solid fa-trash";
    delelogo.title="Delete task";
    let editlogo = document.createElement("i");
    editlogo.className = "fa-solid fa-pen-to-square";
    editlogo.title="Edit task";

    deletekey.appendChild(delelogo);
    deletekey.appendChild(checklogo);
    deletekey.appendChild(editlogo);
    newli.appendChild(deletekey);

    Action_btns();

}

function Action_btns() {
    let btnCont = document.getElementsByClassName("allbtns");
    let deletebtn = document.getElementsByClassName("fa-trash");
    let checkedbtn = document.getElementsByClassName("fa-circle-check");
    let editbtn = document.getElementsByClassName("fa-pen-to-square");

    for (let i = 0; i < btnCont.length; i++) {

        deletebtn[i].addEventListener("click", (e) => {
            let theclosestFlex = e.target.closest(".flex");
            deletetask(theclosestFlex)
        })


        checkedbtn[i].addEventListener("click", (e) => {
            let theclosestFlex = e.target.closest(".flex");
            Check_Task_Done(theclosestFlex)
            console.log(e)
        })


        editbtn[i].addEventListener("click", (e) => {
            let theclosestFlex = e.target.closest(".flex");
            Edit_Task(theclosestFlex)
        })

    }
}

function deletetask(theclosestFlex) {
    let taskCountdownTimer = countdownTimers[theclosestFlex.dataset.index];
    clearInterval(taskCountdownTimer);
    theclosestFlex.remove();
}

function Check_Task_Done(theclosestFlex) {
    let thetask = theclosestFlex.querySelector(".flex .task");
    let done = theclosestFlex.getElementsByClassName("timp-up");
    let taskCountdownTimer = countdownTimers[theclosestFlex.dataset.index];
    clearInterval(taskCountdownTimer);

    done[0].textContent = "Completed";
    done[1].textContent = "Task completed";
    thetask.style.textDecoration = "line-through";
    thetask.style.color = "green";
    theclosestFlex.classList.add("completed");

    setTimeout(() => {
        theclosestFlex.remove();
    }, 30000)
}

function Edit_Task(theclosestFlex) {
    let taskCountdownTimer = countdownTimers[theclosestFlex.dataset.index];
    if (Task.value && Timestart.value && TimeEnd.value) {
        Task.focus();
    }
    else {
        let task_content = theclosestFlex.querySelector(".flex .task").textContent;
        let start_content = +(theclosestFlex.querySelector(".get-start-time").textContent.replace(":00", ""));
        let end_content = +(theclosestFlex.querySelector(".get-start-end").textContent.replace(":00", ""));

        document.getElementById("items").value = task_content;
        document.getElementById("time-start").value = start_content;
        document.getElementById("time-end").value = end_content;
        clearInterval(taskCountdownTimer);
        theclosestFlex.remove();
    }
}





const approvedformat = () => {
    let TimeStartValid = validateTimeInput(Timestart, errormess);
    let TimeEndValid = validateTimeInput(TimeEnd, errormess2);
    if (Task.value && Timestart.value && TimeEnd.value && TimeStartValid && TimeEndValid) {
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

openbtn.addEventListener("click", open_side_bar);

closebtn.addEventListener("click", close_side_bar);












