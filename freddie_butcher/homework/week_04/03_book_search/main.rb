require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb:form
end



get '/results' do

  # begin

    @book_search = params[:book_search]

    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_search}"

    @info = HTTParty.get book_url

    @cover_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    # @info = HTTParty.get('https://www.googleapis.com/books/v1/volumes?q=title:"jaws"')["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  # rescue
  #   redirect to ('/')
  # end
  erb :results
end
