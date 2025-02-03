// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
   
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    
  }
}, false);

// using document.getElementByID to select the AddTask button
var AddTask = document.getElementById("AddTask");
// using document.getElementByID to select the AddTaskButton button

var AddTaskButton = document.getElementById("AddTaskButton");
// adding an event listerner to the AddTaskButton that calls the addition
AddTaskButton.addEventListener("click", Add);


function Add() {

//using the value property of the AddInput to add item to the list


var item = AddTask.value;

// 5. select the searches div using document.getElementById
var AddItem = document.getElementById("Tasks");

// 6. create a new li element using document.createElement
var newParagraph = document.createElement("li");

// 7. set the innerHTML of the new paragraph to the search term
newParagraph.innerHTML = item;

// 8. append the new paragraph to the searches div


if(item == '') {
  alert("You must write here!");
  
} else {
  document.getElementById("Tasks").appendChild(newParagraph);

}
document.getElementById("AddTask").value = "";


var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newParagraph.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}

// trying to add Save data but currently not working
function saveData() {

  localStorage.setItem("data" , Tasks.innerHTML);
}

function showTasks(){
  Tasks.innerHTML = localStorage.getItem("data");
}
