$(document).ready(function(){

    var random, score, gem1, gem2, gem3, gem4;
    var wins = 0;
    var losses = 0;

    function reset(){
        random = Math.floor(Math.random() * 102) + 19;
        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        gem3 = Math.floor(Math.random() * 12) + 1;
        gem4 = Math.floor(Math.random() * 12) + 1;
        score = 0;
        $('.randomNum').text(random)
        $('.gemscore').text(score)
    }

    reset ();

    $('.gems').on('click', "button", function() {
        var input = $(this).attr('value');
        console.log("The gem you clicked was " + input);

        switch ($(this).attr('value')) {
            case "ruby":
                score += gem1;
                $('.gemscore').text(score)
                break;
            case "diamond":
                score += gem2;
                $('.gemscore').text(score)
                break;
            case "topaz":
                score += gem3;
                $('.gemscore').text(score)
                break;
            case "emerald":
                score += gem4;
                $('.gemscore').text(score)
                break;
            default:
                break;
        };

        if (score === random) {
            wins++
            $('.gemscore').text(score)
            console.log(wins)
            $('.wins').text("Wins: " + wins)
            alert("You win, congratulations!")
            reset();
        };
        if (score > random) { 
            losses++
            $('.gemscore').text(score)
            console.log(losses)
            $('.losses').text("Losses: " + losses)
            alert("You lost, better luck next round!")
            reset();
        };
        
    });

});