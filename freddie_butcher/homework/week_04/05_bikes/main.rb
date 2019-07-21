require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Bike < ActiveRecord::Base
end

class Team < ActiveRecord::Base
end

# HOME
get '/' do
  erb :home
end

# INDEX
get '/bikes' do
    @bikes = Bike.all
  erb :bikes_index
end

# NEW
get '/bikes/new' do
  erb :bikes_new
end

# CREATE
post '/bikes' do
  bike = Bike.new
  bike.brand = params[:brand]
  bike.model = params[:model]
  bike.year = params[:year]
  bike.image = params[:image]
  bike.save
  redirect to ("/bikes/#{ bike.id }")
end

# SHOW
get '/bikes/:id' do
    @bike = Bike.find params[:id]
  erb :bikes_show
end


# EDIT
get '/bikes/:id/edit' do
  @bike = Bike.find params[:id]
  erb :bikes_edit
end

# UPDATE
post '/bikes/:id' do
  bike = Bike.find params[:id]
  bike.brand = params[:brand]
  bike.model = params[:model]
  bike.year = params[:year]
  bike.image = params[:image]
  bike.save
  redirect to("/bikes/#{ bike.id }")
end

# DESTROY

  get '/bikes/:id/delete' do
  bike = Bike.find params[:id]
  bike.destroy
  redirect to('/bikes')
  end

# TEAM SECTION

# INDEX
get '/teams' do
    @teams = Team.all
  erb :teams_index
end

# NEW
get '/teams/new' do
  erb :teams_new
end

# CREATE
post '/teams' do
  team = Team.new
  team.name = params[:name]
  team.brand = params[:brand]
  team.country = params[:country]
  team.logo = params[:logo]
  team.save
  redirect to ("/teams/#{ team.id }")
end

# SHOW
get '/teams/:id' do
    @team = Team.find params[:id]
  erb :teams_show
end


# EDIT
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

# UPDATE
post '/teams/:id' do
  team = Team.find params[:id]
  team.name = params[:name]
  team.brand = params[:brand]
  team.country = params[:country]
  team.logo = params[:logo]
  team.save
  redirect to("/teams/#{ team.id }")
end

# DESTROY

  get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to('/teams')
  end

after do
  ActiveRecord::Base.connection.close
end
