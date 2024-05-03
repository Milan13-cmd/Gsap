function breakText(){
    let h1 = document.querySelector('h1')
    let heading = h1.textContent;
    let splittedText = heading.split('');
    let clutter = ''
    
    let halfValue = Math.floor(splittedText.length/2)
    console.log(halfValue);

    splittedText.forEach( (elem,idx) => {
       if(idx < halfValue){
        clutter += `<span class="initial">${elem}</span>`
       }
       else{
        clutter += `<span class="final">${elem}</span>`
       }
      
    })
    h1.innerHTML = clutter;
}

breakText()

gsap.from("h1 .initial", {
    y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    stagger: 0.15
})

gsap.from("h1 .final", {
    y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    stagger: -0.15
})