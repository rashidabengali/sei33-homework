require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do # get the form html page
  erb :form
end

get "/result" do

  @title = params[:book_input]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @info = HTTParty.get book_url

  @title = @info["items"][0]["volumeInfo"]["title"]
  @result = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result
end
