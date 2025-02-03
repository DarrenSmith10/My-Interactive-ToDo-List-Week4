const inputBox = document.getElementById("AddTask");
const listContainer = document.getElementById("Tasks");

//Going to try add date to this

// var todayDate = new Date().toISOString().split('T')[0];
// document.getElementById("expireDate").setAttribute('min', today);
// var expireDate = document.getElementById("expireDate");


//===== addTask() function you need to provide add Task btn using click event
function addTask(){

    //check if there is a value in the input box
    //if value is empty we will show alert

    if(inputBox.value == ""){
        alert("You need to write something here!")
    } else {
        //if there is a value, then do this 

        // 1- create li tag when add new task clicking the btn
        let li = document.createElement('li');
        // 2 -add task value (eg: Php Fundamental) into this li tag
        li.innerHTML = inputBox.value;
        // 3- then append this li tag with value to our container
        listContainer.appendChild(li);
        
        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
          }
    }
     //::::after adding task inputbox should be empty:::
     inputBox.value = "";

     //::::need to call saveData method to store these task in Local Storage
     saveData();

}

//===== when click listcontainer =======

listContainer.addEventListener('click',(e)=>{
    //when you click the task in the container, it mark as checked.
    // also you can uncheck
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); 
        //that changes shoud be saved in the local storage
        saveData();
    }

    //when you click the close btn, task should be removed from the container
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        //that changes shoud be saved in the local storage
        saveData();
    }
})

//------------------------------------------------------------------------
//=====this function is used to save data in local storage.=====
function saveData(){
    //this is the medthod signature ==> localStorage.setItem(key, value)
    localStorage.setItem("data",listContainer.innerHTML);
}

//-----------------------------------------------------------------------
//====this function is used to get data from local storage.===
function showList(){
      //this is the medthod signature ==> localStorage.getItem(key);
      //that data you need to set to listCOntainer. Then you can see your works
    listContainer.innerHTML = localStorage.getItem("data");
}

//call the function
showList();