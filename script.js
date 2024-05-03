// lenis smooth scroll

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline()

tl.from("h1", {
    y: 300,
    duration: 1.5,
    delay: 1,
    ease: "EaseOut"
});

tl.to(".india>h1", {
    y: -200,
    duration: 1,
    delay: 0.5,
    ease: "EaseOut"
},"s1");

tl.to(".loading",{
    opacity:0,
    duration :1,
    delay:0.5,
    ease:"EaseOut"
},"s1");

tl.to(".orange", {
    y: "-95vh",
    duration: 1.5,
    delay: 0,
    ease: "pow"
});

tl.to(".white", {
    y: "-90vh",
    duration: 1.5,
    delay: -1,
});

tl.to(".green", {
    y: "-85vh",
    duration: 1,
    delay: -1,
},"s2");

tl.to(".page1>video",{
    opacity:1,
    duration:1,
    delay: -1,
    Ease:"EaseOut",
},"s2");

tl.to(".orange,.white,.green", {
    width: "max(12rem,15vw)",
    duration: 1,
    delay: 0,
    ease: "EaseOut"
});


tl.to(".loader>img", {
    opacity: 1,
    delay: -1,
});

tl.to(".orange, .white, .green, .loader>img", {
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "linear"
});

tl.to(".page1>.imgcontainer>img", {
    opacity: 1,
    duration: 0.5,
    delay: -0.5,
    ease: "linear"
},"s3");

tl.to(".page1>.imgcontainer>.shadow", {
    opacity: 0.3,
    duration: 0.5,
    delay: -0.5,
    ease: "linear"
},"s3");

tl.to(".page1>.imgcontainer>.bg", {
    opacity: 1,
    duration: 0.5,
    delay: -0.5,
    ease: "linear"
},"s3");

tl.from("nav", {
    y: 100,
    duration: 0.5,
    ease: "EaseIn",
    opacity: 0,
},"s3");

tl.from("nav>.block", {
    y: 100,
    duration: 0.8,
    stagger: 0.1,
    ease: "EaseOut",
    opacity: 0,
});

tl.to(".page1>.hero>h1", {
    opacity: 1,
    y: 40,
    duration: 0.3,
    stagger: 0.3,
    ease: "EaseIn"
},"s3");

tl.to(".explore>h3", {
    opacity: 1,
    y: 30,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
});


gsap.to(".page3>.viewcontainer>h1",{
    y: 4,
    duration:1,
    opacity:1,
    stragger:0.3,
    scrollTrigger:{
       trigger:".page3",
       start:"top center",
       end: "top center",
       scrub:2,
    //    markers:true,
       ease:"EaseIn",
       scroller:"body",
    },
});


// page 4

const blocks = document.querySelectorAll(".page4 > .block__container > .block");
const timeline1 = gsap.timeline();
const timeline2 = gsap.timeline();


blocks.forEach((block, index) => {
    timeline1.to(block, {
        transform: "translateX(0%)",
        opacity: 1,
        scrollTrigger: {
            trigger: block,
            start: "bottom bottom", // Adjust the start position as needed
            end: "bottom bottom",   // Adjust the end position as needed
            scrub: 1,
            // markers: true,
            ease: "power1.inOut",
            scroller:"body",
        },
    });

    timeline2.from(block, {
        transform: "translateX(0%)",
        opacity: 1,
        scrollTrigger: {
            trigger: block,
            start: "top top", // Adjust the start position as needed
            end: "top top",   // Adjust the end position as needed
            scrub: 1,
            // markers: true,
            ease: "power1.inOut",
            scroller:"body",
        }
    });
});


// img effect

const img = document.querySelector(".page1>.imgcontainer");


document.addEventListener("mousemove",(e)=>{
    rotateElement(e,img);
});

function rotateElement(event, element){
    const x = event.clientX;
    const y = event.clientY;
    
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight /2;

    const offsetX = ((x-middleX)/middleX)*30;
    const offsetY = ((y-middleY)/middleY )*30;

    element.style.setProperty("--rotateX",-1*offsetY + "deg");
    element.style.setProperty("--rotateY",offsetX + "deg");

    // console.log(offsetX,offsetY)

}



Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".page1>.hero>h1", {
    images: [""]
});

Shery.hoverWithMediaCircle(".hvr,nav>a>.style1", {
    images: [""]
});

Shery.hoverWithMediaCircle(".page4>.block__container>.block", {
    images: ["./images/aurangabad.jpg",
    "./images/pondicherry.webp",
    "./images/madurai.jpg",
    "./images/kutch.jpg",
    "./images/khajuraho.jpg",
    "./images/coorg.jpg",
    "./images/dhanaulti.jpg",
    "./images/hampi.jpg"]
});

Shery.imageEffect(".page2>.block>.right>img", {
    style: 5,
    // debug:true,
    config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":0.94,"range":[-1,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":1.0290862057820747},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":41.61},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":true},"uSpeed":{"value":0.39,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.61,"range":[0,5]},"uFrequency":{"value":4.96,"range":[0,10]}},
});




let sections = gsap.utils.toArray(".page2>.block");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".page2",
        pin: true,
        // markers :true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => "85+=" + document.querySelector(".page2").offsetWidth
    }
});


