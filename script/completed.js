const button = document.querySelectorAll(".card-btn");
let taskCount = document.getElementById("task-count").innerText;
let countConverted = parseInt(taskCount);

let taskChecked = document.getElementById("task-checked").innerText;
let taskConverted = parseInt(taskChecked);

for(let btn of button){
    btn.addEventListener("click", function(event){
        alert("Board updated successfully!");
       
        event.preventDefault();
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "lightgray";
        btn.style.color = "gray";
        
        countConverted--;
        taskConverted++;

        if(countConverted === 0){
            alert("congrats!!! You have completed all the current tasks");
        }
        document.getElementById("task-count").innerText = countConverted;
        document.getElementById("task-checked").innerText = taskConverted;
    })
}