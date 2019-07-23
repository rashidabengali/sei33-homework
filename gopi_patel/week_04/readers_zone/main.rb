require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'sqlite3'
require 'active_record'

# Rails will do this for you automatically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class User < ActiveRecord::Base
end

class Favourite < ActiveRecord::Base
end


get '/' do
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

get '/signup' do
  erb :signup
end

get '/login' do
  erb :login
end
