# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                architects GET    /architects(.:format)                                                                    architects#index
#                           POST   /architects(.:format)                                                                    architects#create
#             new_architect GET    /architects/new(.:format)                                                                architects#new
#            edit_architect GET    /architects/:id/edit(.:format)                                                           architects#edit
#                 architect GET    /architects/:id(.:format)                                                                architects#show
#                           PATCH  /architects/:id(.:format)                                                                architects#update
#                           PUT    /architects/:id(.:format)                                                                architects#update
#                           DELETE /architects/:id(.:format)                                                                architects#destroy
#                    houses GET    /houses(.:format)                                                                        houses#index
#                           POST   /houses(.:format)                                                                        houses#create
#                 new_house GET    /houses/new(.:format)                                                                    houses#new
#                edit_house GET    /houses/:id/edit(.:format)                                                               houses#edit
#                     house GET    /houses/:id(.:format)                                                                    houses#show
#                           PATCH  /houses/:id(.:format)                                                                    houses#update
#                           PUT    /houses/:id(.:format)                                                                    houses#update
#                           DELETE /houses/:id(.:format)                                                                    houses#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  root :to => 'houses#index'
resources :architects
resources :houses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
