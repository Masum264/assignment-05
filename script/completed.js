const button = document.querySelectorAll(".card-btn");
let taskCount = document.getElementById("task-count").innerText;
let countConverted = parseInt(taskCount);

let taskChecked = document.getElementById("task-checked").innerText;
let taskConverted = parseInt(taskChecked);

for(let btn of button){
    btn.addEventListener("click", function(event){
        
        event.preventDefault();
        alert("Board updated successfully!");
       
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

        const parentDiv = btn.parentElement.parentElement;
        const title = parentDiv.querySelector("h1").innerText;


        const newElement = document.createElement("p");
        newElement.innerText = `You have completed the task ${title} at ${time}`;

        newElement.classList.add("bg-[#F4F7FF]", "p-4", "rounded-xl", "m-2")

        const activitySection = document.getElementById("activity-section");
        activitySection.appendChild(newElement);

        document.getElementById("clear-history").addEventListener("click", function(){
            newElement.style.display = "none";
        })

        

    })
}

// Discover new today box
document.getElementById("discover").addEventListener("click", function(){
    window.location.href = './blogs.html';
})

document.getElementById("back-desk").addEventListener("click", function(){
    window.location.href = './index.html'
})