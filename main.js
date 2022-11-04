var typed = new Typed(".input",{
    strings:["Rafael","Dev", "Front-end"],
    typeSpeed: 120,
    backSpeed: 110,
    loop: true
})

const sr = ScrollReveal ({     
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('#navbar , #copyright',{delay:200, origin:'left'})
sr.reveal('.sobre',{delay:400, origin:'top'})
sr.reveal('.habilidades, .projetos, .contato',{delay:200, origin:'top'})