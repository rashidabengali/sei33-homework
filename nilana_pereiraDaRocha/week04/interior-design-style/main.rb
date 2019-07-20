require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'


# Rails will do this for you automatically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

class InteriorDesignStyle < ActiveRecord::Base
end

#home okay 
get '/' do
  @interior_design_style = InteriorDesignStyle.all
  erb :home
end

 #new okay 
get '/new' do
  erb :new
end

post '/' do
  interior_design_style = InteriorDesignStyle.new
  interior_design_style.name = params[:name]
  interior_design_style.description = params[:description]
  interior_design_style.image = params[:image]
  interior_design_style.save
  redirect to("/#{interior_design_style.id}") 
end

get '/:id' do
  @style = InteriorDesignStyle.find params[:id] 
  erb :show
end

get '/:id/edit' do
  
  @style = InteriorDesignStyle.find params[:id] 
  erb :edit
end

post '/:id' do
  interior_design_style = InteriorDesignStyle.find params[:id]
  interior_design_style.name = params[:name]
  interior_design_style.description = params[:description]
  interior_design_style.image = params[:image]
  interior_design_style.save
  redirect to("/#{ params[:id] }")
end

get '/:id/delete' do
  interior_design_style = InteriorDesignStyle.find params[:id]
  interior_design_style.destroy
  redirect to('/')
end

after do
  ActiveRecord::Base.connection.close
end
