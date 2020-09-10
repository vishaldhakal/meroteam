const bat = document.getElementById('bat');
const bowl = document.getElementById('bowl');
const allround = document.getElementById('allround');
const wicket = document.getElementById('wicket');

const batcont = document.querySelector('.bat');
const bowlcont = document.querySelector('.bowl');
const allroundcont = document.querySelector('.allround');
const wicketcont = document.querySelector('.wicket');

bowlcont.style.display="none";
allroundcont.style.display="none";
wicketcont.style.display="none";

bat.addEventListener('click',(e)=>{
    batcont.style.display="block";
    bat.className +=" bottom";
    bowl.classList.remove('bottom');
    wicket.classList.remove('bottom');
    allround.classList.remove('bottom');
    bowlcont.style.display="none";
    allroundcont.style.display="none";
    wicketcont.style.display="none";
});
bowl.addEventListener('click',(e)=>{
    batcont.style.display="none";
    bowlcont.style.display="block";
    bat.classList.remove('bottom');
    wicket.classList.remove('bottom');
    allround.classList.remove('bottom');
    bowl.className +=" bottom";
    allroundcont.style.display="none";
    wicketcont.style.display="none";
});
allround.addEventListener('click',(e)=>{
    bowlcont.style.display="none";
    batcont.style.display="none";
    bat.classList.remove('bottom');
    wicket.classList.remove('bottom');
    bowl.classList.remove('bottom');
    allround.className +=" bottom";
    allroundcont.style.display="block";
    wicketcont.style.display="none";
});
wicket.addEventListener('click',(e)=>{
    bowlcont.style.display="none";
    allroundcont.style.display="none";
    bat.classList.remove('bottom');
    bowl.classList.remove('bottom');
    allround.classList.remove('bottom');
    wicket.className +=" bottom";
    batcont.style.display="none";
    wicketcont.style.display="block";
});