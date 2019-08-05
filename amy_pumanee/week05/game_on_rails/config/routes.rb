Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

# Magic 8 Ball
  get '/magic8ball' => 'magic8ball#play'
  get '/magic8ball/result' => 'magic8ball#result'

# Secret Number
  get '/secretnumber' => 'secretnumber#play'
  get '/secretnumber/result' => 'secretnumber#result'

# Rock Paper Scissors
  get '/rock_paper_scissors' => '/rock_paper_scissors#play'
  get '/rock_paper_scissors/result' => '/rock_paper_scissors#result'

end
