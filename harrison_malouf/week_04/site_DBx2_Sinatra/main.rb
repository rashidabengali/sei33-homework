require 'sinatra' #this allows us to use sinatra to communicate to the client and the DB
require 'sinatra/reloader' #sinatra will reload when we save updates (double check how it reloads)
require 'pry' #this allows us to use pry to get certain debugging methods
require 'sqlite3' #this allows us to use sqlite as a database that we can communicate with
require 'active_record' #Allows ruby to know we're using the library active record

# ActiveRecord::Base.establish_connection(
#   :adapter => 'sqlite3',
#   :database => 'database.sqlite3'
# )

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR) #not sure what this does

## Models
class Game < ActiveRecord::Base ##(capital G and no pulura of 's') Tell the ActiveRecord libaray which sql files we want it to go in.
end #speaks for itself

class Genre < ActiveRecord::Base
end

get '/' do #this here gives direction to to the code on where to look for the home page
  erb :home #a direct link to the home page we've created in views. Almost like a URL.
end

# INDEX -- show and link to all the butterflies in the database
get '/games' do
  @games = game.all #This allows us to do the forloop in index.
  erb :games_index #directs us to the index
end

# NEW -- show the user a form to enter a new butterfly
get '/games/new' do
  erb :games_new
end

# CREATE -- insert a new butterfly into the database from the actions of game_new
post '/games' do
  game = Game.new
  game.name = params[:name]
  game.release = params[:release]
  game.image = params[:image]
  game.save
   redirect to("/games/#{ game.id }") #get request
end

# SHOW -- show you all the info for a particular butterfly, based on its ID.
get '/games/:id' do
  @game = game.find params[:id]
  erb :games_show
end

# EDIT -- show the form to edit a particular existing butterfly
get '/games/:id/edit' do
  @game = game.find params[:id]
  erb :games_edit
end

# UPDATE -- update the database with new information for some particular butterfly
post '/games/:id' do
  game = Game.new
  game.name = params[:name]
  game.release = params[:release]
  game.image = params[:image]
  game.save
   redirect to("/games/#{ params[:id] }") #get request
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get 'games/:id/delete' do
  game = game.find params[:id]
  game.destory
  redirect to('/games')
end
