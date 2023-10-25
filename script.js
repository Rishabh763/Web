gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline()

tl.from("h1", {
    y: 300,
    duration: 0.5,
    delay: 1,
    ease: "EaseOut"
})

tl.to(".india>h1", {
    y: -200,
    duration: 1,
    delay: 0.5,
    ease: "EaseOut"
})

tl.to(".orange", {
    y: "-95vh",
    duration: 1.5,
    delay: 0,
    ease: "pow"
})

tl.to(".white", {
    y: "-90vh",
    duration: 1.5,
    delay: -1,
})

tl.to(".green", {
    y: "-85vh",
    duration: 1,
    delay: -1,
})

tl.to(".orange,.whtie,.green", {
    width: "15vw",
    left: "42.5vw",
    duration: 1,
    delay: 0,
    ease: "EaseOut"
})

tl.to(".main>img", {
    opacity: 1,
    delay: -1,
})

tl.to(".orange, .white, .green, .main>img", {
    opacity: 0,
    duration: 0.5,
    delay: 0,
    ease: "linear"
})

tl.to(".page1>.imgcontainer>img", {
    scale: 1.5,
    opacity: 1,
    duration: 0.5,
    delay: -0.5,
    ease: "linear"
})

tl.to(".page1>.hero>h1", {
    opacity: 1,
    y: 40,
    duration: 0.3,
    stagger: 0.3,
    ease: "EaseIn"
})

tl.to(".explore>h3", {
    opacity: 1,
    y: 30,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
})



Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
    images: ["./images/annie-spratt-WCgioEcEVNc-unsplash.jpg,./images/vikram-B_ufwLFEZPE-unsplash.jpg", "./images/srivatsan-balaji-YpX8_xuV1zE-unsplash.jpg", "./images/kushal-medhi-hWd_bsBQx9w-unsplash.jpg"], images: []
});


gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        scroller: "body",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 2,
    },
    y: "-300%",
    ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.629779975646229},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index);
                },
            });
        });
    },
});
