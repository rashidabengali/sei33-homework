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

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Menu < ActiveRecord::Base
end

class Cuisine < ActiveRecord::Base
end

get '/' do
  erb :home
end

# INDEX -- show and link to all the menus in the database
get '/menus' do
  @menus = Menu.all
  erb :menus_index
end

# NEW
get '/menus/new' do
  erb :menus_new
end

# CREATE
post '/menus' do
  menu = Menu.new
  menu.name = params[:name]
  menu.methods = params[:methods]
  menu.image = params[:image]
  menu.save
  redirect to("menus/#{menu.id}")
end

# SHOW -- show you all the info for a particular menu, based on its ID.
get '/menus/:id' do
  @menu = Menu.find params[:id]
  erb :menus_show
end

# EDITE
get '/menus/:id/edit' do
  @menu = Menu.find params[:id]
  erb :menus_edit
end

# Update
post '/menus/:id' do
  menu = Menu.find params[:id]
  menu.name = params[:name]
  menu.methods = params[:methods]
  menu.image = params[:image]
  menu.save
  redirect to("menus/#{menu.id}")
end

# Destroy
get '/menus/:id/delete' do
  menu = Menu.find params[:id]
  menu.destroy
  redirect to('/menus')
end
#########################################
# INDEX
get '/cuisines' do
  @cuisines = Cuisine.all
  erb :cuisines_index
end

# NEW
get '/cuisines/new' do
  erb :cuisines_new
end

# CREATE
post '/cuisines' do
  cuisine = Cuisine.new
  cuisine.name = params[:name]
  cuisine.image = params[:image]
  cuisine.save
  redirect to("cuisines/#{cuisine.id}")
end

# SHOW
get '/cuisines/:id' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_show
end

# Edit
get '/cuisines/:id/edit' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_edit
end

# Update
post '/cuisines/:id' do
  cuisine = Cuisine.find params[:id]
  cuisine.name = params[:name]
  cuisine.image = params[:image]
  cuisine.save
  redirect to("cuisines/#{cuisine.id}")
end

# Destroy
get '/cuisines/:id/delete' do
  cuisine = Cuisine.find params[:id]
  cuisine.destroy
  redirect to('/cuisines')
end

after do
  ActiveRecord::Base.connection.close
end
