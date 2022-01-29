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

const spyScrolling = () => {
  const sections = document.querySelectorAll('.sezione');

  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[ s ].id;
        if (screen.width > 767) {
          if (document.querySelector('.sidebar .active')) {
            document.querySelector('.sidebar .active').classList.remove('active');
          }
          document.querySelector(`.sidebar a[href="#${ id }"]`).classList.add('active');
        } else {
          if (document.querySelector('.sidebar-mo .active')) {
            document.querySelector('.sidebar-mo .active').classList.remove('active');
          }
          document.querySelector(`.sidebar-mo a[href="#${ id }"]`).classList.add('active');
        }
		
      }
  } 
}

ScrollReveal().reveal('.reveal1', { delay: 300 });
ScrollReveal().reveal('.reveal2', { delay: 500 });
ScrollReveal().reveal('.reveal3', { delay: 700 });
ScrollReveal().reveal('.reveal4', { delay: 900 });

makeNavLinksSmooth();
spyScrolling();
