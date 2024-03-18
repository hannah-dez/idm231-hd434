//hover function
const eggHovers = document.querySelectorAll('.hover')

eggHovers.forEach(eggHover => {
});

//button open/ closes a display, question mark is a pop up 

//open bird cards on click
  document.addEventListener("DOMContentLoaded", function() {
    const owlButton = document.getElementById('owl-jan');
    const owlCard = document.querySelector('.owl');
    const parrotButton = document.getElementById('parrot-feb');
    const parrotCard = document.querySelector('.parrot');
    const robinButton = document.getElementById('robin-mar');
    const robinCard = document.querySelector('.robin');
    const wilsonsButton = document.getElementById('wilsons-apr');
    const wilsonsCard = document.querySelector('.warbler');
    const nightingaleButton = document.getElementById('nightingale-may');
    const nightingaleCard = document.querySelector('.nightingale');
    const doveButton = document.getElementById('dove-jun');
    const doveCard = document.querySelector('.dove');
    const eagleButton = document.getElementById('eagle-jul');
    const eagleCard = document.querySelector('.eagle')
    const kingfisherButton = document.getElementById('kingfisher-aug');
    const kingfisherCard = document.querySelector('.kingfisher');
    const hawkButton = document.getElementById('hawk-sep');
    const hawkCard = document.querySelector('.hawk');
    const swanButton = document.getElementById('swan-oct');
    const swanCard = document.querySelector('.swan');
    const roosterButton = document.getElementById('rooster-nov');
    const roosterCard = document.querySelector('.rooster');
    const ravenButton = document.getElementById('raven-dec');
    const ravenCard = document.querySelector('.raven');

    const escButtons = document.querySelectorAll('.esc-btn');
  
    function hideCard(card) {
      card.style.display = 'none';
    }
  
    owlButton.addEventListener("click", function() {
      owlCard.style.display = (owlCard.style.display === 'none' || owlCard.style.display === '') ? 'block' : 'none';
    });
    parrotButton.addEventListener("click", function() {
      parrotCard.style.display = (parrotCard.style.display === 'none' || parrotCard.style.display === '') ? 'block' : 'none';
    });
    robinButton.addEventListener("click", function(){
      robinCard.style.display = (parrotCard.style.display === 'none' || robinCard.style.display === '') ? 'block' : 'none';
    });
    wilsonsButton.addEventListener("click", function(){
      wilsonsCard.style.display = (wilsonsCard.style.display === 'none' || wilsonsCard.style.display === '') ? 'block' : 'none';
    });
    nightingaleButton.addEventListener("click", function(){
      nightingaleCard.style.display = (nightingaleCard.style.display === 'none' || nightingaleCard.style.display === '') ? 'block' : 'none';
    });
    doveButton.addEventListener("click", function(){
      doveCard.style.display = (doveCard.style.display === 'none' || doveCard.style.display === '') ? 'block' : 'none';
    });
    eagleButton.addEventListener("click", function(){
      eagleCard.style.display = (eagleCard.style.display === 'none' || eagleCard.style.display === '') ? 'block' : 'none';
    });
    kingfisherButton.addEventListener("click", function(){
      kingfisherCard.style.display = (kingfisherCard.style.display === 'none' || kingfisherCard.style.display === '') ? 'block' : 'none';
    });
    hawkButton.addEventListener("click", function(){
      hawkCard.style.display = (hawkCard.style.display === 'none' || hawkCard.style.display ==='') ? 'block' : 'none';
    });
    swanButton.addEventListener("click", function(){
      swanCard.style.display = (swanCard.style.display === 'none' || swanCard.style.display === '') ? 'block' : 'none';
    });
    roosterButton.addEventListener("click", function(){
      roosterCard.style.display = (roosterCard.style.display === 'none' || roosterCard.style.display === '') ? 'block' : 'none';
    });
    ravenButton.addEventListener("click", function(){
      ravenCard.style.display = (ravenCard.style.display === 'none' || ravenCard.style.display === '') ? 'block' : 'none';
    });

    escButtons.forEach(escButton => {
      escButton.addEventListener("click", function() {
        hideCard(owlCard); 
        hideCard(parrotCard);
        hideCard(robinCard);
        hideCard(wilsonsCard);
        hideCard(nightingaleCard);
        hideCard(doveCard);
        hideCard(eagleCard);
        hideCard(kingfisherCard);
        hideCard(hawkCard);
        hideCard(swanCard);
        hideCard(roosterCard);
        hideCard(ravenCard);
      });
    });
  });
