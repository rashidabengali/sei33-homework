# == Route Map
#
#           Prefix Verb   URI Pattern                      Controller#Action
#        countries GET    /countries(.:format)             countries#index
#                  POST   /countries(.:format)             countries#create
#      new_country GET    /countries/new(.:format)         countries#new
#     edit_country GET    /countries/:id/edit(.:format)    countries#edit
#          country GET    /countries/:id(.:format)         countries#show
#                  PATCH  /countries/:id(.:format)         countries#update
#                  PUT    /countries/:id(.:format)         countries#update
#                  DELETE /countries/:id(.:format)         countries#destroy
#     destinations GET    /destinations(.:format)          destinations#index
#                  POST   /destinations(.:format)          destinations#create
#  new_destination GET    /destinations/new(.:format)      destinations#new
# edit_destination GET    /destinations/:id/edit(.:format) destinations#edit
#      destination GET    /destinations/:id(.:format)      destinations#show
#                  PATCH  /destinations/:id(.:format)      destinations#update
#                  PUT    /destinations/:id(.:format)      destinations#update
#                  DELETE /destinations/:id(.:format)      destinations#destroy

Rails.application.routes.draw do

  resources :countries

  resources :destinations

end
