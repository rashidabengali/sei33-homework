Rails.application.routes.draw do

  # General pages
  root :to => 'pages#home'

  # 8 Ball
  get '/magicballs' => 'magicballs#form'
  get '/magicballs/info' => 'magicballs#info'

  # secret number
  get '/secret_number' => 'secret_number#form'
  get '/secret_number/throw' => 'secret_number#info'

  # Rock Paper Scissors
  get '/rps' => 'rps#form'
  get '/rps/info' => 'rps#info'







end
