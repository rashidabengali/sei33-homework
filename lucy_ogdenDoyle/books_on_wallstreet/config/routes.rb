Rails.application.routes.draw do
  root :to => "pages#home"
  get "/books" => "books#home"
  get "/books/result" => "books#result"

  get "/stocks" => "stocks#home"
  get "/stocks/result" => "stocks#result"
end
