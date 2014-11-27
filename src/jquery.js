 $(document).ready(function() {
  
  $('.word1').fadeIn(1000);
  $('.word2').fadeIn(1500);
  $('.word3').fadeIn(2000);
  $('.word4').fadeIn(2500);
  $('.word5').fadeIn(3000);
  $('.choices').fadeIn(4500);

  $('.choice').hover(
    function(){
      $(this).children('p').fadeIn(500);
    },function(){
      $(this).children('p').fadeOut(500);
    }
  );

  var pavel = new Player('Pavel');
  var bot = new Bot('Alan');
  var game = new Game(pavel, bot);

  var makePick = function(userChoice) {
    pavel.picks(userChoice);
    bot.TracingPlayerChoice(userChoice);
    bot.picks()
  };

  var changeResultClasses = function () {
    $('#results li:nth-child(1)').addClass('element1');
    $('#results li:nth-child(2)').addClass('element2').removeClass('element1');
    $('#results li:nth-child(3)').addClass('element3').removeClass('element2');
    $('#results li:nth-child(4)').addClass('element4').removeClass('element3');
    $('#results li:nth-child(5)').addClass('element5').removeClass('element3');
    $('#results li:nth-child(5)').fadeOut( 750, removeResult);
  };

  var createResults = function () {
    var rendered = Mustache.render($('#list-item-template').html(),{message: game.winningMessage()})
    $(rendered).prependTo('#results').fadeIn(1500);
  };

  var removeResult = function() {
    $(this).remove();
  };

  var itemClicked = function() {
    var userChoice = $(this).data('pick');
    makePick(userChoice);
    createResults();
    changeResultClasses();
  };

  $('.choice').on('click', itemClicked);

});
