// let dele = 'welcome this is a this carefully read the infomation on for better understanding';
// alert(dele);


function verify() {

    let greeting = prompt('hello there welcome, may i know your name');
    let agedata = prompt(`wow ${greeting} you have a nice name pls tell me your age to continue `);
    let job = prompt(`Please Tell your profession e.g(Web developer, Game developer, Data Analyst, e.t.c .......)`)
    document.getElementById('may').innerHTML = `Welcome ${greeting} since you are a ${job} this page will give deatiled infomation about what you need to know`;

}
function dark() {
    document.getElementById('links').href = 'java dark.css'
}
function light() {
    document.getElementById('links').href = 'java light.css'
}
