const left = document.querySelector('.left'),
      menu =document.querySelector('.menu');

menu.addEventListener('click' , ()=>{
    left.classList.toggle('none');
});
