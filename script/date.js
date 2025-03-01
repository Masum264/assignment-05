const date = new Date();


const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); 
const month = date.toLocaleDateString("en-US", { month: "long" }); 
const day = date.getDate(); 
const year = date.getFullYear(); 


const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, 
});

document.getElementById("current-date").innerHTML = `
  ${weekday}, <br>
  <span class="font-bold">${month} ${day},  ${year}</span>
`;
