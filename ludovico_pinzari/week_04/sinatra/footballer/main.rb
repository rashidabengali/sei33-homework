require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX -- show and link to all the butterflies in the database (GET default)
get '/footballers' do
  @footballers = query_db 'SELECT * FROM footballers'
  erb :footballers_index
end

# NEW -- show the user a form to enter a new footballer in the database
get '/footballers/new' do
  erb :footballers_new
end

# CREATE -- insert a new footballer into the database
post '/footballers' do
  query = "INSERT INTO footballers (name, team, image) VALUES ('#{ params[:name] }', '#{ params[:team] }', '#{ params[:image] }')"
  query_db query
  redirect to('/footballers') # GET request (INDEX SECTION)
end

# SHOW -- show you all the info for a particular footballer, based on its ID.
get '/footballers/:id' do
  @footballer = query_db "SELECT * FROM footballers WHERE id=#{ params[:id] }"
  @footballer = @footballer.first # Extract the single footballer hash from the array.
  erb :footballers_show
end

# EDIT -- show the form to edit a particular existing butterfly
get '/footballers/:id/edit' do
  # get the footballer from the database
  @footballer = query_db "SELECT * FROM footballers WHERE id = #{ params[:id] }"
  @footballer = @footballer.first
  # render the form
  erb :footballers_edit
end

# UPDATE -- update the database with new information for some particular footballer
# try an image https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/KL-2018_%284%29.jpg/220px-KL-2018_%284%29.jpg
post '/footballers/:id' do
  query = "UPDATE footballers SET name='#{ params[:name] }', team='#{ params[:team] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/footballers/#{ params[:id] }")
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get '/footballers/:id/delete' do
  query_db "DELETE FROM footballers WHERE id = #{ params[:id] }"
  redirect to('/footballers')
end



# TO INTERACT WITH THE DB
def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
