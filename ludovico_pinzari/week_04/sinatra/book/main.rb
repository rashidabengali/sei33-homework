require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :form
end

get '/result' do

  @title = params[:title]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @info = HTTParty.get book_url
  binding.pry
  @cover_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @authors = @info["items"][0]["volumeInfo"]["authors"].join(",")
  @publisher = @info["items"][0]["volumeInfo"]["publisher"]
  @publishedDate = @info["items"][0]["volumeInfo"]["publishedDate"]
  @pageCount = @info["items"][0]["volumeInfo"]["pageCount"]
  @description = @info["items"][0]["volumeInfo"]["description"]

  erb :result

end
