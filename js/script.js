let logowhite = document.getElementById('white');
let logogreen = document.getElementById('green');
let links = document.getElementsByClassName('links');
let hambmenu = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let hamburgericon = document.getElementById('hamburger-icon');
let carousel = document.getElementsByClassName('.carousel')[0];

hambmenu.addEventListener('click', () => {
  menu.classList.toggle('clicked');
  hamburgericon.classList.toggle('hambclicked');
})

for (let i = 0; i<links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('clicked');
    hamburgericon.classList.remove('hambclicked');
  })
}

const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( '.links' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}

const spyScrolling = ( ) => {
  const sections = document.querySelectorAll( '.sezione' );

  window.onscroll = ( ) => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active' ).classList.remove( 'active' );
        document.querySelector( `a[href*=${ id }]` ).classList.add( 'active' );
      }
  } 
}

ScrollReveal().reveal('.reveal1', { delay: 300 });
ScrollReveal().reveal('.reveal2', { delay: 500 });
ScrollReveal().reveal('.reveal3', { delay: 700 });
ScrollReveal().reveal('.reveal4', { delay: 900 });

makeNavLinksSmooth();
spyScrolling();
