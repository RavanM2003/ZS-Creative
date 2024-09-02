var texts = document.querySelectorAll(".specialtext")
texts.forEach(element => {
    element.addEventListener("mouseover", ()=>{
        console.log(element.nextElementSibling);
        element.nextElementSibling.classList.remove("d-none")
    })
    element.addEventListener("mouseout", ()=>{
        console.log("out");
        element.nextElementSibling.classList.add("d-none")
    })
});