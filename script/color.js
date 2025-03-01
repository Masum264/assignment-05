function getColor(){
    const red = (Math.random() * 256);
    const green = (Math.random() * 256);
    const blue = (Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById("theme").addEventListener("click", function(){
    let bodyTheme = document.getElementById("body-theme");
    bodyTheme.style.backgroundColor = getColor();
})