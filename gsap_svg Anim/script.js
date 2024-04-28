let initialPath = `M 10 200 Q 750 200 1490 200`;

let finalPath = `M 10 200 Q 750 200 1490 200`

let string = document.querySelector("#string")

// string.addEventListener('mouseenter', (dets)=> {
//   console.log(dets)
// })



string.addEventListener("mousemove", function(dets){
    path = `M 10 200 Q ${dets.x} ${dets.y} 1490 200`,
    gsap.to("svg path", {
        attr:{d:path},
        duration: 0.4,
        ease: "power3.out"
    })
})


string.addEventListener('mouseleave', ()=> {
   gsap.to("svg path", {
    attr:{d:finalPath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
   })
})