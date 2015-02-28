describe('Bot', function() {
  var player, bot, game;
  beforeEach(function() {
    player = new Player("Pavel");
    bot = new Bot("Robo");
    game = new Game(player, bot);
  });

  it('should make a random choice', function() {
    available_choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    bot.TracingPlayerChoice('paper');
    bot.TracingPlayerChoice('paper');
    expect(available_choices).toContain(bot.picks());
  });

  it('should be able to win or lose', function() {
    player.picks('spock');
    bot.picks();                        //due to random nature of this function, test will fail sometimes
    expect(game.winner()).toBe(player); 
  });
});
