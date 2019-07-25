class RpsController < ApplicationController

  def form
  end

  def info
    @rules = {
      :rock => "paper",
      :paper => "scissors",
      :scissors => "rock"
    }
    choices = [:rock, :paper, :scissors]
    random = rand 0..2
    @computer_choice = choices[random]
  end

end
