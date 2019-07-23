Rails.application.routes.draw do

  # Common pages
  root :to => 'mountains#index'

  # mountains pages
  get '/mountains' => 'mountains#index' # 1. INDEX
  get '/mountains/new' => 'mountains#new', :as => :new_mountain # 2. NEW #specific
  get '/mountains/:id' => 'mountains#show', :as => :mountain # 3. SHOW
  post '/mountains' => 'mountains#create' # 4. CREATE
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain # 5. EDIT
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'

end
