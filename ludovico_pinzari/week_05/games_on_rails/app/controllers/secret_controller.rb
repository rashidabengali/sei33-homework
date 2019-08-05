class SecretController < ApplicationController

  def game
    render :game
  end

  def result
    @guess = params[:guess].to_i
    @random = rand 1..10
    if @guess == @random
      @result = 'Congratulations. You Win!'
    else
      @result = 'Wrong Guess. You Lose!'
    end
    render :result
  end
end
