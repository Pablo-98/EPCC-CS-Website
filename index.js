
//commenting out time out funcitons for now 10/01/ 10:26pm
/*


// declaring count variable that will increment up when the mouse hovers over demo
var count = 1
// waits half a second for the demo function
setTimeout(demo, 500)
// waits .7 of a second for the demo function
setTimeout(demo, 700)
// waits .9 of a second for the demo function
setTimeout(demo, 900)
// waits 2 seconds before reseting 
setTimeout(reset, 2000)
//waits 2.5 seconds
setTimeout(demo, 2500)
//waits 2.75 seconds
setTimeout(demo, 2750)
// waits 3.05 seconds 
setTimeout(demo, 3050)

//declaring mousein variable as false 
var mousein = false
//new function waits for the mouse to hover and once it does the count begins to go up
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')
   
}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
}); c6
*/
console.log('Hi! Thanks for visiting the website:)');