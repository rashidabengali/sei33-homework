# == Route Map
#
#      Prefix Verb URI Pattern            Controller#Action
# icons_index GET  /icons/index(.:format) icons#index
#   icons_new GET  /icons/new(.:format)   icons#new
#  icons_edit GET  /icons/edit(.:format)  icons#edit
#  icons_show GET  /icons/show(.:format)  icons#show
# notes_index GET  /notes/index(.:format) notes#index
#   notes_new GET  /notes/new(.:format)   notes#new
#  notes_edit GET  /notes/edit(.:format)  notes#edit
#  notes_show GET  /notes/show(.:format)  notes#show

Rails.application.routes.draw do
  root :to => 'notes#index'
  resources :notes
  resources :icons
end
