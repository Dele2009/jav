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
    end_val;


let proceed;


//FUNCTIONAL INTERVAL FOR EVALUATING THE NUMBER OF PENDING AND COMPLETED TASK
function updateTaskCount() {
    let completedtask = document.getElementsByClassName("completed");
    let completedcount = completedtask.length;

    let task_number = document.getElementsByClassName("flex");
    let pending_task_number = task_number.length;

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
        timeinput.style.border = "2px solid red";
        messageToDisplay.style.display = "block";
        return false;
    }
    else {
        timeinput.style.border = "none";
        timeinput.style.borderLeft = "1px solid orange";
        messageToDisplay.style.display = "none";
        return true;
    }
}

function timeformat() {
    let startTime = parseInt(Timestart.value);
    let endTime = parseInt(TimeEnd.value);
    if (startTime > endTime) {
        errormess2.style.display = "flex";
        return false;
    }
    else {
        errormess2.style.display = "none";
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


    //DROPDOWN TIME-RECORDING SYSTEM......
    start_val = Timestart.value + ":00";
    end_val = TimeEnd.value + ":00";

    timedistance = TimeEnd.value - Timestart.value;


    //To Convert the hours to seconds.......
    let countdownValue = timedistance * 60 * 60;
    //FUNCTION TO UPDATE THE TIME FOR EACH TASK 
    function updateCountdown() {
        let hours = parseInt(countdownValue / 3600).toString().padStart(2, "0");
        let minutes = parseInt((countdownValue % 3600) / 60).toString().padStart(2, "0");
        let seconds = parseInt(countdownValue % 60).toString().padStart(2, "0");


        DropdownP3.textContent = `Time left: ${hours}h : ${minutes}m : ${seconds}s`;
        Time_span.textContent = `${hours}h : ${minutes}m : ${seconds}s`;

        if (countdownValue <= 0) {
            clearInterval(newli.countdownTimer);
            DropdownP3.textContent = "Time's up!";
            Time_span.textContent = "Time's up!";
        } else {
            countdownValue--;
        }
    }
    newli.countdownTimer = setInterval(updateCountdown, 1000);
    console.log(countdownTimers);
    countdownTimers.push(newli.countdownTimer);
    newli.dataset.index = countdownTimers.length - 1;

    //DIANAMIC BUILD OF BOOTSTARP 

    //DROPDOWN MAIN DIV.....
    let DropdownDiv = document.createElement("div");
    DropdownDiv.className = "dropdown";

    //DROPDOWN BUTTON......
    let DropdownDivbtn = document.createElement("button");
    DropdownDivbtn.className = "btn btn-secondary dropdown-toggle";
    DropdownDivbtn.type = "button";
    DropdownDivbtn.dataset.bsToggle = "dropdown";

    //DROPDOWN_BTN LOGO......
    let DropdownDivbtnlogo = document.createElement("i");
    DropdownDivbtnlogo.className = "bi bi-hourglass-split";
    DropdownDivbtn.appendChild(DropdownDivbtnlogo);

    //DROPDOWN UL.......
    let DropdownDivUl = document.createElement("ul");
    DropdownDivUl.className = "dropdown-menu";

    //DROPDOWN LI.......
    let DropdownDivli1 = document.createElement("li");
    let DropdownDivli2 = document.createElement("li");
    let DropdownDivli3 = document.createElement("li");
    let DropdownDivli4 = document.createElement("li");
    let DropdownDivli5 = document.createElement("li");

    //FISRT DROPDOWN TEXT.......
    let DropdownP = document.createElement("a");
    DropdownP.className = "dropdown-item";

    //SECOND DROPDOWN TEXT.......
    let DropdownP2 = document.createElement("a");
    DropdownP2.className = "dropdown-item";

    //THIRD DROPDOWN TEXT.......
    let DropdownP3 = document.createElement("a");
    DropdownP3.className = "dropdown-item  timp-up";

    //FOURTH DROPDOWN TEXT BUT HIDDEN.......
    let DropdownP4 = document.createElement("a");
    DropdownP4.className = "dropdown-item get-start-time";

    //FIFTH DROPDOWN TEXT BUT HIDDEN.......
    let DropdownP5 = document.createElement("a");
    DropdownP5.className = "dropdown-item get-start-end";

    let textP1 = document.createTextNode(`Your selected time is ${start_val}--${end_val}`)
    let textP2 = document.createTextNode(`You have ${timedistance}Hour to complete this task`)
    let textP3 = document.createTextNode(`${start_val}`);
    let textP4 = document.createTextNode(`${end_val}`);

    DropdownP.appendChild(textP1);
    DropdownP2.appendChild(textP2);
    DropdownP4.appendChild(textP3);
    DropdownP5.appendChild(textP4);

    //DROPDOWN COMPONENT APPENDING
    DropdownDiv.appendChild(DropdownDivbtn);
    DropdownDiv.appendChild(DropdownDivUl);

    DropdownDivUl.appendChild(DropdownDivli1);
    DropdownDivUl.appendChild(DropdownDivli2);
    DropdownDivUl.appendChild(DropdownDivli3);
    DropdownDivUl.appendChild(DropdownDivli4);
    DropdownDivUl.appendChild(DropdownDivli5);

    DropdownDivli1.appendChild(DropdownP);
    DropdownDivli2.appendChild(DropdownP2);
    DropdownDivli3.appendChild(DropdownP3);
    DropdownDivli3.className = "time-count"

    DropdownDivli4.appendChild(DropdownP4);
    DropdownDivli4.className = "noshow";
    DropdownDivli5.appendChild(DropdownP5);
    DropdownDivli5.className = "noshow";


    //TASK CONTENT DINAMIC CREATION, APPENDING AND CLASSNAMES
    taskdiv.appendChild(mylicontent);
    timediv.appendChild(Time_span);
    timediv.appendChild(DropdownDiv);



    newli.appendChild(taskdiv);
    newli.appendChild(timediv);
    newli.className = "flex";

    myOl.insertBefore(newli, null);
    document.getElementById("items").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";


    //ICON CREATION SYSTEM
    let actionBtnDiv = document.createElement("span");
    actionBtnDiv.className = "allbtns";

    //FONT-AWESOME ICONS CREATED DINAMICALLY
    let checklogo = document.createElement("i");
    checklogo.className = "fa-solid fa-circle-check";
    checklogo.title = "Check task done!";
    let delelogo = document.createElement("i");
    delelogo.className = "fa-solid fa-trash";
    delelogo.title = "Delete task";
    let editlogo = document.createElement("i");
    editlogo.className = "fa-solid fa-pen-to-square";
    editlogo.title = "Edit task";

    actionBtnDiv.appendChild(checklogo);
    actionBtnDiv.appendChild(delelogo);
    actionBtnDiv.appendChild(editlogo);
    newli.appendChild(actionBtnDiv);

    //FUNCTION INVOCATION TO CALL THE ACTION-BUTTONS -ON- CREATION
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
            deletetask(theclosestFlex);
        })


        checkedbtn[i].addEventListener("click", (e) => {
            let theclosestFlex = e.target.closest(".flex");
            Check_Task_Done(theclosestFlex);
        })


        editbtn[i].addEventListener("click", (e) => {
            let theclosestFlex = e.target.closest(".flex");
            Edit_Task(theclosestFlex);
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





function approvedformat() {
    let TimeStartValid = validateTimeInput(Timestart, errormess);
    let TimeEndValid = validateTimeInput(TimeEnd, errormess);
    let timeformatvalid = timeformat()

    if (Task.value && Timestart.value && TimeEnd.value && TimeStartValid && TimeEndValid && timeformatvalid) {
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












