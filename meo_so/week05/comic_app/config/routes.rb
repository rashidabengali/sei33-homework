# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#        root GET    /                           comics#index
#      comics GET    /comics(.:format)           comics#index
#             POST   /comics(.:format)           comics#create
#   new_comic GET    /comics/new(.:format)       comics#new
#  edit_comic GET    /comics/:id/edit(.:format)  comics#edit
#       comic GET    /comics/:id(.:format)       comics#show
#             PATCH  /comics/:id(.:format)       comics#update
#             PUT    /comics/:id(.:format)       comics#update
#             DELETE /comics/:id(.:format)       comics#destroy
#     authors GET    /authors(.:format)          authors#index
#             POST   /authors(.:format)          authors#create
#  new_author GET    /authors/new(.:format)      authors#new
# edit_author GET    /authors/:id/edit(.:format) authors#edit
#      author GET    /authors/:id(.:format)      authors#show
#             PATCH  /authors/:id(.:format)      authors#update
#             PUT    /authors/:id(.:format)      authors#update
#             DELETE /authors/:id(.:format)      authors#destroy

Rails.application.routes.draw do
  root :to => 'comics#index'
  resources :comics
  resources :authors
end
