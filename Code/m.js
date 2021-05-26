window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0);
})

function toggleMenu(){
    const menu = document.querySelector('.menuToggle');
    menu.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

var imgArr = ["menu","menu1","menu2","menu3","menu4"];
var imgs = document.getElementById('imgArray');
var l = "";
imgArr.forEach(function(img){
     l += `<li><img src="/MyWeb/Image/${img}.jpg"></li>`;
     imgs.innerHTML = l;
});
var pctSkills = ['85%','70%','70%','75%','75%'];
var skillBoxs = document.querySelectorAll('.skill .container .skills');

for(var i = 0 ; i < pctSkills.length ; i++){
    skillBoxs[i].querySelector('.percent .progress').style.width = pctSkills[i];
    skillBoxs[i].querySelector('.value').innerHTML = pctSkills[i];
}