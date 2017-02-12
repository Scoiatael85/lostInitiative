var game = {
  "playersEOM" : [
    {   
    pc: "@BaerTaffy",
    name: "Baer",
    profilePic: "img/min/BaerTaffy.png", 
    twitter: "https://twitter.com/BaerTaffy",
    charNickname: "Ado",
    charName: "Adotumal Milltall",
    charImg: "img/min/Ado.png",
    charRace: "Halfling",
    charClass: "Bard",
    id: "EOM0"
    },
    {   
    pc: "@Strippin",
    name: "Sam",
    profilePic: "img/min/Strippin.jpg", 
    twitter: "https://twitter.com/Strippin",
    charNickname: "Rye",
    charName: "Rye",
    charImg: "img/min/Rye.png",
    charRace: "Tiefling",
    charClass: "Warlock",
    id: "EOM1"
    },
    {   
    pc: "@MargaretKrohn",
    name: "Maggie",
    profilePic: "img/min/MargaretKrohn.jpg", 
    twitter: "https://twitter.com/MargaretKrohn",
    charNickname: "Gromon",
    charName: "Gromon",
    charImg: "img/min/Gromon.png",
    charRace: "Half-orc",
    charClass: "Barbarian",
    id: "EOM2"
    },
    {   
    pc: "@MathasGames",
    name: "Mathas",
    profilePic: "img/min/MathasGames.jpg", 
    twitter: "https://twitter.com/MathasGames",
    charNickname: "Thonk",
    charName: "Thonk",
    charImg: "img/min/Thonk.png",
    charRace: "Half-orc",
    charClass: "Cleric",
    id: "EOM3"
    }
  ],
  "playersTF" : [
      {   
    pc: "@MargaretKrohn",
    name: "Maggie",
    profilePic: "img/min/MargaretKrohn.jpg", 
    twitter: "https://twitter.com/MargaretKrohn",
    charNickname: "Neereem",
    charName: "Neereem Dinura",
    charImg: "img/min/Neereem.png",
    charRace: "Bothan",
    charClass: "Colonist",
    charTree: "Politico",
    id: "TF0"
    },
    {   
    pc: "@JesseCox",
    name: "Jesse",
    profilePic: "img/min/JesseCox.jpg", 
    twitter: "https://twitter.com/JesseCox",
    charNickname: "Wirbo",
    charName: "Wirbochuhr",
    charImg: "img/min/Wirbo.png",
    charRace: "Wookiee",
    charClass: "Hired Gun",
    charTree: "Mercenary",
    id: "TF1"
    },
    {   
    pc: "@crendor",
    name: "crendor",
    profilePic: "img/min/crendor.png", 
    twitter: "https://twitter.com/crendor",
    charNickname: "420",
    charName: "420-n0-sc0p3",
    charImg: "img/min/420.png",
    charRace: "B-1 Battle Droid",
    charClass: "Bounty Hunter",
    charTree: "Assassian",
    id: "TF2"
    },
    {   
    pc: "@MathasGames",
    name: "Mathas",
    profilePic: "img/min/MathasGames.jpg", 
    twitter: "https://twitter.com/MathasGames",
    charNickname: "Fitz",
    charName: "Thonk",
    charImg: "img/min/Fitz.png",
    charRace: "Human",
    charClass: "Technician",
    charTree: "Mechanic",
    id: "TF3"
    }
  ]
};
            

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
  // called the .movers by class as opposed to an allselector
  var items = document.getElementsByClassName('mover');
  // pulled the meat of the math out of the loop to avoid redundancies
  var sin = document.body.scrollTop / 1250;
  // you'll see most my loops count down; that is due to this liesure reading http://stackoverflow.com/questions/1340589/are-loops-really-faster-in-reverse

    var phase = [];
  
    for (var g = 3; g--;) {
      phase.push(Math.sin(sin + g) * 1125.2);
    }

    for (var i = items.length; i--;) {
      // items[i].style.left = items[i].basicLeft + phase [i % 3] + 'px';
    // it took me a long while to figure out for to both style.transform & 'phase' the .movers
      var shift = items[i].basicLeft + phase [i % 3] + 'px';
        items[i].style.transform = "translateX("+shift+") translateZ(0)";
              // console.log('shift = ', shift);
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
  var numberOfPizzas = height / s * cols;
  // reduced the number of .movers to the total you can see on screen
  for (var i = 0; i < numberOfPizzas; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    // Made the image smaller to not waste load time
    elem.src = "img/min/d20.png";
    // recentered the 18 .movers after i optimized the code
    elem.basicLeft = 950 - (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});

$(document).ready(function(){
    var game1Wheel = $('#game1Wheel');
    var game2Wheel = $('#game2Wheel');
    var EOMindicators = '<ol class="carousel-indicators"><li class="EOM0 active"></li><li class="EOM1"></li><li class="EOM2"></li><li class="EOM3"></li></ol>';
    var TFindicators = '<ol class="carousel-indicators"><li class="TF0 active"></li><li class="TF1"></li><li class="TF2"></li><li class="TF3"></li></ol>';
    var game1Meat = $('#game1Inner');
    var game2Meat = $('#game2Inner');

    game1Wheel.append(EOMindicators);
    game2Wheel.append(TFindicators);

    for (i= 0; i < game.playersEOM.length; i++) {
      var wheelItem = '<div id="' + game.playersEOM[i].id + '" class="item"><div class="col-md-6"><img src="' 
                      + game.playersEOM[i].profilePic + '" alt="' + game.playersEOM[i].name + '"><p><a href="' +
                      game.playersEOM[i].twitter + '">' + game.playersEOM[i].pc 
                      + '</a></p></div>' + '<div class="col-md-6"><img src="' + game.playersEOM[i].charImg + '" alt="' + game.playersEOM[i].charNickname +
                      '"><p><span>Name:</span> ' + game.playersEOM[i].charName + '</p><p><span>Race:</span> ' + game.playersEOM[i].charRace + 
                      '</p><p><span>Class:</span> ' + game.playersEOM[i].charClass + '</p></div></div>'
      game1Meat.append(wheelItem);
    };
    for (i= 0; i < game.playersTF.length; i++) {
      var wheel2Item = '<div id="' + game.playersTF[i].id + '" class="item"><div class="col-md-6"><img src="' 
                      + game.playersTF[i].profilePic + '" alt="' + game.playersTF[i].name + '"><p><a href="' +
                      game.playersTF[i].twitter + '">' + game.playersTF[i].pc 
                      + '</a></p></div>' + '<div class="col-md-6"><img src="' + game.playersTF[i].charImg + '" alt="' + game.playersTF[i].charNickname +
                      '"><p><span>Name:</span> ' + game.playersTF[i].charName + '</p><p><span>Race:</span> ' + game.playersTF[i].charRace + 
                      '</p><p><span>Class:</span> ' + game.playersTF[i].charClass + '</p><p><span>Specialization:</span> ' + game.playersTF[i].charTree + '</p></div></div>'
      game2Meat.append(wheel2Item);
    };

    $('#EOM0').addClass('active'); 
    $('#TF0').addClass('active'); 
    // Activate Carousel
    $('.carousel').carousel({interval: 1500});
    
    // Enable Carousel Indicators
    $(".EOM0").click(function(){
        $("#game1Wheel").carousel(0);
    });
    $(".EOM1").click(function(){
        $("#game1Wheel").carousel(1);
    });
    $(".EOM2").click(function(){
        $("#game1Wheel").carousel(2);
    });
    $(".EOM3").click(function(){
        $("#game1Wheel").carousel(3);
    });


    // $("#game2Wheel").carousel({interval: 1750});
    $(".TF0").click(function(){
        $("#game2Wheel").carousel(0);
    });
    $(".TF1").click(function(){
        $("#game2Wheel").carousel(1);
    });
    $(".TF2").click(function(){
        $("#game2Wheel").carousel(2);
    });
    $(".TF3").click(function(){
        $("#game2Wheel").carousel(3);
    });
});
    // $('.reddit-header').find('img').attr('src', 'img/min/LI_Reddit.png');
    $('.reddit-header').children('h4').html('');

