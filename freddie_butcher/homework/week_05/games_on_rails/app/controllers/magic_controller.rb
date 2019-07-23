class MagicController < ApplicationController

  # Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.

  def game

    render :game
  end

  def result
    @magic = params[:magic]

@answers = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]

    render :result
  end

end
