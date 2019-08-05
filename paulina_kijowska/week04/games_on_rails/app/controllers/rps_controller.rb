class RpsController < ApplicationController
  def form

@rsp = ["rock", "scissors", "paper"]

end
def info
  @rsp = ["rock", "scissors", "paper"]

  @user_opt = params[:numer]

  end
end



###works but this is not the correct way of doing it 
