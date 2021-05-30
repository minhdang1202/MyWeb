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

var lick = document.querySelector('ul').querySelectorAll('li');
console.log(lick);
const menu = document.querySelector('.menuToggle');

const nav = document.querySelector('.nav');

for (var i = 0; i < lick.length; i++) {
    var menuItem = lick[i];
    menuItem.onclick = function() {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
        
    }
}


// var s = imgs.querySelectorAll('li');
// s.forEach(function(ss){
//     ss.classList.add('.asd');
// })
var pctSkills = ['85%','70%','70%','75%','75%'];
var skillBoxs = document.querySelectorAll('.skill .container .skills');
console.log(skillBoxs);
for(var i = 0 ; i < pctSkills.length ; i++){
    skillBoxs[i].querySelector('.percent .progress').style.width = pctSkills[i];
    skillBoxs[i].querySelector('.value').innerHTML = pctSkills[i];
}
var counter = 1;
    setInterval(function(){
    document.getElementById(`radio${counter}`).checked = true;
    counter++;
    if(counter>4){ 
        counter = 1;
    }
},4000);