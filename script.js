// document.querySelectorAll(".image_container")
// .forEach(function(element){
//     gsap.to(element,{
//     ease:Expo.easeInOut,
//     width:"100%",
//     duration:2,
//     stagger:2
//     })
// })

var tl = gsap.timeline({
    repeat:-1
});

tl
.to(".image_container",{
    ease:Expo.easeInOut,
    width:"100%",
    // duration:2,
    stagger:2
    },'flag')
.to(".text h1",{
    ease:Expo.easeInOut,
    top:"0",
    stagger:2,
    
},'flag')
.to(".text h1",{
    ease:Expo.easeInOut,
    top:"-100%",
    stagger:2,
    delay:2,
},'flag')



