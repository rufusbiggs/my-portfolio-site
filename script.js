// Self Desruct Website!!!!

function selfDestruct() {
    document.body.innerHTML = '<h1>BOOM</h1><p>Refresh to rebuild</p>'
}


// // Cancel self destruct
// function cancelDestruct() {
//     // let clicked = true;
//     document.getElementById('cancel').innerHTML = '';
// }

// document.getElementById('cancel').addEventListener('onclick', cancelDestruct);

var button = document.getElementById("cancel");
button.addEventListener("click", function(e) {
    // e is the event object
    // e.target is the button element
    // do stuff with them
    let clicked = true;
});



// Countdown timer 
function startCountdown() {
    let counter = 59;
    
    const interval = setInterval(() => {
      document.getElementById('countdown').innerHTML = "You've got " + counter + " seconds to view this page before it self destructs!"
      counter--;

      if (counter < 0) {
        selfDestruct();
      }

      var button = document.getElementById("cancel");
      button.addEventListener("click", function(e) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'PHEW!';
        document.getElementById('cancel').innerHTML = '';
      })

    }, 1000);
  }

window.addEventListener('load', startCountdown);




  
