require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
  )


ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Planet < ActiveRecord::Base
end

class Moon < ActiveRecord::Base
end

get '/' do 
    erb :home
end

# Index: show all planets and link to them
get '/planets' do
    @planets = Planet.all
    erb :planets_index
end

# New add new planet to DB
get '/planets/new' do 
    erb :planets_new
end


# Show detail on particular planet
get '/planets/:id' do 
    @planet = Planet.find params[:id]
    erb :planets_show
end

# Create: Insert new planet to DB
post '/planets' do
    planet = Planet.new
    planet.name = params[:name]
    planet.mass = params[:mass]
    planet.num_moons = params[:num_moons]
    planet.image = params[:image]
    planet.save
    redirect to("/planets/#{ planet.id }")  #request id from DB
end

# Edit: show the form to edit a planet
get '/planets/:id/edit' do
    @planet = Planet.find params[:id]
    erb :planets_edit
end

# Update 
post '/planets/:id' do
    planet = Planet.find params[:id]
    planet.name = params[:name]
    planet.mass = params[:mass]
    planet.num_moons = params[:num_moons]
    planet.image = params[:image]
    planet.save
    redirect to("/planets/#{ params[:id] }")
end

# Destroy 
get '/planets/:id/delete' do 
    planet = Planet.find params[:id]
    planet.destroy
    redirect to ('/planets')
end

##########################
# Show
get '/moons' do 
    @moons = Moon.all
    erb :moons_index
end

# New 
get '/moons/new' do
    erb :moons_new
end

# Create
post '/moons' do
    # insert the new butterfly into the database with data from params
    # send them to the index page
    moon = Moon.new
    moon.name = params[:name]
    moon.mass = params[:mass]
    moon.image = params[:image]
    moon.save
    redirect to("/moons/#{ moon.id }") # GET request
end

# Show 
get '/moons/:id' do 
    @moon = Moon.find params[:id]
    erb :moons_show
end

# Edit
get '/moons/:id/edit' do
    @moon = Moon.find params[:id]
    erb :moons_edit
end

#Update 
post '/moons/:id' do
    moon = Moon.find params[:id]
    moon.name = params[:name]
    moon.mass = params[:mass]
    moon.image = params[:image]
    moon.save
    redirect to("/moons/#{ moon.id }")
end

get '/moons/:id/delete' do
    moon = Moon.find params[:id]
    moon.destroy
    redirect to('/moons')
end