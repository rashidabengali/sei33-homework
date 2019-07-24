require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

# Default Page = Home Page
get '/' do
  erb :home
end

# INDEX - show and link to all the games in the database
get '/games' do
  @games = query_db 'SELECT * FROM games'
  erb :games_index
end

get '/games/new' do
  erb :games_new # Add new Games to the database
end

# CREATE -- Insert a new game into the database
# post '/games' do
# end


# SHOW -- show you all the info for a particular butterfly, based on its ID.

get '/games/:id' do
  @games = query_db "SELECT * FROM games WHERE id = #{ params[:id]}"
  @games = @games.first
  erb :games_show
end

# EDIT -- show the form to edit a particular existing butterfly
get '/games/:id/edit' do
  @games = query_db "SELECT * FROM games WHERE id = #{params[:id]}"
  @games = @games.first
  erb :games_edit
end

# UPDATE -- update the database with new information for some particular butterfly
post '/games/:id' do
  query = "UPDATE games SET title='#{ params[:title] }', genre='#{ params[:genre] }', platform='#{params[:platform]}', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/games/#{ params[:id] }")
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get '/games/:id/delete' do
  query_db "DELETE FROM games WHERE id = #{ params[:id] }"
  redirect to('/games')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
