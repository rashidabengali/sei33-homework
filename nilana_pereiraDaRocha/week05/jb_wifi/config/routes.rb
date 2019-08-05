# frozen_string_literal: true

Rails.application.routes.draw do
  get 'electronics/index'
  get 'electronics/new'
  get 'electronics/show'
  get 'electronics/edit'
  root to: 'brands#index'
  resources :brands
  resources :electronics
end
