Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/magic' => 'magic#form'
  get '/magic/info' => 'magic#info'

  root '/index' => 'pages#index'

  get '/index' => 'pages#index'

  get '/answers' => 'pages#answers'

  get '/magic' => 'pages#magic'
  # get '/secret' => 'secret#form'
  # get '/secret/info' => 'secret#info' # Display the secret numbers
  #
  #
  # get '/rock' => 'rock#form' # Not a form, Make it 2 inputs and an output
  # get '/rock/info' => 'rock#info'


end
