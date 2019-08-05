class RpsController < ApplicationController
  def home
  end

  def result
    options = ["rock", "paper", "scissors"]
    user_throw = params[:throw]
    app_throw = options[rand(0..(options.length - 1))]
    if user_throw == "rock"
      if app_throw == "paper"
        win = "l";
      elsif app_throw == "scissors"
        win = "w";
      else
        win = "d";
      end
    elsif user_throw == "paper"
      if app_throw == "paper"
        win = "d";
      elsif app_throw == "scissors"
        win = "l";
      else
        win = "l";
      end
    elsif user_throw == "scissors"
      if app_throw == "paper"
        win = "w";
      elsif app_throw == "scissors"
        win = "d";
      else
        win = "l";
      end
    end

    if win == "w"
      @result = "#{ user_throw } beats #{ app_throw }. User WINS!"
    elsif win == "l"
      @result = "#{ app_throw } beats #{ user_throw }. User LOSES!"
    else
      @result = "#{ app_throw } equals #{ user_throw }. DRAW!"
    end

  end
end
