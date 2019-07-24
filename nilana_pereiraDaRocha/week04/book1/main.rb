# myapp.rb
require 'sinatra'
require 'httparty'
require 'sinatra/reloader'
require 'pry'

# get '/' do
#     'Welcome booklist!'
# end

get '/' do
    erb :home
end

get '/result' do
    @title = params[:title]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@title}")
    @books = response["items"]

    erb :result
end