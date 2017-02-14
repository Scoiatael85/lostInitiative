var game = {
    "playersEOM": [{
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
    "playersTF": [{
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

$(document).ready(function() {
    var game1Wheel = $('#game1Wheel');
    var game2Wheel = $('#game2Wheel');
    var EOMindicators = '<ol class="carousel-indicators"><li class="EOM0 active"></li><li class="EOM1"></li><li class="EOM2"></li><li class="EOM3"></li></ol>';
    var TFindicators = '<ol class="carousel-indicators"><li class="TF0 active"></li><li class="TF1"></li><li class="TF2"></li><li class="TF3"></li></ol>';
    var game1Meat = $('#game1Inner');
    var game2Meat = $('#game2Inner');

    game1Wheel.append(EOMindicators);
    game2Wheel.append(TFindicators);

    for (i = 0; i < game.playersEOM.length; i++) {
        var wheelItem = '<div id="' + game.playersEOM[i].id + '" class="item"><div class="col-md-6 col-sm-6 col-xs-12"><img class="center-block img-responsive PC" src="' +
            game.playersEOM[i].profilePic + '" alt="' + game.playersEOM[i].name + '"><p><a href="' +
            game.playersEOM[i].twitter + '">' + game.playersEOM[i].pc +
            '</a></p></div>' + '<div class="col-md-6 col-sm-6 col-xs-12"><img class="center-block img-responsive PC" src="' + game.playersEOM[i].charImg + '" alt="' + game.playersEOM[i].charNickname +
            '"><p><span>Name:</span> ' + game.playersEOM[i].charName + '</p><p><span>Race:</span> ' + game.playersEOM[i].charRace +
            '</p><p><span>Class:</span> ' + game.playersEOM[i].charClass + '</p></div></div>'
        game1Meat.append(wheelItem);
    };
    for (i = 0; i < game.playersTF.length; i++) {
        var wheel2Item = '<div id="' + game.playersTF[i].id + '" class="item"><div class="col-md-6 col-sm-6 col-xs-12"><img class="center-block img-responsive PC" src="' +
            game.playersTF[i].profilePic + '" alt="' + game.playersTF[i].name + '"><p><a href="' +
            game.playersTF[i].twitter + '">' + game.playersTF[i].pc +
            '</a></p></div>' + '<div class="col-md-6 col-sm-6 col-xs-12"><img class="center-block img-responsive PC" src="' + game.playersTF[i].charImg + '" alt="' + game.playersTF[i].charNickname +
            '"><p><span>Name:</span> ' + game.playersTF[i].charName + '</p><p><span>Race:</span> ' + game.playersTF[i].charRace +
            '</p><p><span>Class:</span> ' + game.playersTF[i].charClass + '</p><p><span>Spec:</span> ' + game.playersTF[i].charTree + '</p></div></div>'
        game2Meat.append(wheel2Item);
    };

    $('#EOM0').addClass('active');
    $('#TF0').addClass('active');
    // Activate Carousel
    $('.carousel').carousel({
        interval: 1500
    });

    // Enable Carousel EoM Indicators
    $(".EOM0").click(function() {
        $("#game1Wheel").carousel(0);
    });
    $(".EOM1").click(function() {
        $("#game1Wheel").carousel(1);
    });
    $(".EOM2").click(function() {
        $("#game1Wheel").carousel(2);
    });
    $(".EOM3").click(function() {
        $("#game1Wheel").carousel(3);
    });

    // Enable Carousel tF Indicators
    $(".TF0").click(function() {
        $("#game2Wheel").carousel(0);
    });
    $(".TF1").click(function() {
        $("#game2Wheel").carousel(1);
    });
    $(".TF2").click(function() {
        $("#game2Wheel").carousel(2);
    });
    $(".TF3").click(function() {
        $("#game2Wheel").carousel(3);
    });
});
$('.reddit-header').children('h4').html('');

$('#bannerShow').click(function() {
    if ($(window).width() < 770) {
        $('#show1, #show2').slideToggle();
    }
});
$('#bannerTwitch').click(function() {
    if ($(window).width() < 770) {
        $('.twitch').slideToggle();
    }
});
$('#bannerTwitter').click(function() {
    $('#feedTwitter').slideToggle();
        if ($("#twitterBox").height() == 438) {
           $("#twitterBox").animate(
               {height: "98px"});
           }
        else if ($("#twitterBox").height() == 21) {
           $("#twitterBox").animate({height: "515"});
           }
});
$('#bannerReddit').click(function() {
    $('#feedReddit').slideToggle();
        if ($("#redditBox").height() == 438) {
           $("#redditBox").animate(
               {height: "98px"});
           }
        else if ($("#redditBox").height() == 21) {
           $("#redditBox").animate({height: "515px"});
           }
});

// Iterator for number of times the d20 in the background have scrolled.
var frame = 0;

// Moves the sliding background dice based on scroll position
function updatePositions() {
    frame++;
    var items = $('.mover');
    var sin = $('body').scrollTop() / 1250;
    var phase = [];

    for (var g = 3; g--;) {
        phase.push(Math.sin(sin + g) * 1125.2);
    }

    for (var i = items.length; i--;) {
        var shift = items[i].basicLeft + phase[i % 3] + 'px';
        items[i].style.transform = "translateX(" + shift + ") translateZ(0)";
    }
}

// runs updatePositions on scroll
window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updatePositions);
});

// Generates the sliding dice when the page loads.
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    var height = self.innerHeight;
    var numberOfPizzas = height / s * cols;
    for (var i = 0; i < numberOfPizzas; i++) {
        var elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "img/min/d20.png";
        elem.basicLeft = 950 - (i % cols) * s;
        elem.style.top = (Math.floor(i / cols) * s) + 'px';
        document.querySelector("#movingPizzas1").appendChild(elem);
    }
    updatePositions();
});