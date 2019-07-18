require 'sinatra'
require 'sinatra/reloader'



get '/' do
  erb :index
end

get '/determine1' do
  @question = params[:question].capitalize
  @option1 = params[:option1].capitalize
  @option2 = params[:option2].capitalize
  @category = params[:category].capitalize
  erb :determine1
end


get '/determine2' do
  @question = params[:question].capitalize
  @option1 = params[:option1].capitalize
  @option2 = params[:option2].capitalize
  erb :determine2
end
