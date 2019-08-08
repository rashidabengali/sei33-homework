Rails.application.routes.draw do

  root :to => 'pages#home'

  get '/magic_ball/game' => 'magic_ball#game'
  get '/magic_ball/answer' => 'magic_ball#answer'


  get '/secret_number/game'=> 'secret_number#game'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors/game' => 'rock_paper_scissors#game'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
