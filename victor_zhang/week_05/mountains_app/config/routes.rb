Rails.application.routes.draw do

  root :to => 'mountains#index'

  # INDEX of mountains
  get '/mountains' => 'mountains#index' # /mountains is the collection we are dealing with

  # NEW
  get '/mountains/new' => 'mountains#new', :as => :new_mountain

  # CREATE
  post '/mountains' => 'mountains#create'

  # SHOW
  get '/mountains/:id' => 'mountains#show', :as => :mountain

  # DELETE
  delete '/mountains/:id' => 'mountains#destroy'

  # EDIT
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain

  # UPDATE
  post '/mountains/:id' => 'mountains#update'




end
