class SecretController < ApplicationController
  def home
    render :home
  end

  def result
    num = rand(1..10)
    if params[:guess] == num
      @result = "correct!, correct num is #{ num }, you guessed #{ params[:guess] }"
    elsif
      @result = "incorrect :(, correct num is #{ num }, you guessed #{ params[:guess] }"
    end
    render :result
  end

end
