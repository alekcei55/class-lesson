let mobile_menu = document.querySelector('.navigation-mobile')
let gam = document.querySelector('.header__gam')
let close = document.querySelector('.navigation-mobile__close')

gam.addEventListener('click' , function() {
  mobile_menu.style.display = 'block'
})

close.addEventListener('click' , function() {
    mobile_menu.style.display = 'none'
})