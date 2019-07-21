require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
 erb :index
end

get '/result' do

@title = params[:movie_title]
movie_url = "http://www.omdbapi.com/?apikey=672e704c&t=#{ @title }"
@data = HTTParty.get movie_url;

@fulltitle = @data["Title"]
@year = @data["Year"]
@poster = @data["Poster"]
# @author = @data["items"][0]["volumeInfo"]["authors"][0]
# @publisher = @data["items"][0]["volumeInfo"]["publisher"]
# @published_date = @data["items"][0]["volumeInfo"]["publishedDate"]
# @description = @data["items"][0]["volumeInfo"]["description"]
# @cover_image = @data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]


 erb :result

 #make sure to capitalize the result.
end
