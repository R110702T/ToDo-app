let form=document.querySelector("form");
let input_val =document.getElementById("input_val");

let taskMainEle=document.getElementById("task") ;  //without content div

form.addEventListener("submit",(e)=>{
    e.preventDefault();   //prevent the form from reloading the page 
    let taskValue=input_val.value.trim() ;   // take the value from input text
    if(!taskValue) {  //check if input is empty
    alert("please add a task");
    return;
     }

    
     

       //create main element
       let taskEle=document.createElement("div");
       taskEle.classList.add("ftask")  ;

       //create content element
       let contentEle=document.createElement("div");
       contentEle.classList.add("content");
       
       //create input field
       let inputEle=document.createElement("input")
       inputEle.setAttribute("type","text");
          inputEle.value=taskValue;
       inputEle.id="text";
       inputEle.setAttribute("readonly","readonly")

       //action
       let actionEle=document.createElement("div");
        actionEle.classList.add("action");


        //create edit button
        let edit_btn=document.createElement("button");
        edit_btn.classList.add("edit");
        edit_btn.innerText="Edit";

        //create delete button

        let delete_btn=document.createElement("button");
        delete_btn.classList.add("delete");
        delete_btn.innerText="Delete"



          //attach the parent and child

          taskMainEle.appendChild(taskEle);
          taskEle.appendChild(contentEle);
          taskEle.appendChild(actionEle);
          contentEle.appendChild(inputEle);       
          actionEle.appendChild(edit_btn);
          actionEle.appendChild(delete_btn);
         
        input_val.value="";   //clear input field

           //editing functionality
           edit_btn.addEventListener("click",()=>{
            if(edit_btn.innerText.toLowerCase()=="edit"){
                inputEle.removeAttribute("readonly") ;  //enable editing
                inputEle.focus();  //focus input field
                edit_btn.innerText="Save";
            }
            else{
                inputEle.setAttribute("readonly","readonly");
                edit_btn.innerText="Edit"
            }
           })

           //deleting
           delete_btn.addEventListener("click",()=>{
            taskMainEle.removeChild(taskEle);
           })
       
        });
