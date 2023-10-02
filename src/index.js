



const rightButton = document.querySelector(".right-button")
const leftButton = document.querySelector(".left-button")
const images = document.querySelectorAll(".image")
const startingImage = document.getElementById("starting-image")
const navCirclesContainer = document.querySelector(".nav-circles-container")
const navCircles = []
let counter = 0

images.forEach((image) => {
    
        const navCircle = document.createElement("div")
        navCircle.classList.add("nav-circle")
        navCirclesContainer.append(navCircle)
        navCircles.push(navCircle)
})

navCircles[0].classList.add("active")

function handleTimeout(){
    if(counter >= images.length - 1){
        images[counter].classList.add("hidden")
        navCircles[counter].classList.remove("active")
        counter = 0
        images[counter].classList.remove("hidden")
        navCircles[counter].classList.add("active")
    }
    else{
        images[counter].classList.add("hidden")
        navCircles[counter].classList.remove("active")
        counter++
        images[counter].classList.remove("hidden")
        navCircles[counter].classList.add("active")
    }
    
}

const timer = setInterval(handleTimeout, 5000)

rightButton.addEventListener("click", () => {
    if(counter >= images.length - 1){
        counter = 0
        images.forEach((image) => {
            if(!image.classList.contains("hidden")){
                image.classList.add("hidden")
            }
        })
        navCircles.forEach((circle) => {
            circle.classList.remove("active")
        })
        images[0].classList.remove("hidden")
        navCircles[0].classList.add("active")
    }
    else{
        images[counter].classList.add("hidden")
        navCircles[counter].classList.remove("active")
        counter++
        images[counter].classList.remove("hidden")
        navCircles[counter].classList.add("active")
    }
    
    
    clearInterval(timer)
    setInterval(handleTimeout, 5000)
})

leftButton.addEventListener("click", () => {
    if(counter === 0){
        counter = images.length - 1
        images.forEach((image) => {
            if(!image.classList.contains("hidden")){
                image.classList.add("hidden")
            }
        })
        navCircles.forEach((circle) => {
            circle.classList.remove("active")
        })
        images[0].classList.add("hidden")
        navCircles[0].classList.remove("active")

        images[counter].classList.remove("hidden")
        navCircles[counter].classList.add("active")

    }
    else{
        images[counter].classList.add("hidden")
        navCircles[counter].classList.remove("active")
        counter--
        images[counter].classList.remove("hidden")
        navCircles[counter].classList.add("active")

    }
    
    
    clearInterval(timer)
    setInterval(handleTimeout, 5000)
})