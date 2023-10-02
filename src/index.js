



const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")
const images = document.querySelectorAll(".image")
const startingImage = document.getElementById("starting-image")
const navCirclesContainer = document.querySelector(".nav-circles-container")
let counter = 0



function handleTimeout(){
    if(counter >= images.length - 1){
        images[counter].classList.add("hidden")
        counter = 0
        images[counter].classList.remove("hidden")
        
    }
    else{
        images[counter].classList.add("hidden")
    counter++
    images[counter].classList.remove("hidden")
    }
    
}

setInterval(handleTimeout, 5000)

rightButton.addEventListener("click", () => {
    if(counter >= images.length - 1){
        counter = 0
        images.forEach((image) => {
            if(!image.classList.contains("hidden")){
                image.classList.add("hidden")
            }
        })
        images[0].classList.remove("hidden")
    }
    else{
        images[counter].classList.add("hidden")
        counter++
        images[counter].classList.remove("hidden")
    }
    
    
    console.log(counter)
})

leftButton.addEventListener("click", () => {
    if(counter === 0){
        counter = images.length - 1
        images.forEach((image) => {
            if(!image.classList.contains("hidden")){
                image.classList.add("hidden")
            }
        })
        images[0].classList.add("hidden")
        images[counter].classList.remove("hidden")
    }
    else{
        images[counter].classList.add("hidden")
        counter--
        images[counter].classList.remove("hidden")
    }
    
    
    console.log(counter)
})