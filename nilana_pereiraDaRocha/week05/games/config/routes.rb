# frozen_string_literal: true

Rails.application.routes.draw do
  # Root routes look a little different to other routes. This basically just says that requests to the "root" path (eg "/") are sent to the "pages" controller's "home" action.
  root to: 'pages#home'

  # STATIC ROUTES
  # request_type route => controller#action
  get '/home' => 'pages#home'
  get '/question/:question' => 'pages#question'
  get '/secret-number' => 'pages#secret_number'
  get '/secret-number/:chosen_number' => 'pages#secret_number'

  # DYNAMIC ROUTES WITH VARIABLE BITS IN PARAMS (JUST LIKE SINATRA)
  get '/auto/:color' => 'auto#color'
end
