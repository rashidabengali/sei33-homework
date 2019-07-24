require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

# Sets up our connection to the database.db we have created
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Logs out the Active Record generated SQL in the terminal. (Optional)
ActiveRecord::Base.logger = Logger.new(STDERR)

# This will create a Footballer/Team model, mapped to a footballers/teams table at the database (follow the naming conventions in the documentation !!). By doing this you'll also have the ability to map the columns of each row in that table with the attributes of the instances of your model. (Footballer and Team are subclasses of ActiveRecord)

class Footballer < ActiveRecord::Base
  belongs_to :team, :optional => true
end

class Team < ActiveRecord::Base
  has_many :footballers 
end

# GET requests to the root path (localhost:456). No connection to the database required here. (home.erb)
get '/' do
  erb :home
end

# GET requests to the /footballers path - this will be the index of all the records in our 'footballers' table

# INDEX -- show and link to all the footballers in the footballers table.
get '/footballers' do
  @footballers = Footballer.all
  erb :footballers_index
end

# NEW -- show the user a form to enter a new footballer
get '/footballers/new' do
  erb :footballers_new
end

# CREATE -- insert a new footballer into the database
post '/footballers' do
  footballer = Footballer.new
  footballer.name = params[:name]
  footballer.position = params[:position]
  footballer.image = params[:image]
  footballer.save
  redirect to("/footballers/#{ footballer.id }") # GET request
end

# SHOW -- show you all the info for a particular footballer, based on its ID.
get '/footballers/:id' do
  @footballer = Footballer.find params[:id]
  erb :footballers_show
end

# EDIT -- show the form to edit a particular existing footballer
get '/footballers/:id/edit' do
  @footballer = Footballer.find params[:id]
  erb :footballers_edit
end

# UPDATE -- update the database with new information for some particular footballer
post '/footballers/:id' do
  footballer = Footballer.find params[:id]
  footballer.name = params[:name]
  footballer.position = params[:position]
  footballer.image = params[:image]
  footballer.save
  redirect to("/footballers/#{ params[:id] }")
end

# DESTROY -- delete the footballer with some footballer ID from the database
get '/footballers/:id/delete' do
  footballer = Footballer.find params[:id]
  footballer.destroy
  redirect to('/footballers')
end

# Team CRUD ##################################################################

# INDEX
get '/teams' do
  @teams = Team.all
  erb :teams_index
end

# NEW -- show the user a form to enter a new team
get '/teams/new' do
  erb :teams_new
end

# CREATE -- insert a new team into the database
post '/teams' do
  team = Team.new
  team.name = params[:name]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{ team.id }") # GET request
end

# SHOW -- show you all the info for a particular team, based on its ID.
get '/teams/:id' do
  @team = Team.find params[:id]
  erb :teams_show
end

# EDIT -- show the form to edit a particular existing team
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

# UPDATE -- update the database with new information for some particular team
post '/teams/:id' do
  team = Team.find params[:id]
  team.name = params[:name]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{ params[:id] }")
end

# DESTROY -- delete the team with some team ID from the database
get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to('/teams')
end

after do
  ActiveRecord::Base.connection.close
end
