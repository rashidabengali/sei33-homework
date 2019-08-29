Rails.application.routes.draw do
  # get 'proxy/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "proxy#index"

  get '/fetch' => "proxy#fetch"
end
