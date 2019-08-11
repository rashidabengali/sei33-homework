class PickController < ApplicationController
  def form
  end


  def info

  @random_num = rand(1..10)

  @user_num = params[:number].to_i






end
end
