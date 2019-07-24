class RockController < ApplicationController

  def game
    render :game
  end

  def result
    @throw = params[:throw].upcase
    play = ["ROCK", "PAPER", "SCISSORS"]
    @match = play.sample
    if @match == @throw
      @result = "draw"
    elsif @match == "ROCK" && @throw == "PAPER"
      @result = "You win"
    elsif @match == "PAPERS" && @throw == "SCISSORS"
      @result = "You win"
    elsif @match == "SCISSORS" && @throw == "ROCK"
      @result = "You win"
    elsif @match == "ROCK" && @throw == "SCISSORS"
      @result = "You lost"
    elsif @match == "SCISSORS" && @throw == "PAPERS"
      @result = "You lost"
    elsif @match == "PAPER" && @throw == "ROCK"
      @result = "You lost"
    end
    render :result
  end

end
