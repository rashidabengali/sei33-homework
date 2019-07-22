require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end
