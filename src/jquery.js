 $(document).ready(function() {
        $('.word1').fadeIn(1000);
        $('.word2').fadeIn(1500);
        $('.word3').fadeIn(2000);
        $('.word4').fadeIn(2500);
        $('.word5').fadeIn(3000);
        $('.choices').fadeIn(4500);

        var pavel = new Player('Pavel');
        var bot = new Bot('Alan');
        var game = new Game(pavel, bot);
        $('.choice').hover(
          function(){
            $(this).children('p').fadeIn(500);
          },function(){
            $(this).children('p').fadeOut(500);
          }
        );

        $('.choice').on('click', function() {
          var userChoice = $(this).data('pick')
          pavel.picks(userChoice);
          bot.TracingPlayerChoice(userChoice);
          bot.picks();
            $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn(1500);
            $('#results li:nth-child(1)').addClass('element1');
            $('#results li:nth-child(2)').addClass('element2').removeClass('element1');
            $('#results li:nth-child(3)').addClass('element3').removeClass('element2');
            $('#results li:nth-child(4)').addClass('element4').removeClass('element3');
            $('#results li:nth-child(5)').addClass('element5').removeClass('element3');
           $('#results li:nth-child(5)').fadeOut( 750, function () {
               $(this).remove();
             });
        });

      });
