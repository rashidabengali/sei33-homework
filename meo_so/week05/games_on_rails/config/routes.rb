Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic' => 'magic#index'
  get '/magic/result' => 'magic#result'
  
  get '/secret' => 'secret#index'
  get '/secret/result' => 'secret#result'

  get '/rps' => 'rps#index'
  get '/rps/result' => 'rps#result'
end
