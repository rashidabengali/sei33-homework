# == Route Map
#
#         Prefix Verb   URI Pattern                    Controller#Action
# theories_index GET    /theories/index(.:format)      theories#index
#   theories_new GET    /theories/new(.:format)        theories#new
#  theories_edit GET    /theories/edit(.:format)       theories#edit
#  theories_show GET    /theories/show(.:format)       theories#show
#           root GET    /                              scientists#index
#     scientists GET    /scientists(.:format)          scientists#index
#                POST   /scientists(.:format)          scientists#create
#  new_scientist GET    /scientists/new(.:format)      scientists#new
# edit_scientist GET    /scientists/:id/edit(.:format) scientists#edit
#      scientist GET    /scientists/:id(.:format)      scientists#show
#                PATCH  /scientists/:id(.:format)      scientists#update
#                PUT    /scientists/:id(.:format)      scientists#update
#                DELETE /scientists/:id(.:format)      scientists#destroy
#       theories GET    /theories(.:format)            theories#index
#                POST   /theories(.:format)            theories#create
#     new_theory GET    /theories/new(.:format)        theories#new
#    edit_theory GET    /theories/:id/edit(.:format)   theories#edit
#         theory GET    /theories/:id(.:format)        theories#show
#                PATCH  /theories/:id(.:format)        theories#update
#                PUT    /theories/:id(.:format)        theories#update
#                DELETE /theories/:id(.:format)        theories#destroy

Rails.application.routes.draw do
  root :to => 'scientists#index'
  resources :scientists
  resources :theories
end
