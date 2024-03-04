//hover function
const eggHovers = document.querySelectorAll('.hover');

eggHovers.forEach(eggHover => {
  eggHover.addEventListener('mouseover', function() {
    eggHover.style.transform = 'scale(1.1)';
  });

  eggHover.addEventListener('mouseout', function() {
    eggHover.style.transform = 'scale(.8)';
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

//audio- yay i get it
const audioPlayer=document.getElementById('audio-play')
const playButton = document.getElementById('btn_play')

playButton.addEventListener("click", ()=> {
    audioPlayer.play();
})

//audio version two- dynamically add audio sounds