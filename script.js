function validation(){
    var kontak = document.getElementById('contact')
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var msg = document.getElementById('text-message');

    if (Name.value === "" || Email === "" || msg.value === ""){
        alert("Please fill all boxes");
        return false;
    } else{
        // alert("Your message succesfully send")
        sendToWhatsApp();
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            msg.value = '';
        },2000);
        return true;
    }
}

function sendToWhatsApp(){
    var phoneNumber = '+6282119394429';

    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let msg = document.getElementById('text-message').value;

    let url = "https://wa.me/" + phoneNumber + "?text=" 
    + "Name : " + Name + "%0a"
    + "Email : " + Email + "%0a %0a"
    +  msg 

    window.open(url, '_blank').focus();
}


let displayNav = false
function openNavBar(){
    var navBar = document.querySelector(".second-ul");
    if (displayNav == false){
        navBar.classList.add("ul-active");
        displayNav = true;
        return true;
    } else if (displayNav == true){
        navBar.classList.remove("ul-active");
        displayNav = false;
        return false;

    }
}

let displaySochat = false;
let displayTimeTable = false;
let displaydel = false;
let displayolis = false;
function setSochat(){
    var sochat = document.querySelector(".popup-sochat");
    if (displaySochat === false){
        sochat.classList.add("popup-active");
        displaySochat = true;
        setTimeout(() => {
            displaySochat = false;
            sochat.classList.remove("popup-active");
        },5000);
        return true;
    } else {
        displaySochat = false;
        return false;
    }
}

function setTimetable(){
    var timetable = document.querySelector(".popup-timeTable");
    if (displayTimeTable === false){
        timetable.classList.add("popup-active");
        displayTimeTable = true;
        setTimeout(() => {
            displayTimeTable = false;
            timetable.classList.remove("popup-active");
        },5000);
        return true;
    } else {
        displayTimeTable = false;
        return false;
    }
}

function setDel(){
    var del = document.querySelector(".popup-del");
    if (displaydel === false){
        del.classList.add("popup-active");
        displaydel = true;
        setTimeout(() => {
            displaydel = false;
            del.classList.remove("popup-active");
        },5000);
        return true
    } else {
        displaydel = false;
        return false;
    }
}

function setOlis(){
    var olis = document.querySelector(".popup-olis");
    if (displayolis === false){
        olis.classList.add("popup-active");
        displayolis = true;
        setTimeout(() => {
            displayolis = false;
            olis.classList.remove("popup-active");
        },5000);
        return true;
    } else {
        displayolis = false;
        return false;
    }
}

function reveal() {
    var skills = document.querySelectorAll(".skill-container");
    var languange = document.querySelectorAll(".languange-container"); 
    
    skills.forEach(function (skill) {
        var windowHeight = window.innerHeight;
        console.log (windowHeight);
        var elementTop = skill.getBoundingClientRect().top;
        console.log (elementTop);
        var elementVisible = document.getElementById("home").getBoundingClientRect().bottom;
        console.log(elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            skill.classList.add("skill-active");
        } else {
            skill.classList.remove("skill-active"); 
        }
    });

    languange.forEach(function (lang) {
        var windowHeight = window.innerHeight;
        console.log (windowHeight);
        var elementTop = lang.getBoundingClientRect().top;
        console.log (elementTop);
        var elementVisible = document.getElementById("home").getBoundingClientRect().bottom;
        console.log(elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            lang.classList.add("languange-active");
        } else {
            lang.classList.remove("languange-active"); 
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
