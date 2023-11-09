gsap.from("#nav>img, #nav h3, #nav h4, #nav button",{
    // y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5,
})
// gsap.from("#nav",{
//     // y:-100,
//     duration:1,
//     delay:1,
//     opacity:0,
// })
var tl = gsap.timeline();
tl.from("#main h1",{
    opacity:0,
    y:100,
    delay:4,
    stagger:0.5,
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.5,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.8,
    yoyo:true,
})