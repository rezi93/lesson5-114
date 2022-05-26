


let burger =document.getElementById('burgerbar');
let navmenu =document.getElementById('navigation');
let line = document.getElementById('item');


burger.addEventListener('click', function(){
    navmenu.classList.toggle('open');
   
})
// burger.addEventListener('click', function(){
//     line.classList.toggle('open');
   
// })
// let menu btn =document.querySelectorall('.burger');
// menu btn.addEventListener('click', function(){
//     menu btn.classList.toggle('is-active');
// })

document.getElementById('user').addEventListener('focus', function(event){
    event.target.style.background = 'green';
})