const pages=[...document.querySelectorAll('.page')];
const count=document.getElementById('pageCount');
const dots=document.getElementById('dots');
let current=0;
pages.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Go to page ${i+1}`);b.addEventListener('click',()=>show(i));dots.appendChild(b)});
function show(i){current=(i+pages.length)%pages.length;pages.forEach((p,n)=>p.classList.toggle('active',n===current));count.textContent=`${current+1} / ${pages.length}`;[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===current));document.getElementById('pageMenu').classList.remove('open')}
document.querySelectorAll('.next').forEach(b=>b.addEventListener('click',()=>show(current+1)));
document.getElementById('restartBtn').addEventListener('click',()=>show(0));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('pageMenu').classList.toggle('open'));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.go))));
document.getElementById('giftBtn').addEventListener('click',()=>{document.getElementById('giftMessage').textContent='Surprise! You deserve all the happiness and love in the world. Happy Birthday, Vivena! 🤍';document.getElementById('giftBtn').querySelector('span').textContent='💝'});
show(0);
