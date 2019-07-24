require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

# Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Game < ActiveRecord::Base # ..< .. = Inherits
end

class Category < ActiveRecord::Base
end


# Default Page = Home Page
get '/' do
  erb :home
end

# INDEX - show and link to all the games in the database
get '/games' do
  @games = Game.all
  erb :games_index
end

get '/games/new' do
  erb :games_new # Add new Games to the database
end

# CREATE -- Insert a new game into the database
# post '/games' do
# end
post '/games' do
  game = Game.new
  game.title = params[:title]
  game.genre = params[:genre]
  game.platform = params[:platfoem]
  game.image = params[:image]
  game.price = params[:price]
  game.save
  redirect to("/games/#{ game.id}") # GET request
end

# SHOW -- show you all the info for a particular butterfly, based on its ID.

get '/games/:id' do
  @games = game.find params[:id]
  erb :games_show
end

# EDIT -- show the form to edit a particular existing butterfly
get '/games/:id/edit' do
  @game = Game.find params[:id]
  erb :games_edit
end

# UPDATE -- update the database with new information for some particular butterfly
post '/games/:id' do
  game = Game.find params[:id]
  game.title = params[:title]
  game.genre = params[:genre]
  game.platform = params[:platform]
  game.image = params[:image]
  game.price = params[:price]
  game.save
  redirect to("/games/#{ params[:id] }")
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get '/games/:id/delete' do
  game = Game.find params[:id]
  game.destroy
  redirect to('/games')
end

# Category CRUD ###################################################

get '/category' do
  erb :category_new
end


after do
  ActiveRecord::Base.connection.close
end
