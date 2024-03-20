//hover function
const eggHovers = document.querySelectorAll('.hover')

eggHovers.forEach(eggHover => {
});

//button open/ closes a display, question mark is a pop up 
document.addEventListener("DOMContentLoaded", function() {
  const helpBtn = document.querySelector('.help-btn');
  const helpPopup = document.querySelector('.help-popup');
  const closeBtn = document.querySelector('.esc-btn');

  helpBtn.addEventListener('click', function() {
    helpPopup.style.display = 'block'; // Show the help popup
  });

  closeBtn.addEventListener('click', function() {
    helpPopup.style.display = 'none'; // Hide the help popup
  });
});

//birthday input
function handle_submit(event) {
  event.preventDefault();
  const birthdayInput = document.getElementById('birthdayInput');
  const birthdayValue = birthdayInput.value;
  console.log('Birthday inputted:', birthdayValue);
  
  const date = new Date(birthdayValue);
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  
  const divs = [
    { class: '.owl', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 }, //good
    { class: '.parrot', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 }, //good
    { class: '.robin', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 }, //good
    { class: '.warbler', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 }, //good
    { class: '.nightingale', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 }, //good
    { class: '.dove', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 }, //good
    { class: '.eagle', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 }, //good
    { class: '.kingfisher', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 }, //good
    { class: '.hawk', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 }, //good
    { class: '.swan', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 }, //good
    { class: '.rooster', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }, //good
    { class: '.raven', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 } //good
  ];

  document.querySelectorAll('.cards').forEach(card => {
    card.style.display = 'none';
  });

  divs.forEach(divInfo => {
    const { class: divClass, startMonth, startDay, endMonth, endDay } = divInfo;
    const div = document.querySelector(divClass);
    const audioElement = div.querySelector('audio'); 

    if (
      (month === startMonth && day >= startDay) || 
      (month === endMonth && day <= endDay) || 
      (month > startMonth && month < endMonth)
    ) {
      div.style.display = 'block'; // Display the card that matches the condition

      if (audioElement) {
        audioElement.play(); 
      }
    } else {
      if (audioElement) {
        audioElement.pause(); 
        audioElement.currentTime = 0;
      }
    }
  });
}

const form = document.querySelector('.input');
form.addEventListener('submit', handle_submit);


//open bird cards on click
document.addEventListener("DOMContentLoaded", function() {
  const cards = [
    { buttonId: 'owl-jan', cardClass: '.owl', audioId: 'owl-audio' },
    { buttonId: 'parrot-feb', cardClass: '.parrot', audioId: 'parrot-audio' },
    { buttonId: 'robin-mar', cardClass: '.robin', audioId: 'robin-audio' },
    { buttonId: 'wilsons-apr', cardClass: '.warbler', audioId: 'wilsons-audio'},
    { buttonId: 'nightingale-may', cardClass: '.nightingale', audioId: 'nightingale-audio'},
    { buttonId: 'dove-jun', cardClass: '.dove', audioId: 'dove-audio'},
    { buttonId: 'eagle-jul', cardClass: '.eagle', audioId: 'eagle-audio'},
    { buttonId: 'kingfisher-aug', cardClass: '.kingfisher', audioId: 'kingfisher-audio'},
    { buttonId: 'hawk-sep', cardClass: '.hawk', audioId: 'hawk-audio'},
    { buttonId: 'swan-oct', cardClass: '.swan', audioId: 'swan-audio'},
    { buttonId: 'rooster-nov', cardClass: '.rooster', audioId: 'rooster-audio'},
    { buttonId: 'raven-dec', cardClass: '.raven', audioId: 'raven-audio'},
  ];

  cards.forEach(card => {
    const button = document.getElementById(card.buttonId);
    const cardElement = document.querySelector(card.cardClass);
    const audio = document.getElementById(card.audioId);

    button.addEventListener("click", function() {
      document.querySelectorAll('.cards').forEach(c => {
        if (c !== cardElement && c.style.display === 'block') {
          c.style.display = 'none';
          const audio = c.querySelector('audio');
          audio.pause();
          audio.currentTime = 0;
        }
      });

      if (cardElement.style.display === 'none' || cardElement.style.display === '') {
        cardElement.style.display = 'block';
        audio.play();
      } else {
        cardElement.style.display = 'none';
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const playButton = document.getElementById(card.buttonId);
    playButton.addEventListener("mousedown", () => {
      audio.play();
    });
  });

  const escButtons = document.querySelectorAll('.esc-btn');
  function hideCards() {
    document.querySelectorAll('.cards').forEach(card => {
      card.style.display = 'none';
      const audio = card.querySelector('audio');
      audio.pause();
      audio.currentTime = 0;
    });
  }

  escButtons.forEach(escButton => {
    escButton.addEventListener("click", hideCards);
  });
});