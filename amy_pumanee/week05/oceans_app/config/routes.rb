Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'beaches#index'
  get '/beaches' => 'beaches#index'
  get '/beaches/new' => 'beaches#new', :as => :new_beach
  post '/beaches' => 'beaches#create'
  get '/beaches/:id' => 'beaches#show', :as => :beach
  get '/beaches/:id/edit' => 'beaches#edit', :as => :edit_beach
  post '/beaches/:id' => 'beaches#update'
  delete '/beaches/:id' =>'beaches#destroy'
end
