gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".navbar__brand", {duration: 1, x: -500})
    .from(".hero", {duration: 1, x: -500, opacity: 0})
    .from("#button-wrappers", {duration: 1, y: 500, opacity: 0})
    .from(".hero__title, .hero__subtitle", {duration: 1, y: 500, opacity: 0})
    .from("#button-wrappers .button", {duration: 1, y: 500, opacity: 0, stagger:0.3});

gsap.from(".service", {
    scrollTrigger: { trigger: '.services',
    start:'top bottom',
    },
    y: 300,
    opacity: 0,
    duration: 1.2,
    stagger: 1
});

gsap.from(".section__img-group img", {
    scrollTrigger: { trigger: '.section__img-group',
    start:'top bottom',
    },
    opacity: 0,
    duration: 1.2,
    stagger: .3
});

gsap.from(".ready__right .button", {
    scrollTrigger: { trigger: '#ready',
    start:'top bottom',
    },
    y:300,
    opacity: 0,
    duration: 1,
    stagger: .6
});



let menuToggle = document.querySelector('.navbar__toggler');
let menuList = document.querySelector('.navbar__list');
let toggle = false;

var a = gsap.timeline()
a.to(".navbar__list", {
    duration: 1,
    y:0,
    background: 'var(--white-color)',
    display: 'flex',
    'flexDirection': 'column',
    position: 'absolute',
    top: '100%',
    left: '0',
    width:'100%',
    transformOrigin: 'top'
})
a.pause();

menuToggle.addEventListener('click', () => {
    toggle = !toggle;
    menuToggle.classList.toggle('active');
    //menuList.classList.toggle('active');
    if (toggle) {
        a.play();
    } else {
        a.reverse();
    }
})