require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
 erb :index
end

get '/result' do

@title = params[:book_title].capitalize
book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
@data = HTTParty.get book_url;

@fulltitle = @data["items"][0]["volumeInfo"]["title"]
@author = @data["items"][0]["volumeInfo"]["authors"][0]
@publisher = @data["items"][0]["volumeInfo"]["publisher"]
@published_date = @data["items"][0]["volumeInfo"]["publishedDate"]
@description = @data["items"][0]["volumeInfo"]["description"]
@cover_image = @data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]


 erb :result

 #make sure to capitalize the result.
end
