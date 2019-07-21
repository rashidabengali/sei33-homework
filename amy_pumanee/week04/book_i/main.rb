require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title].capitalize
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get book_url
  @authors = @info["items"][0]["volumeInfo"]["authors"].join(', ')
  @cover_img = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  #binding.pry

  erb :result
end
