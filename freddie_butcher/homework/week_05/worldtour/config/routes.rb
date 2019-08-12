Rails.application.routes.draw do
  root :to => "bikes#index"
  resources :bikes
  resources :teams
end
