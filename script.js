const toggle=document.getElementById('menu-toggle');
const menu=document.getElementById('menu');
const header=document.querySelector('header');
function setMenu(open){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'CLOSE <span aria-hidden="true">×</span>':'MENU <span aria-hidden="true">☰</span>';document.body.classList.toggle('menu-open',open);header.classList.toggle('menu-open',open);if(open)menu.querySelector('a').focus();}
toggle.addEventListener('click',()=>setMenu(menu.hidden));
menu.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',event=>{if(menu.hidden)return;if(event.key==='Escape'){setMenu(false);toggle.focus()}if(event.key==='Tab'){const items=[toggle,...menu.querySelectorAll('a')];const first=items[0],last=items.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
function updateHeader(){header.classList.toggle('scrolled',scrollY>80)}
addEventListener('scroll',updateHeader,{passive:true});updateHeader();
addEventListener('pageshow',updateHeader);
