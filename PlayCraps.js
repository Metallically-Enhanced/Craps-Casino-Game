// Random number generator between min inclusive and max inclusive
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//Activation of game with button by refreshing the page.
function Refresh (){window.location.reload();}
//Mechanics of dice roll.
function play() {
    var die1 = getRandomNumber(1,6);
    var die2 = getRandomNumber(1,6);
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
    }
    document.write("Craps Casino")
    document.write("<br/>")
    play()