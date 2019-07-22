require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'





get '/' do
  erb :home
end

get '/results' do
  @title = params[:book_name]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get book_url;



  # binding.pry

  @cover_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @author = @info["items"][0]["volumeInfo"]["authors"]
  @published_date = @info["items"][0]["volumeInfo"]["publishedDate"]
  @description = @info["items"][0]["volumeInfo"]["description"]


  erb :results
end
