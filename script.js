gsap.registerPlugin(ScrollTrigger);

// //Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

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
    width: "15vw",
    left: "42.5vw",
    duration: 1,
    delay: 0,
    ease: "EaseOut"
});


tl.to(".main>img", {
    opacity: 1,
    delay: -1,
});

tl.to(".orange, .white, .green, .main>img", {
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "linear"
});

tl.to(".page1>.imgcontainer>img", {
    scale: 1.5,
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
       start:"830% center",
       end: "830% center",
       scrub:2,
    //    markers:true,
       ease:"EaseIn",
       scroller:"body",
    },
});

gsap.from(".page4>.block__container>.block",{
    x:-1000,
    stragger:0.1,
    scrollTrigger:{
        trigger:".page4",
        top:"top top",
        end:"top top",
        scrub:2,
        // markers:true,
        ease:"EaseIn",
        scroller:"body"
    },    
});

gsap.to(".page4>.block__container>.block",{
    x:-1000,
    stragger:0.1,
    scrollTrigger:{
        trigger:".page4",
        top:"top bottom",
        end:"top bottom",
        scrub:2,
        // markers:true,
        ease:"EaseIn",
        scroller:"body"
    },    
});




Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr,nav>.block", {
    images: [""]
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

