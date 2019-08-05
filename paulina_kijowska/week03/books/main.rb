require 'sinatra'
require 'sinatra/reloader'
# require 'stock_quote'
require 'httparty'
require 'pry'





get '/' do
    "Another string"
  erb :form
end

get '/books' do

@title = params[:title].capitalize
@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
@info = HTTParty.get@book_url;
@cover_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :books
end
