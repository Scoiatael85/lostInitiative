// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) {   // times is the array of User Timing measurements from updatePositions()
  var numberOfEntries = times.length;
  var sum = 0;
  for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
    sum = sum + times[i].duration;
  }
  console.log("Average scripting time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  // called the .movers by class as opposed to an allselector
  var items = document.getElementsByClassName('mover');
  // pulled the meat of the math out of the loop to avoid redundancies
  var sin = document.body.scrollTop / 1250;
  // you'll see most my loops count down; that is due to this liesure reading http://stackoverflow.com/questions/1340589/are-loops-really-faster-in-reverse

    var phase = [];
  
    for (var g = 3; g--;) {
      phase.push(Math.sin(sin + g) * 100);
    }

    for (var i = items.length; i--;) {
      // items[i].style.left = items[i].basicLeft + phase [i % 3] + 'px';
    // it took me a long while to figure out for to both style.transform & 'phase' the .movers
      var shift = items[i].basicLeft + phase [i % 3] + 'px';
        items[i].style.transform = "translateX("+shift+") translateZ(0)";
              // console.log('shift = ', shift);
    }

  // User Timing API to the rescue again. Seriously, it's worth learning.
  // Super easy to create custom metrics.
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(timesToUpdatePosition);
  }
}

// runs updatePositions on scroll
window.addEventListener('scroll', function() {
// optimized the eventListener to pull all .movers as a requestAnimationFrame
    window.requestAnimationFrame(updatePositions);
});

// Generates the sliding pizzas when the page loads.
document.addEventListener('DOMContentLoaded', function() {
  // reduced the numberof columns to the total that can be seen on screen
  var cols = 8;
  var s = 256;
  var height = self.innerHeight;
  console.log(height);
  var numberOfPizzas = height / s * cols;
  // reduced the number of .movers to the total you can see on screen
  for (var i = 0; i < numberOfPizzas; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    // Made the image smaller to not waste load time
    elem.src = "img/d20.png";
    // recentered the 18 .movers after i optimized the code
    elem.basicLeft = 800 - (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
