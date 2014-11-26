 $(document).ready(function() {
        var pavel = new Player('Pavel');
        var bot = new Bot('Alan');
        var game = new Game(pavel, bot);

        $('.choices img').on('click', function() {
          var userChoice = $(this).data('pick')
          pavel.picks(userChoice);
          bot.TracingPlayerChoice(userChoice);
          bot.picks();
            $('<li>' + game.winningMessage() + '</li>').prependTo('#results').fadeIn();
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