class SecretNumberController < ApplicationController

  def game
  end

  def result
    @secret_number = rand(1..10)
    @selected_number = params["number"].to_i
    if @selected_number == @secret_number
      render :win
    else
      render :lose
    end
  end


end
