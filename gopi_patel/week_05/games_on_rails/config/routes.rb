Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to =>'pages#home'
get '/magic8/:question' => 'pages#magic8'
get '/secret_number/:number' => 'pages#secret_number'
get '/rps/:user_turn' => 'pages#rps'

end
