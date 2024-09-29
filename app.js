function page1Animation() {
    let timeline = gsap.timeline()

timeline.from("nav h1,nav h4,nav button",{
    y:-40,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.15
})
timeline.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
})
timeline.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
timeline.from(".center-part1 button",{
    opacity:0,
    duration:0.3,
})
timeline.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
},"-=1")

timeline.from(".sectionbottom img",{
    opacity:0,
    y:30,
    duration:0.6,
    stagger:0.15
})
}
page1Animation()

function Page2Animation() {
    let timeLine2 = gsap.timeline({
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            // markers:true,
            start:"top 40%",
            end:"top 0",
            scrub:2
        }
    })
    timeLine2.from(".services",{
        y:30,
        opacity:0,
        duration:0.2,
    })
    timeLine2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"line1")
    timeLine2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"line1")
    timeLine2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"line2")
    timeLine2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"line2")
    
}
Page2Animation() 

