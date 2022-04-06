window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
      $(".Header").addClass("active");
    } else {
      $(".Header").removeClass("active");
    }
}


jQuery(document).ready(function(){
  
  mobileMenu();
  slideFaq();
  lastItem();
  formPopup();
  cookiesNav();

  //last child
  function lastItem(){
    $('.form .item_input:last').addClass('last');
  }

  //faq list
  function slideFaq(){
	jQuery('.item_question .title_question').click(function(){
		var toggle = jQuery(this).next('div.answer_faq');
		jQuery(toggle).slideToggle("medium");
	});
    jQuery('.inactive').click(function(){
		jQuery(this).toggleClass('inactive actived');
	});
}
  
  //mobile menu
  function mobileMenu(){

    const buttonOpen = document.querySelector('.humburger');
    const menu = document.querySelector('.container_mobile');
    const buttonClose = document.querySelector('.close_menu_icon');
    const overlay = document.querySelector('.overlay_mobile');
  
    buttonOpen.addEventListener('click', () => {
      menu.classList.add('open');
      overlay.classList.add('open');
    });
  
    buttonClose.addEventListener('click', () => {
      menu.classList.remove('open');
      overlay.classList.remove('open');
    });
  
    overlay.addEventListener('click',() => {
      menu.classList.remove('open');
      overlay.classList.remove('open');
    });
  }


  function formPopup(){

      const loginButton = document.querySelector('.login_button');
      const signUpButton = document.querySelector('.signup_button');
      const formContainer = document.querySelector('.form_popup');
      const overlayForm = document.querySelector('.overlay_form');
      const closeForm = document.querySelector('.close_form');
      const loginContent = document.querySelector('.login_form_content');
      const signUpContent = document.querySelector('.sign_form_content');
      const signOpen = document.querySelector('.sign_in_open');
      const signUpOpen = document.querySelector('.sign_up_open');

      closeForm.addEventListener('click', () => {
        formContainer.classList.remove('show_form');
        overlayForm.classList.remove('show_popup');

      });

      loginButton.addEventListener('click', () => {
        formContainer.classList.add('show_form');
        overlayForm.classList.add('show_popup');
        loginContent.classList.add('show_login');
        signUpContent.classList.remove('show_sign');
      });

      signUpButton.addEventListener('click', () => {
        formContainer.classList.add('show_form');
        overlayForm.classList.add('show_popup');
        loginContent.classList.remove('show_login');
        signUpContent.classList.add('show_sign');
      });

      signOpen.addEventListener('click', () => {
        loginContent.classList.add('show_login');
        signUpContent.classList.remove('show_sign');
      });

      signUpOpen.addEventListener('click', () => {
        loginContent.classList.remove('show_login');
        signUpContent.classList.add('show_sign');
      });
  }

});
