# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.

class SecnumController < ApplicationController
  def game

    comp_num = rand(10)

    guess = gets.to_i

    if guess == comp_num
      redirect to :/
    else
      redirect to /secnum

    render :game
  end

  def result
    render :result
  end
end
