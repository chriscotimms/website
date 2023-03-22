const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');
const main = document.querySelector('.main');


document.querySelector('#access_menu').onclick = function () {
  if (sidebar1.classList.contains('side_bigger')) {
    sidebar1.classList.toggle('side_bigger');
  } else {
    main.classList.toggle('main_smaller');
  }
  sidebar2.classList.toggle('side_bigger');
};

document.querySelector('#nav_menu').onclick = function () {
  if (sidebar2.classList.contains('side_bigger')) {
    sidebar2.classList.toggle('side_bigger');
  } else {
    main.classList.toggle('main_smaller');
  }
  sidebar1.classList.toggle('side_bigger');
};


//access menu - Font Size
const oneX = document.querySelector('#oneX');
const oneandhalfX = document.querySelector('#oneandhalfX');
const twoX = document.querySelector('#twoX');

const changeFont1 = (a) => {
  main.classList.remove('oneX', 'oneandhalfX', 'twoX');
  main.classList.toggle(a.target.id);
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
const asapCon = document.querySelector('.asapCon');
const nunito = document.querySelector('.nunito');
const signika = document.querySelector('.signika');
const staatliches = document.querySelector('.staatliches');

const changeFF = (a) => {
  main.classList.remove('acme', 'asapCon', 'nunito', 'signika', 'staatliches');
  main.classList.toggle(a.target.id);
}; 

acme.addEventListener("click", changeFF);
asapCon.addEventListener("click", changeFF);
nunito.addEventListener("click", changeFF);
signika.addEventListener("click", changeFF);
staatliches.addEventListener("click", changeFF);




//function changeColor(color) {
//for (let i = 0; i < note.length; i++) {
//note[i].style.backgroundColor = color;
//note[i].style.color = 'red';
//}
//}


const flex = document.getElementById('flexBody');
const flexChoices = ['row', 'row-reverse', 'column', 'column-reverse'];
console.log(flex);


function column() {
    flex.style['flex-direction'] = flexChoices[2];
    }

function row() {
    flex.style['flex-direction'] = flexChoices[0];
    }




/*

let value = document.getElementsByTagName("article");
console.log(value);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}