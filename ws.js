const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');
const main = document.querySelector('.main');



////////////////////KEYS

// variable for currently focused element
let focusNow = document.getElementById(nav_menu);

document.addEventListener('focusin', function() {
  focusNow = document.activeElement;
  console.log(focusNow);
// console log focus elements
}, true);


// Enter key to activate focused element like mouseclick
window.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    focusNow.click();
  }
});

//Esc Key to exit menus
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    sidebar2.classList.remove('side_bigger');
    sidebar1.classList.remove('side_bigger');
    main.classList.remove('main_smaller');
    setTimeout(displayAdd, 500, sidebar1);
    setTimeout(displayAdd, 500, sidebar2);
  }
});


/////////////////Navigation and Accessibility Menus

// add and remove display none class to navigation and access menus to make sure tab navigation isn't overwhlemed 
function displayRemove(a) {
  a.classList.remove('display_none');
};

function displayAdd(a) {
  a.classList.add('display_none');
};

//access menu toggle
document.querySelector('#access_menu').onclick = function () {
  if (sidebar1.classList.contains('side_bigger')) { //if other sidebar is open close it
    sidebar1.classList.toggle('side_bigger');
    setTimeout(displayAdd, 500, sidebar1);
  } else {
    main.classList.toggle('main_smaller');//make main section smaller only if neither side is already open
  }
  if (sidebar2.classList.contains('display_none')) {
    sidebar2.classList.remove('display_none');
    } else {
      setTimeout(displayAdd, 500, sidebar2);
    }
    sidebar2.classList.toggle('side_bigger');
    setTimeout(displayAdd, 500, sidebar1);
};

// navigation menu toggle
document.querySelector('#nav_menu').onclick = function () {
  if (sidebar2.classList.contains('side_bigger')) { //if other sidebar is open close it  
    sidebar2.classList.toggle('side_bigger');
    setTimeout(displayAdd, 500, sidebar2);
  } else {
    main.classList.toggle('main_smaller'); //make main section smaller only if neither side is already open
  }
  if (sidebar1.classList.contains('display_none')) {
  sidebar1.classList.remove('display_none');
  } else {
    setTimeout(displayAdd, 500, sidebar1);
  }
  sidebar1.classList.toggle('side_bigger');
  setTimeout(displayAdd, 500, sidebar2);
};


//access menu - Font Size
const oneX = document.querySelector('#oneX');
const oneandhalfX = document.querySelector('#oneandhalfX');
const twoX = document.querySelector('#twoX');

const changeFont1 = (a) => {
  main.classList.remove('oneX', 'oneandhalfX', 'twoX');
  sidebar1.classList.remove('oneX', 'oneandhalfX', 'twoX');
  main.classList.toggle(a.target.id);
  sidebar1.classList.toggle(a.target.id);
}; 


oneX.addEventListener('click', changeFont1);
oneandhalfX.addEventListener('click', changeFont1);
twoX.addEventListener('click', changeFont1);


//access menu - colour scheme
const wB = document.querySelector('.whiteblack');
const bW = document.querySelector('.blackwhite');
const cP = document.querySelector('.theme1');
const pC = document.querySelector('.theme1alt');
const yP = document.querySelector('.theme2');
const pY = document.querySelector('.theme2alt');
const lB = document.querySelector('.theme3');
const bL = document.querySelector('.theme3alt');

const changeColour = (a) => {
  main.classList.remove('whiteblack', 'blackwhite', 'theme1', 'theme1alt', 'theme2', 'theme2alt', 'theme3', 'theme3alt');
  main.classList.toggle(a.target.id);
}; 

wB.addEventListener("click", changeColour);
bW.addEventListener("click", changeColour);
cP.addEventListener("click", changeColour);
pC.addEventListener("click", changeColour);
yP.addEventListener("click", changeColour);
pY.addEventListener("click", changeColour);
lB.addEventListener("click", changeColour);
bL.addEventListener("click", changeColour);


//access menu - font family
const acme = document.querySelector('.acme');
const lora = document.querySelector('.lora');
const nunito = document.querySelector('.nunito');
const signika = document.querySelector('.signika');
const mono = document.querySelector('.mono');

const changeFF = (a) => {
  main.classList.remove('acme', 'lora', 'nunito', 'signika', 'mono');
  main.classList.toggle(a.target.id);
}; 

acme.addEventListener("click", changeFF);
lora.addEventListener("click", changeFF);
nunito.addEventListener("click", changeFF);
signika.addEventListener("click", changeFF);
mono.addEventListener("click", changeFF);




//navigation menu 
const who = document.querySelector('.who');
const why = document.querySelector('.why');
const how = document.querySelector('.how');

let displayThis = document.querySelector('#how');


const navFunc = (a) => {
  let selDom = document.querySelector('#' + a.target.classList.value)
  document.querySelector('#who').classList.add('display_none');
  document.querySelector('#why').classList.add('display_none');
  document.querySelector('#how').classList.add('display_none');
  selDom.classList.remove('display_none');
  sidebar1.classList.remove('side_bigger');
  main.classList.remove('main_smaller');
  setTimeout(displayAdd, 500, sidebar1);
}; 

who.addEventListener("click", navFunc);
why.addEventListener("click", navFunc);
how.addEventListener("click", navFunc);




///adding functionality to project gallery

const info = document.querySelectorAll('.info');
const aa = document.querySelectorAll('.aa');

const revealInfo = (e) => {
  let curAA = focusNow.querySelector('.aa');
  if (curAA.classList.contains('hidden')) {
    aa.forEach((item) => {
      item.classList.add('hidden');
    })
    curAA.classList.remove('hidden');
  } else {
    curAA.classList.add('hidden');
}
focusNow.scrollIntoView(true);
};

info.forEach((item) => {
  item.addEventListener('click', revealInfo); 
});

///adding image on hover for my name
//'use strict'

let cursor1 = document.querySelector(".follow-img");
let myName = document.querySelector(".chris");

myName.onmouseover = function(){
  cursor1.style.opacity = 1;
}
myName.onmouseout = function(){
  cursor1.style.opacity = 0;
}


