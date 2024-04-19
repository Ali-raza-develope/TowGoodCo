function locomotiveScrollTriggerAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
   
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveScrollTriggerAnimation()

function navBarAnimation(){
    gsap.to(".svg-container svg",{
        transform:"translateY(-130%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -20%",
            scrub:true
        }
    })
    
    
    gsap.to(".links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -15%",
            scrub:true
        }
    })
}
navBarAnimation()

const videoBoxAnimation = function(){
const videoBox = document.querySelector('.video-box')
const play = document.querySelector('.play')

videoBox.addEventListener('mouseenter',function(){
    gsap.to(play,{
        scale: 1,
        opacity: 1
    })
})

videoBox.addEventListener('mouseleave',function(){
    gsap.to(play,{
        scale: 0,
        opacity: 0
    })
})

videoBox.addEventListener('mousemove',function(dets){
    gsap.to(play,{
        left:dets.x-40,
        top:dets.y-40
    })
})
}
videoBoxAnimation()


function lodingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })

    gsap.from("#page1 .video-box",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.6,
    })
}
lodingAnimation()

function cursorAnimation(){
    document.addEventListener('mousemove',function(dets){
        gsap.to('.cursor',{
            left:dets.x,
            top:dets.y
        })
    })
    
    document.querySelector('#id1').addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(1)',
            background: ('#17214c')
        })
    })
    
    document.querySelector('#id1').addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector('#id2').addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(1)',
            background: ('#303651')
        })
    })
    
    document.querySelector('#id2').addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector('#id3').addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(1)',
            background: ('#000000')
        })
    })
    
    document.querySelector('#id3').addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector('#id4').addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(1)',
            background: ('#28c44c')
        })
    })
    
    document.querySelector('#id4').addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
}
cursorAnimation()