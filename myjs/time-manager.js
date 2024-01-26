let Task = document.getElementById("items");
let Timestart = document.getElementById("time-start");
let TimeEnd = document.getElementById("time-end");
let myOl = document.getElementById("mytextshow");
const itemAdder = document.getElementById("addItem");
let task_to_Do = document.getElementById("task-count");

let timedistance,
    innitiatior;


function create() {
    let newli = document.createElement("li");
    let mylicontent = document.createTextNode(Task.value);
    let taskdiv = document.createElement("span");
    taskdiv.className = "task"
    let timediv = document.createElement("span");
    let sepator = document.createTextNode("--")



    let mystarttime = document.createTextNode(Timestart.value + ":00");
    let myendtime = document.createTextNode(TimeEnd.value + ":00");
    let startdiv = document.createElement("span");
    startdiv.className = "startvalue"
    let enddiv = document.createElement("span");
    enddiv.className = "endvalue"

    //COLLAPSE TIME-RECORDING CREATION SYSTEM

    let start_val = Timestart.value + ":00";
    let end_val = TimeEnd.value + ":00";

    timedistance = TimeEnd.value - Timestart.value;

    //COLLAPSE MAIN DIV
    let collapDiv = document.createElement("div");
    collapDiv.className = "dropdown";

    //COLLAPSE BUTTON
    let collapDivbtn = document.createElement("button");
    collapDivbtn.className = "btn btn-secondary dropdown-toggle";
    collapDivbtn.type = "button";
    collapDivbtn.setAttribute("data-bs-toggle", "dropdown");
    //COLLAPSE_BTN LOGO
    let collapDivbtnlogo = document.createElement("i");
    collapDivbtnlogo.className="bi bi-hourglass-split";
    collapDivbtn.appendChild(collapDivbtnlogo);
    //COLLAPSE UL
    let collapDivUl = document.createElement("ul");
    collapDivUl.className = "dropdown-menu"
    //COLLAPSE LI
    let collapDivli1 = document.createElement("li");
    let collapDivli2 = document.createElement("li");

    //FISRT p
    let collapP = document.createElement("a");
    collapP.className = "dropdown-item";
    //SECOND P
    let collapP2 = document.createElement("a");
    collapP2.className = "dropdown-item";

    let textP1 = document.createTextNode(`Your selected time is ${start_val}--${end_val}`)
    let textP2 = document.createTextNode(`You have ${timedistance}Hour to complete this task`)
    collapP.appendChild(textP1);
    collapP2.appendChild(textP2);





    //COLLAPSE COMPONENT APPENDING
    collapDiv.appendChild(collapDivbtn);
    collapDiv.appendChild(collapDivUl);

    collapDivUl.appendChild(collapDivli1);
    collapDivUl.appendChild(collapDivli2);
    collapDivli1.appendChild(collapP);
    collapDivli2.appendChild(collapP2);






    console.log(collapDiv);







    startdiv.appendChild(mystarttime);
    enddiv.appendChild(myendtime);



    taskdiv.appendChild(mylicontent);
    timediv.appendChild(startdiv);
    timediv.appendChild(sepator);
    timediv.appendChild(enddiv);
    timediv.appendChild(collapDiv);

    timediv.classList.add("time-flex");


    newli.appendChild(taskdiv);

    newli.appendChild(timediv);
    newli.classList.add("flex");

    myOl.insertBefore(newli, myOl.childNodes[1]);
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
    console.log(newli);
    console.log(btnCont);
    let deletebtn = document.getElementsByClassName("fa-trash");
    console.log(deletebtn)

    let checkedbtn = document.getElementsByClassName("fa-circle-check");
    console.log(checkedbtn)

    let editbtn = document.getElementsByClassName("fa-pen-to-square");




    task_number = btnCont.length;
    task_to_Do.textContent = task_number;
    let i;
    for (i = 0; i < btnCont.length; i++) {

        console.log(i)
        deletebtn[i].onclick = function () {
            let theclosestFlex = this.closest(".flex");

            if (!theclosestFlex.classList.contains("completed")) {
                theclosestFlex.remove();
                task_to_Do.textContent = --task_number;
            }
            else {
                theclosestFlex.remove();
            }




        }

        checkedbtn[i].onclick = function () {
            let theclosestFlex = this.closest(".flex");
            if (!theclosestFlex.classList.contains("completed")) {
                theclosestFlex.style.textDecoration = "line-through";
                theclosestFlex.style.color = "green";
                theclosestFlex.classList.add("completed");
                task_to_Do.textContent = --task_number;
            }
        }

        editbtn[i].onclick = function () {
            if (Task.value) {
                Task.focus();
            }
            else {
                let theclosestFlex = this.closest(".flex")
                if (!theclosestFlex.classList.contains("completed")) {
                    
                    let task_content = theclosestFlex.querySelector(".flex .task").textContent;
                    let start_content = +(theclosestFlex.querySelector(".flex .startvalue").textContent.replace(":00", ""));
                    let end_content = +(theclosestFlex.querySelector(".flex .endvalue").textContent.replace(":00", ""));
                    document.getElementById("items").value = task_content;
                    document.getElementById("time-start").value = start_content;
                    document.getElementById("time-end").value = end_content;
                    theclosestFlex.remove();
                    task_to_Do.textContent = --task_number;
                }
                else{
                    // let theclosestFlex = this.closest(".flex")
                    let task_content = theclosestFlex.querySelector(".flex .task").textContent;
                    let start_content = +(theclosestFlex.querySelector(".flex .startvalue").textContent.replace(":00", ""));
                    let end_content = +(theclosestFlex.querySelector(".flex .endvalue").textContent.replace(":00", ""));
                    document.getElementById("items").value = task_content;
                    document.getElementById("time-start").value = start_content;
                    document.getElementById("time-end").value = end_content;
                    theclosestFlex.remove();
                }
                // if(task_to_Do.textContent<0){

                // }

                

            }

        }
    }





}

const approvedformat = () => {
    if (Task.value && Timestart.value && TimeEnd.value) {
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
        console.log(e.target)
    }
})



const myname = "tunji";
const newname = [...myname];
console.log(newname);

const mystate = {
    oyo: "ibadan",
    anambra: "eneugu"
}
const newstate = {
    kaduna: "zaria",
    ...mystate
}
console.log(newstate)