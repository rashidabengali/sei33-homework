# == Route Map
#
#        Prefix Verb URI Pattern              Controller#Action
#  movies_index GET  /movies/index(.:format)  movies#index
#    movies_new GET  /movies/new(.:format)    movies#new
#   movies_edit GET  /movies/edit(.:format)   movies#edit
#   movies_show GET  /movies/show(.:format)   movies#show
#  actors_index GET  /actors/index(.:format)  actors#index
#    actors_new GET  /actors/new(.:format)    actors#new
#   actors_edit GET  /actors/edit(.:format)   actors#edit
#   actors_show GET  /actors/show(.:format)   actors#show
# artists_index GET  /artists/index(.:format) artists#index
#   artists_new GET  /artists/new(.:format)   artists#new
#  artists_edit GET  /artists/edit(.:format)  artists#edit
#  artists_show GET  /artists/show(.:format)  artists#show

Rails.application.routes.draw do
  root :to => 'movies#index'
  resources :actors
  resources :movies
end
