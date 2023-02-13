const note = document.querySelectorAll('.initial');
console.log(note);


function colorPick()    {
    document.getElementById("bg").addEventListener('change', (e) => {
        let color = e.target.value;
        console.dir(color);
        for (let i = 0; i < note.length; i++) {
            note[i].style.backgroundColor = color;
    };
});
};

colorPick();










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