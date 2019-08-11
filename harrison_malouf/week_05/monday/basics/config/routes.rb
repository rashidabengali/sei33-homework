Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Homepage

  root :to => 'pages#home'

  # get '/' => 'pages#home'

  #Secrete Number



  #Magic 8 ball

get '/8ball' => '8ball#magic_game'

  #Rock Paper Scissors

end
