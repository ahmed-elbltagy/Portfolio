/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

// let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

// let counter = setInterval(() => {
  // Get Date Now
  // let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  // let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  // let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  // let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  // document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  // document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  // document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff < 0) {
//     clearInterval(counter);
//   }
// }, 1000);


/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".our-skills");

// let nums = document.querySelectorAll(".stats .number");
// let statsSection = document.querySelector(".stats");
// let started = false; // Function Started ? No

// window.onscroll = function () {

  // if (window.scrollY >= section.offsetTop - 250) {
  //   progressSpans.forEach((span) => {
  //     span.style.width = span.dataset.width;
  //   });
  // }
  // Stats Increase Number
//   if (window.scrollY >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }

  // Skills Animate Width
let section = document.querySelector("#skills");
let progressSpan = document.querySelectorAll(".prog span");
window.addEventListener("scroll", function() {
  if (window.scrollY >= section.offsetTop -10) {
    progressSpan.forEach( ( span ) =>{
      span.style.width = span.dataset.width
  })
  }
});

// scroll to Top button
let mybutton = document.querySelector( ".btn" );
window.onscroll = function(){
  if ( window.scrollY >= 650 )
  {
    mybutton.style.opacity = "1";
    mybutton.style.pointerEvents = "auto";
    mybutton.style.cursor="pointer";
  }
  else
  {
    mybutton.style.opacity = "0";
    mybutton.style.pointerEvents = "none";
  }
}
mybutton.onclick= function(){
  window.scrollTo({
    top:0
  })
}