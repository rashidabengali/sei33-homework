Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'
  get '/magic' => 'magic#game'
  get '/magic/result' => 'magic#result'
  get '/secret' => 'secret#game'
  get '/secret/result' => 'secret#result'
  get '/rock' => 'rock#game'
  get '/rock/result' => 'rock#result'
end
