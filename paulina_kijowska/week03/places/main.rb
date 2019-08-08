require 'sinatra'
require 'sinatra/reloader'
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
class Place < ActiveRecord::Base
end

class Visit < ActiveRecord::Base
end


get '/' do
  erb :home
end




get '/places' do
@places = Place.all
erb :index
end


get '/places/new' do
erb :new
end


post '/places' do

  place = Place.new
  place.name = params[:name]
  place.description = params[:description]
  place.image = params[:image]
  place.save

  redirect to("/places/#{ place.id }")
end

get '/places/:id' do
  #fetch butterfly number ID from the Database#render the view
@place = Place.find params[:id]

erb :places_show
  #render the view
end

get '/places/:id/edit' do
@place = Place.find params[:id]
erb :places_edit
end



post '/places/:id' do


place = Place.find params[:id]
place.name = params[:name]
place.description = params[:description]
place.image = params[:image]
place.save

redirect to("/places/#{ params[:id] }")

end



get '/places/:id/delete' do


place = Place.find params[:id]
place.destroy
redirect to('/places')
#redirect to the butterflies
end

get '/visits' do
  @visits = Visit.all
  erb :visits_index
end

get '/visits/new' do
erb :visits_new
end

post '/visits' do
visit = Visit.new
visit.name = params[:name]
visit.image = params[:image]
visit.save
redirect to ("/visits/#{ visit.id }")
end

get '/visits/:id' do
  @visit = Visit.find params[:id]
  erb :visits_show
end

get '/visits/:id/edit' do
  @visit = Visit.find params[:id]
  erb :visits_edit
end

post '/visits/:id' do
  visit = Visit.find params[:id]
visit.name = params[:name]
visit.image = params[:image]
visit.save
redirect to ("/visits/#{ visit.id }")
end

get '/visits/:id/delete' do
  visit = Visit.find params[:id]
  visit.destroy
  redirect to('/visits')
end

after do
  ActiveRecord::Base.connection.close
end
