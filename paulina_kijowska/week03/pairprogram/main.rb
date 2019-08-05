require 'sinatra'
require 'sinatra/reloader'
# require 'stock_quote'
require 'pry'


get '/' do
  puts  "Are you tired?"
  erb :home
end

get '/test' do
  puts  "Go to sleep!!"
  erb :test
end
get '/test1' do

  erb :test1
end

get '/cssyes' do

  erb :cssyes
end

get '/cssno' do

  erb :cssno
end
