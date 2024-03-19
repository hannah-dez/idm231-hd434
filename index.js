//hover function
const eggHovers = document.querySelectorAll('.hover')

eggHovers.forEach(eggHover => {
});

//button open/ closes a display, question mark is a pop up 

//birthday input? why doesnt it work
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.input');
    const birthdayInput = document.getElementById('birthday-input');
    const submitBtn = document.getElementById('submit-btn');
    const cardContainer = document.querySelector('.card-container');

    function displayCard(cardId) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (card.id === cardId) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function handle_submit(event) {
        event.preventDefault();

        const birthdayInputValue = birthdayInput.value;
        const date = new Date(birthdayInputValue);
        const month = date.getMonth() + 1; // Adding 1 since getMonth() returns 0-indexed month

        // Example logic for displaying different cards based on date and month
        if ((month === 3 && date.getDate() >= 21) || (month === 4 && date.getDate() <= 20)) {
            displayCard('robin-card'); // Display the robin card
        } else if ((month === 5 && date.getDate() >= 21) || (month === 6 && date.getDate() <= 20)) {
            displayCard('dove-card'); // Display the dove card
        } else if ((month === 7 && date.getDate() >= 23) || (month === 8 && date.getDate() <= 22)) {
            displayCard('eagle-card'); // Display the eagle card
        } else {
            // Display a default card if no specific conditions are met
            displayCard('default-card'); // Replace 'default-card' with the id of your default card
        }
    }

    form.addEventListener('submit', handle_submit);
});

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
    cards.forEach(card => {
      const cardElement = document.querySelector(card.cardClass);
      cardElement.style.display = 'none';
      const audio = document.getElementById(card.audioId);
      audio.pause();
      audio.currentTime = 0;
    });
  }

  escButtons.forEach(escButton => {
    escButton.addEventListener("click", hideCards);
  });
});