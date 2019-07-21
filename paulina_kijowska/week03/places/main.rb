require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end




get '/places' do
@places = query_db 'SELECT * FROM places'
erb :index
end


get '/places/new' do
erb :new
end


post '/places' do

  query = "INSERT INTO places (name, description, image) VALUES ( '#{ params[:name] }', '#{ params[:description] }', '#{ params[:image] }')"
  query_db query
  redirect to('/places')
end

get '/places/:id' do
  #fetch butterfly number ID from the Database#render the view
places = query_db "SELECT * FROM places WHERE id=#{ params[:id] }"
@place = places.first #Extract the single butterfly hash from the array.

erb :places_show
  #render the view
end

get '/places/:id/edit' do
# get the butterfly from the website
places = query_db "SELECT * FROM places WHERE id = #{params[:id]}"
@place = places.first
erb :places_edit
end



post '/places/:id' do
## update the butterfly details in the database with some butterfly ID from the database

query = "UPDATE places SET name='#{params[:name]}', description='#{params[:description]}' WHERE id=#{params[:id].to_i}"
query_db query
redirect to("/places/#{ params[:id] }")
#redirect to the show page for this butterfly
end
#DESTROY -- delete the butterfly with some butterly ID from the database


get '/places/:id/delete' do
# delete the Butterfly
query_db "DELETE FROM places WHERE id = #{ params[:id] }"
redirect to('/places')
#redirect to the butterflies
end


##function to repeat connecting to database
def query_db(sql_statement)

# @butterflies = query_db(sql_statement)
puts sql_statement
db = SQLite3::Database.new 'database.sqlite3'
db.results_as_hash = true
results = db.execute sql_statement
db.close
results #implicit return
end
