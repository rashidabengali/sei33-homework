# frozen_string_literal: true

class PagesController < ApplicationController
  # Define a method (or "action") called "home" in this controller.
  def home; end

  # Magic 8 Ball - OK
  # http://localhost:3000/question/Are%20you%20okay?
  def question
    @question = params[:question]
    @answer = %w[yes no].sample
  end

  # Secret number - OK
  def secret_number
    @win_or_lose = 'lose'
    @chosen_number = params[:chosen_number].to_i
    if @chosen_number > 0
      @randon_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample
      @win_or_lose = 'win' if @randon_number == @chosen_number
    end
  end
end
