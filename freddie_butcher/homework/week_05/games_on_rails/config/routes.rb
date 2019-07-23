Rails.application.routes.draw do

root :to => 'pages#home'
get '/home' => 'pages#home'

get '/magic' => 'magic#game'
get '/magic/result' => 'magic#result'

get '/secnum' => 'secnum#game'
get '/secnum/result' => 'secnum#true'
get '/secnum/result' => 'secnum#false'


get '/rps' => 'rps#game'

end
