# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#       teams GET    /teams(.:format)            teams#index
#             POST   /teams(.:format)            teams#create
#    new_team GET    /teams/new(.:format)        teams#new
#   edit_team GET    /teams/:id/edit(.:format)   teams#edit
#        team GET    /teams/:id(.:format)        teams#show
#             PATCH  /teams/:id(.:format)        teams#update
#             PUT    /teams/:id(.:format)        teams#update
#             DELETE /teams/:id(.:format)        teams#destroy
#     players GET    /players(.:format)          players#index
#             POST   /players(.:format)          players#create
#  new_player GET    /players/new(.:format)      players#new
# edit_player GET    /players/:id/edit(.:format) players#edit
#      player GET    /players/:id(.:format)      players#show
#             PATCH  /players/:id(.:format)      players#update
#             PUT    /players/:id(.:format)      players#update
#             DELETE /players/:id(.:format)      players#destroy

Rails.application.routes.draw do
  root :to => 'players#index'
  resources :teams
  resources :players
end
