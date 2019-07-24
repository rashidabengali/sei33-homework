Rails.application.routes.draw do
  root :to => "pages#home"

  # Magic 8 ball
  get '/magic_8_ball' => "magic#magic_index"
  get '/magic/magic_answer' => "magic#magic_answer"
  
  # Secret number
  get '/secret_number' => "secret_number#secret_index"
  get '/secret_number/secret_answer' => "secret_number#secret_answer"

  # Rock Paper Scissors
  get '/rock' => "rock#rock_index"
  get '/rock/rock_answer' => "rock#rock_answer"
end
