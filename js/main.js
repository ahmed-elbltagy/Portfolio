let counter = setInterval( function ()
{
  let date1 = new Date( "2021-05-01 23:00:00" );
  let date2 = new Date();
  let dateDiff = date2 - date1;
  let years = Math.floor( dateDiff / ( 1000 * 60 * 60 * 24 * 365.25 ) );
  let months = Math.floor( ( dateDiff / ( 1000 * 60 * 60 * 24 * 30.44 ) ) % 12 );
  let days = Math.floor( ( dateDiff / ( 1000 * 60 * 60 * 24 ) ) % 30.44 );
  let hours = Math.floor( ( dateDiff / ( 1000 * 60 * 60 ) ) % 24 );
  let minutes = Math.floor( ( dateDiff / ( 1000 * 60 ) ) % 60 );
  let seconds = Math.floor( ( dateDiff / 1000 ) % 60 );
  document.querySelector( ".years" ).innerHTML = years;
  document.querySelector( ".months" ).innerHTML = months;
  document.querySelector( ".days" ).innerHTML = days;
  document.querySelector( ".hours" ).innerHTML = hours;
  document.querySelector( ".minutes" ).innerHTML = minutes;
  document.querySelector( ".seconds" ).innerHTML = seconds;
}, 500 );
/////////////////////////////

let statsSectionn = document.querySelector(".stats");
let cardss = document.querySelectorAll( ".stats .card p" );
let started= false;
window.addEventListener( "scroll", function(){
  if ( window.scrollY >= statsSectionn.offsetTop - 270 ){
    if(!started){
      cardss.forEach( ( card ) => { 
        let goal = card.dataset.goal;
        let interval = setInterval(function() {
          card.textContent++;
          if (card.textContent == goal) {
            clearInterval(interval);
          }
        }, 2000 / goal);
      } )
      started=true;
    }
  }
})


/////////////////////////////
let section = document.querySelector( "#skills" );
let progressSpan = document.querySelectorAll( ".prog span" );
window.addEventListener( "scroll", function (){
  if ( window.scrollY >= section.offsetTop - 270 ){
    progressSpan.forEach( ( span ) =>{
    span.style.width = span.dataset.width;
    });
  }
});

/////////////////////////////
let mybutton = document.querySelector( ".btn" );
window.onscroll = function ()
{
  if ( window.scrollY >= 650 )
  {
    mybutton.style.opacity = "1";
    mybutton.style.pointerEvents = "auto";
    mybutton.style.cursor = "pointer";
  } else
  {
    mybutton.style.opacity = "0";
    mybutton.style.pointerEvents = "none";
  }
};
mybutton.onclick = function ()
{
  window.scrollTo( {
    top: 0,
  } );
};
