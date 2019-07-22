require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :form
end


get '/books' do
  @title = params[:book_name]
  begin
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    @books =   HTTParty.get book_url
  rescue
    redirect to('/')
  end
  erb :books
end

get '/book_info/:id' do
  @id = params[:id]
  begin
    book_info_url = "https://www.googleapis.com/books/v1/volumes/#{@id}"
    @bookinfo = HTTParty.get book_info_url
  rescue
    redirect to('/')
  end
  erb :book_info
end
