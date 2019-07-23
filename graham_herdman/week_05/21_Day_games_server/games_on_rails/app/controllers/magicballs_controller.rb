class MagicballsController < ApplicationController

  def form
  end

  def info
    answers = ["yes you are a shit", "why are you so shitty", "i guess you are less shitty", "you, you are ok... but still kind of shitty"]
    randomIndex = rand 0...answers.size
    @answer = answers[randomIndex]
  end

end
