//band 10
// Set the date we're counting down to
var nextBandDeu = new Date("Sep 26, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distanceDeu = nextBandDeu - now;
    
  // Time calculations for days, hours, minutes and seconds
  var daysDeu = Math.floor(distanceDeu / (1000 * 60 * 60 * 24));
  var hoursDeu = Math.floor((distanceDeu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Output the result in an element with id="demo"
  document.getElementById("band").innerHTML = daysDeu + " Tage " + hoursDeu + " Stunden ";
    
  // If the count down is over, write some text 
  if (distanceDeu < 0) {
    clearInterval(x);
    document.getElementById("band").innerHTML = "✨Schon erschienen✨";
  }
}, 1000);



//english
// Set the date we're counting down to
var nextBandEng = new Date("Sep 30, 2025 00:00:00").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceEng = nextBandEng - now;
    
  // Time calculations for days, hours, minutes and seconds
  var daysEng = Math.floor(distanceEng / (1000 * 60 * 60 * 24));
  var hoursEng = Math.floor((distanceEng % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Output the result in an element with id="demo"
  document.getElementById("eng").innerHTML = daysEng + " Tage " + hoursEng + " Stunden ";
    
  // If the count down is over, write some text 
  if (distanceEng < 0) {
    clearInterval(y);
    document.getElementById("eng").innerHTML = "✨Already published✨";
  }
}, 1000);

//tv show
// Set the date we're counting down to
var nextTV = new Date("Sep 26, 2024 00:00:00").getTime();

// Update the count down every 1 second
var z = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distanceTV = nextTV - now;
    
  // Time calculations for days, hours, minutes and seconds
  var daysTV = Math.floor(distanceTV / (1000 * 60 * 60 * 24));
  var hoursTV = Math.floor((distanceTV % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Output the result in an element with id="demo"
  document.getElementById("tv").innerHTML = daysTV + " Tage " + hoursTV + " Stunden ";
    
  // If the count down is over, write some text 
  if (distanceTV < 0) {
    clearInterval(z);
    document.getElementById("tv").innerHTML = "Not anounced yet.";
  }
}, 1000);