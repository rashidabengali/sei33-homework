Rails.application.routes.draw do
  # Root routes look a little different to other routes. This basically just says that requests to the "root" path (eg "/") are sent to the "pages" controller's "home" action.
  root :to => 'games#home'

    get '/magic' => 'magic#form'
    get '/magic/info' => 'magic#info'

    get '/pick' => 'pick#form'
    get '/pick/info' => 'pick#info'

    get '/rps' => 'rps#form'
    get '/rps/info' => 'rps#info'
end
