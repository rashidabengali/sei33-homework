class MagicBallController < ApplicationController



  def game
  end

  def answer

    answers = {
      1 => "As I see it, yes",
      2 => "It is certain",
      3 => "It is decidedly so",
      4 => "Most likely",
      5 => "Outlook good",
      6 => "Signs point to yes",
      7 => "Without a doubt",
      8 => "Yes",
      9 => "Yes – definitely",
      10 => "You may rely on it",
      11 => "Reply hazy, try again",
      12 => "Ask again later",
      13 => "Better not tell you now",
      14 => "Cannot predict now",
      15 => "Concentrate and ask again",
      16 => "Don’t count on it",
      17 => "My reply is no",
      18 => "My sources say no",
      19 => "Outlook not so good",
      20 => "Very doubtful"
    }

    @answer = answers[rand(1..20)]
  end

end
