$(document).ready(function() {
  $('.word1').fadeIn(1000);
  $('.word2').fadeIn(1500);
  $('.word3').fadeIn(2000);
  $('.word4').fadeIn(2500);
  $('.word5').fadeIn(3000);
  $('.name-entry').fadeIn(4500);

  var loadChoices = function() {
    $('.choices').fadeIn(2000);
  };

  var hideForm = function() {
    $('.name-entry').slideUp(1000);
  };

  $('.choice').hover(
    function(){
      $(this).children('p').fadeIn(500);
    },function(){
      $(this).children('p').fadeOut(500);
    }
  );

  var nameTrigger = function() {
    player.setName($('#username').val());
    hideForm();
    loadChoices();
  };

  $("#username").keydown(function( event ) {
    if ( event.which == 13 ) {
      nameTrigger();
    }
  });

  $('#submit').on('click', function() {
    nameTrigger();
  });

  var player = new Player("");
  var bot = new Bot('Mr Bot');
  var game = new Game(player, bot);

  var makePick = function(userChoice) {
    player.picks(userChoice);
    bot.TracingPlayerChoice(userChoice);
    bot.picks();
  };

  var changeResultClasses = function () {
    $('#results li:nth-child(1)').animate({
      "top": "+=130px",
      "width": "60%"
    });
    $('#results li:nth-child(1)').addClass('element2').removeClass('element1');
    $('#results li:nth-child(2)').animate({
      "top": "+=110px"
    });
    $('#results li:nth-child(2)').addClass('element3').removeClass('element2');
    $('#results li:nth-child(3)').animate({
      "top": "+=100px"
    });
    $('#results li:nth-child(3)').addClass('element4').removeClass('element3');
    $('#results li:nth-child(4)').animate({
      "top": "+=90px"
    });
    $('#results li:nth-child(4)').addClass('element5').removeClass('element4');
    $('#results li:nth-child(4)').fadeOut( 750, removeResult);
  };

  var createResults = function () {
    var rendered = Mustache.render($('#list-item-template').html(),{message: game.winningMessage()});
    $(rendered).prependTo('#results').fadeIn(1500);
  };

  var removeResult = function() {
    $(this).remove();
  };

  var itemClicked = function() {
    var userChoice = $(this).data('pick');
    makePick(userChoice);
    changeResultClasses();
    createResults();
    $('#results li:nth-child(1)').addClass('element1');
  };

  $('.choice').on('click', itemClicked);
});