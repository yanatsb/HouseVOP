let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
});

  document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-mask="phone"]') 
    if (!elements) return 
    const phoneOptions = { 
      mask: '+{7}-000-000-00-00'
    }
    elements.forEach(el => { 
      IMask(el, phoneOptions)
    });
  
  });

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };
  