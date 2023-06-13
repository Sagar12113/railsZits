var flow = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"40% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
flow
.to(".text-img",{
    top: "6rem",
},'a')


.to("#phone-one",{
    top: "20%",
},'a')
.to("#phone-two",{
    top: "80%"
},'a')
.to("#content_one",{
    top: "40%",
},'a')
.to("#content_two",{
    top: "80%"
},'a')




.to("#phone-two",{
    top: "20%"
},'b')
.to("#phone-one",{
    width: "30%",
    left: "12.5%",
},'b')
.to("#phone-three",{
    top: "130%"
}, 'b')
.to("#content_one",{
    // opacity: "0",
    visibility: "hidden",
    
},'b')
.to("#content_two",{
    top: "40%",
},'b')


.to("#phone-three",{
    top: "20%"
}, 'c')
.to("#phone-two",{
    width: "30%",
    left: "12.5%",
},'c')
.to("#phone-four",{
    top: "130%"
}, 'c')
.to("#content_two",{
    // opacity: "0",
    visibility: "hidden",
    
},'c')
.to("#content_three",{
    top: "40%",
},'c')


.to("#phone-four",{
    top: "20%"
}, 'd')
.to("#phone-three",{
    width: "30%",
    left: "12.5%",
},'d')
.to("#phone-five",{
    top: "130%"
}, 'd')
.to("#content_three",{
    // opacity: "0",
    visibility: "hidden",
    
},'d')
.to("#content_four",{
    top: "40%",
},'d')


.to("#phone-five",{
    top: "20%"
}, 'e')
.to("#phone-four",{
    width: "30%",
    left: "12.5%",
},'e')
.to("#phone-six",{
    top: "130%"
}, 'e')
.to("#content_four",{
    // opacity: "0",
    visibility: "hidden",
    
},'e')
.to("#content_five",{
    top: "40%",
},'e')


.to("#phone-six",{
    top: "20%"
}, 'f')
.to("#phone-five",{
    width: "30%",
    left: "12.5%",
},'f')
.to("#phone-seven",{
    top: "130%"
}, 'f')
.to("#content_five",{
    // opacity: "0",
    visibility: "hidden",
    
},'f')
.to("#content_six",{
    top: "40%",
},'f')


.to("#phone-seven",{
    top: "20%"
}, 'g')
.to("#phone-six",{
    width: "30%",
    left: "12.5%",
},'g')
.to("#phone-eight",{
    top: "130%"
}, 'g')
.to("#content_six",{
    // opacity: "0",
    visibility: "hidden",
    
},'g')
.to("#content_seven",{
    top: "40%",
},'g')


.to("#phone-eight",{
    top: "20%"
}, 'h')
.to("#phone-seven",{
    width: "30%",
    left: "12.5%",
},'h')
.to("#content_seven",{
    // opacity: "0",
    visibility: "hidden",
    
},'h')
.to("#content_eight",{
    top: "40%",
},'h')


.to("#phone-eight",{
    width: "30%",
    left: "12.5%",
},'i    ')




