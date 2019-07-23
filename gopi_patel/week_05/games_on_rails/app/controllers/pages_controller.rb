# frozen_string_literal: true

class PagesController < ApplicationController
  def home
    render :home
  end

  def magic8
    @question = params[:question]
    array = ['It is certain.', 'It is decidedly so.', ' Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As see it, yes. Most likely.', 'Outlook good Yes.', 'Signs point to yes.', 'Reply hazy, try again.', ' Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
    item = array[rand(array.length)]
    @message = item
    render :magic8
  end

  def secret_number
      @user_number = params[:number].to_i
      @ai_nummber = rand(1..10)
      if @user_number != @ai_nummber
        render :lost
      else
        render :win
    end
  end


  def rps
    array = %w(rock paper scissor)
    @user_move = params[:user_turn]
    @ai_move = array[rand(array.length)]
    if (@ai_move == "paper" && @user_move == "rock" )|| (@ai_move == "rock" && @user_move == "scissor") || (@ai_move == "scissor" && @user_move == "paper")
      @result = "AI winner"
      @winner_image = @ai_move
    elsif (@ai_move == "rock" && @user_move == "paper") || (@ai_move == "paper" && @user_move == "scissor") || (@ai_move == "scissor" && @user_move == "rock")
      @result = "user win"
      @winner_image = @user_move
    else
      @winner_image = "playagain"
      @result = "Draw"
    end
    render :rps
  end
end
