
/*
* Exercise I
*/
//
// Difficulty: NORMAL
//
//
// 1: Ajouter du style
// Récuperer l'element avec l'id "btn1"
// Pour le btn1 mettre sa couleur en rouge et son background en orange
//
// 2: Ajouter une classe à un élement
// Recuperer le bouton avec l'id btn2
// Ajouter la class "special" au btn2
//
// 3: Ajouter un bouton avec un btn3 dans le html
// Récuperer le avec JavaScript
// Lui ajouter les class special, shadow, rect
//
// 4: changer la couleur du texte gamma
//

let btn1,
btn2,
btn3;

btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('#btn2');
btn3 = document.createElement("button");

btn1.style.color = "red";
btn1.style['background-color'] = "orange";
btn2.className += "special";
/*
======
btn2.classList.add('special');
*/
btn3.appendChild(document.createTextNode('test value'));
btn3.className += "special shadow rect";
document.body.appendChild(btn3);
document.querySelectorAll('li')[2].style.color = "red";


/*
* Exercise II:
Controller le volume de la vidéo avec un input de type range (suivre les instructions)
*/

// Recuperer la balise input de type range
// Recuperer la balise video
// Ensuite completer la fonction changeVolume

//f the video element depending on the value of the HTML5 slider (input type=range)
// Hint 6: The volume of a video is in the interval 0.0 - 1.0. The value of the range element is between 0 and 100.
// recuperer la valeur de l'input range
// Avec un console.log afficher sa valeur
// Changer la valeur du volume de la video (attention le volume doit etre comprise en 0.0 et 1.0
// https://www.w3.org/2009/cheatsheet/#search,video
// https://www.w3.org/2009/cheatsheet/#search,input

let range,
video;

range = document.querySelector('#volume');
video = document.querySelector('video');

function changeVolume() {
  console.log(range.value/100);
  video.volume = range.value/100;
}

range.addEventListener('change', changeVolume);


/*
* Exercise III :
* 1)
* Afficher le code HTML Good answer si la réponse est bonne
* sinon afficher le <p> Fail! ...
*/

// Hint:


// Ajouter un event listener sur l'élément select qui écoute l'evenement "change"
// Créer un fonction answer qui sera appelée quand la valeur du select change
// dans cette fonction récupérer la valeur du select et en fonction ...



// 2) Ajouter un bouton directement dans le HTML
// Lors du clique sur le bouton faire un réinitialiser
// le select et les réponses

// 3) Ajouter une 2eme question "quel est le résultat de 4 + 2 ?"  :
// Ajouter un input text pour la réponse et un bouton pour valider
// Lorsqu'on clique sur le bouton suivant la valeur de l'input
// on affiche "correct" ou "incorect" dans le HTML


// declarations

let responce1,
responce2,
inpt,
select,
span,
btnChk

// affectations

responce1 = document.querySelector('.success');
responce2 = document.querySelector('.failure');
select = document.querySelector('select');
inpt = document.querySelector('input');
inpt2 = document.querySelector("#inpt2")
btnChk = document.querySelector('#check')
span = document.querySelector('#sp1');
span2 = document.querySelector('#sp2');


// tests

console.log(responce1);
console.log(responce2);
console.log(span);
console.log(select.value);


// functions

function selectChanged(){
  if (select.value === ''){
    responce1.classList.add('hidden');
    responce2.classList.add('hidden');
    return;
  }
  if (select.value === 'yellow'){
    responce1.classList.remove('hidden');
    responce2.classList.add('hidden');
    return;
  }
  else {
    responce2.classList.remove('hidden');
    responce1.classList.add('hidden');
    span.textContent = select.value;
  }
}

function buttonClicked(){
  if (this.id === 'check'){
    if(inpt2.value == 6){
      sp2.textContent='correct'
    }
    else{
      sp2.textContent='incorrect'
    }
  }
  if (this.id === 'reset') {
    select.value = "";
    inpt2.value = "";
    sp2.textContent = "";
    selectChanged();
  }
}

// listeners

document.querySelector('#reset').addEventListener('click',buttonClicked);
btnChk.addEventListener('click',buttonClicked);
select.addEventListener('change',selectChanged);