//birthday input? why doesnt it work
const form= document.querySelector('form');
function log_birthday(birthday) {
    const date = {
      year: birthday[0],
      month: birthday[1],
      day: birthday[2],
    };
    return date;
  }
function handle_submit(event){
    event.preventDefault();
    console.log('it works');
    console.log(form);
    console.log(form.elements);
    console.log(form.elements['name'].value);
    console.log(form.elements['birthday'].value);
    console.groupEnd();

    const nameInputValue=form.elements['name'].value;
    const birthdayInputValue=form.elements['birthday'].value;
    console.log(nameInputValue);
    console.log(birthdayInputValue);//2023-02-20
    const date = birthdayInputValue.split("-");
    const year= date[0];
    const day = date[2];
    const month = date [1];

    console.assertlog('Year:', year, 'Month', month, 'Day', day);
}

form.addEventListener('submit', handle_submit)

//owl Audio
const owlAudio= document.getElementById('owl-audio')
const playOwl = document.getElementById('owl-jan')

playOwl.addEventListener("mousedown", ()=> {
  owlAudio.play();
})
//parrot-audio
const parrotAudio=document.getElementById('parrot-audio')
const playParrot = document.getElementById('parrot-feb')

playParrot.addEventListener("mousedown", ()=> {
    parrotAudio.play();
})
//robin-audio
const robinAudio = document.getElementById('robin-audio')
const playRobin = document.getElementById('robin-mar')

playRobin.addEventListener("mousedown", ()=> {
  robinAudio.play();
})
//wilsons-audio
const wilsonsAudio = document.getElementById('wilsons-audio')
const playWilsons = document.getElementById('wilsons-apr')

playWilsons.addEventListener("mousedown", ()=> {
  wilsonsAudio.play();
})
//Nightingale-audio
const nightingaleAudio = document.getElementById('nightingale-audio')
const playNightingale = document.getElementById('nightingale-may')

playNightingale.addEventListener("mousedown", ()=> {
  nightingaleAudio.play();
})
//dove-audio
const doveAudio = document.getElementById('dove-audio')
const playDove= document.getElementById('dove-jun')

playDove.addEventListener("mousedown", ()=> {
  doveAudio.play();
})
//eagle-audio
const eagleAudio = document.getElementById('eagle-audio')
const playEagle = document.getElementById('eagle-jul')

playEagle.addEventListener("mousedown", ()=>{
  eagleAudio.play();
})
//kingfisher-audio
const kingfisherAudio = document.getElementById('kingfisher-audio')
const playKingfisher = document.getElementById('kingfisher-aug')

playKingfisher.addEventListener("mousedown", ()=> {
  kingfisherAudio.play();
})
//hawk-audio
const hawkAuido = document.getElementById('hawk-audio')
const playHawk = document.getElementById('hawk-sep')

playHawk.addEventListener("mousedown", ()=> {
  hawkAuido.play();
})
//swan-audio
const swanAudio = document.getElementById('swan-audio')
const playSwan = document.getElementById('swan-oct')

playSwan.addEventListener("mousedown", ()=> {
  swanAudio.play();
})
//rooster-audio
const roosterAudio = document.getElementById('rooster-audio')
const playRooster = document.getElementById('rooster-nov')

playRooster.addEventListener("mousedown", ()=> {
  roosterAudio.play();
})
//raven-audio
const ravenAudio = document.getElementById('raven-audio')
const playRaven = document.getElementById('raven-dec')

playRaven.addEventListener("mousedown", ()=> {
  ravenAudio.play();
})