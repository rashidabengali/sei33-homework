Rails.application.routes.draw do
  get 'resorts/index'
  get 'resorts/new'
  get 'resorts/edit'
  get 'resorts/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :resorts
end
