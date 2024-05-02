let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i")

let tl = gsap.timeline()

tl.to("#full", {
    right:0,
    duration: 0.5
})

tl.from("#full h2", {
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity: 0
})

tl.from("#full i", {
    opacity:0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
  tl.reverse()
})