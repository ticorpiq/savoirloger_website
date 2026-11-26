(function(){
var root=document.documentElement;
// apparition douce
if('IntersectionObserver' in window){
var r=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vu');r.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('.titre,.charte>li,.etapes>li,.liens>a,.manif>*,.annexe>*,.qa,.fin .gros,.lignes>li,.visuel').forEach(function(el){el.classList.add('reveal');r.observe(el)});
}
// en-tête compact au défilement
var h=document.getElementById('hdr');

// méga-menu
var b=document.getElementById('ouvrir'),m=document.getElementById('mega');
if(b&&m){
var set=function(v){m.hidden=!v;b.setAttribute('aria-expanded',v)};
b.addEventListener('click',function(e){e.stopPropagation();set(m.hidden)});
document.addEventListener('click',function(e){if(!m.hidden&&!m.contains(e.target))set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){set(false);b.focus()}});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
}
})();
// page charte : engagement actif dans l'index collant
(function(){
var ix=[].slice.call(document.querySelectorAll('.ch-index a'));if(!ix.length||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var id='#'+e.target.id;ix.forEach(function(a){a.classList.toggle('actif',a.getAttribute('href')===id)})}})},{rootMargin:'-35% 0px -55% 0px'});
document.querySelectorAll('.eng').forEach(function(el){io.observe(el)});
ix[0].classList.add('actif');
})();
