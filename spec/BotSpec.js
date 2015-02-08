describe('Bot', function() {
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
    bot.picks();
    expect(game.winner()).toBe(bot);
  });
});
