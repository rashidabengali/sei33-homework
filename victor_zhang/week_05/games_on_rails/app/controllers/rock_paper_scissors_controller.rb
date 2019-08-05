class RockPaperScissorsController < ApplicationController

  def game
  end

  def result

    ai = {
      1 => "rock",
      2 => "paper",
      3 => "scissors"
    }

    @ai_hand = ai[rand(1..3)]
    @p_hand = params[:hand]

    if @p_hand == @ai_hand
      render :draw
    elsif (@p_hand == 'rock' && @ai_hand == 'scissors')
      render :win
    elsif (@p_hand == 'paper' && @ai_hand == 'rock')
      render :win
    elsif (@p_hand == 'scissors' && @ai_hand == 'paper')
      render :win
    else
      render :lose
    end
  end

end
