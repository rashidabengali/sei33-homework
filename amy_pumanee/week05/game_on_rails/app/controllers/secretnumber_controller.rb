class SecretnumberController < ApplicationController
  def play
  end

  def result
      guess_number = params[:guess_number].to_i

      if @guess_number == rand(1..10)
         @answer = 'WIN'
      else
         @answer = 'LOSE'
      end

    end


end
