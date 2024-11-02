/*================================= SHOW MENU =================================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle){

    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){

    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*================================ REMOVE MENU MOBILE ==============================*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*================================ ATROPOS JS ==============================*/

const myAtropos = Atropos({
    el:'.home__images',
    shadow: false,
    highlight: false,
})

/*================================ ADD SHADOW HEADER ==============================*/

const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}   

window.addEventListener('scroll', shadowHeader)