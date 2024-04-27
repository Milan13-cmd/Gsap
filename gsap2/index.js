var tl = gsap.timeline()

gsap.from("#main #left,#main h1, #main #right",
{
   opacity: 0,
   y:-100,
   duration:1,
   delay:1,
   stagger:0.1,
   ease:"power4"
})


gsap.from("#wrapper h2",{
    y:-100,
    stagger:0.2,
    duration:2,
    delay:1,
    opacity:0,

})
gsap.from("#wrapper img",{
    opacity:0,
    scale:0.95,
})
gsap.from("#wrapper h1",{
    y:-50,
    delay:1,
    duration:1,
    repeat:-1,
    yoyo:1

})