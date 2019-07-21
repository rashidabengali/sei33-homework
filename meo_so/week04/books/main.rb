require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

get '/' do
    erb :form
end

get '/result' do
    #get title
    @title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    @info = HTTParty.get book_url
    @real_title = @info["items"][0]["volumeInfo"]["title"]
    @cover_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @author = @info["items"][0]["volumeInfo"]["authors"]
    #get author
    #get img link
    erb :result
end