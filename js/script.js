const nav= document.getElementById('nav-icon2'),
      ul = document.getElementById('ulMobile');
nav.addEventListener('click', () =>{
    nav.classList.toggle('open');
    ul.classList.toggle('none');
})
