let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration:1,
        ease: "back.out(1.7)",
    })
})

imageDiv.addEventListener("mouseenter", ()=> {
    cursor.textContent = "View More"
    gsap.to(cursor,{
        scale:3,
        opacity:0.7,
        backgroundColor: " #fffcf2"
      
    })
})


imageDiv.addEventListener("mouseleave", ()=> {
    cursor.textContent = ''
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "#ffffff",
        opacity:1
    })
})

