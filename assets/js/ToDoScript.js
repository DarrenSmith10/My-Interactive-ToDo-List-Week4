// Element Setup for ToDo List & Input Box
const inputBox = document.getElementById("AddTask");
const listContainer = document.getElementById("Tasks");

//Date Box Parameters

var todayDate = new Date().toISOString().split('T')[0];
document.getElementById("expireDate").setAttribute('min', todayDate);
var expireDate = document.getElementById("expireDate");


//===== addTask() function you need to provide add Task btn using click event ========
function addTask(){

    //check if there is a value in the input box
    //if value is empty we will show alert
    const task = inputBox.value;
    if(!task){
        alert("You need to write something here!")
    } 
    else if(expireDate.value == "")
    {
        alert("Please select a date:")
    }
    else {
        // //if there is a value, then do this 
        // // 1- create li tag when add new task clicking the btn
        const newLi = document.createElement("li");
        const toDoList = document.createElement("span4"); // new tag for to do , used for editing later
        toDoList.innerText = task;
        newLi.append(toDoList);
        newLi.setAttribute("li", "readonly");
        listContainer.append(newLi);

        //2. div tags for date

        let dateDiv = document.createElement('div'); //to store start and end dates
        dateDiv.classList.add("dates"); // i added a class to second div
        newLi.appendChild(dateDiv);


        // 3. add start date and expire date to second div (dateDiv)
        let startDate = document.createElement('span3');
        startDate.innerText = "Today Date: "+todayDate;
        let endDate = document.createElement('span3');
        endDate.innerHTML = " Due Date: "+expireDate.value;
        dateDiv.appendChild(startDate); 
        dateDiv.appendChild(endDate); 

        //4. Create my close button
        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
          }
       
        //5. Create Edit Button
        var myNodelist2 = document.getElementsByTagName("LI");
        var j;
        for (j = 0; j < myNodelist2.length; j++) {
            var editButton = document.createElement("button");
            var txt2 = document.createTextNode("Edit");
            editButton.className = "edit";
            editButton.appendChild(txt2);
            myNodelist2[j].appendChild(editButton);
            editButton.addEventListener("click", (e) =>
                editing(e.target.parentElement));
          }
        

    }
     // after adding task inputbox should be empty:::
     
     inputBox.value = "";

     // Need to call AutosaveData method to store these task in Local Storage
     AutosaveData();

}



//===== when click listcontainer =======

listContainer.addEventListener('click',(e)=>{
    //when you click the task in the container, it mark as checked.
    // also you can uncheck
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); 
        //that changes shoud be saved in the local storage
        AutosaveData();
    }
    //when you click the close btn, task should be removed from the container
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        //that changes shoud be saved in the local storage
        AutosaveData();
    }
})

//===== Edit Button Function =======

function editing(liTag) {
    let liContent = liTag.querySelector("span4");
  
    let input = document.createElement("input");
    input.type = "text";
    input.value = liContent.textContent;
    liTag.append(input);
    input.focus();
    input.addEventListener("blur", () => {
      liContent.innerHTML = input.value;
      input.remove();
    });
}



//------------------------------------------------------------------------
//=====this function is used to save data in local storage.=====
function AutosaveData(){
    //this is the medthod signature ==> localStorage.setItem(key, value)
    localStorage.setItem("data",listContainer.innerHTML);
}

//== saveData Function for the Save button ==
function saveData()
{
    alert("Your data is Saved! ");
    AutosaveData();
}
//-----------------------------------------------------------------------
//====this function is used to get data from local storage.===
function showList(){
      
      //that data you need to set to listContainer. Then you can see your works
    listContainer.innerHTML = localStorage.getItem("data");
}

// We call the function here
showList();

//---
//This will reset the save data in local storage. This is implement on the reset button.
function Reset(){
    alert("Your saved data is reset!");
    localStorage.clear();
    location.reload();
}
