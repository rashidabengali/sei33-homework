require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# navigate to home
get "/" do
  erb :home
end

# INDEX -- show and link to Most hated things
get "/hated_things" do
  @hated_things = query_db 'SELECT * FROM hated_things'
  erb :hated_things
end

# Enter a new most hated thing
get "/hated_things_new" do
  erb :hated_things_new
end

# CREATE - insert a new hated thing
post '/hated_things' do
  query = "INSERT INTO hated_things (thing, why, image) VALUES ('#{ params[:thing] }', '#{ params[:why] }', '#{ params[:image] }')"
  query_db query
  redirect to('/hated_things') # GET request
end

# SHOW -- show all the info for a particular hated thing
get '/hated_things/:id' do
  @hate = query_db "SELECT * FROM hated_things WHERE id=#{ params[:id] }"
  @hate = @hate.first
  erb :hated_things_show
end

# EDIT -- show the form to edit a particular existing thing
get "/hated_things/:id/edit" do
  # get the butterfly from the database
  @hate = query_db "SELECT * FROM hated_things WHERE id = #{ params[:id] }"
  @hate = @hate.first
  # render the form
  erb :hated_things_edit
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get '/hated_things/:id/delete' do
  # delete the butterfly
  query_db "DELETE FROM hated_things WHERE id = #{ params[:id] }"
  redirect to('/hated_things')
end

# UPDATE -- update the database with new information for some particular butterfly
post '/hated_things/:id' do
  # update the butterfly details in the database
  query = "UPDATE hated_things SET thing='#{ params[:thing] }', why='#{ params[:why] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/hated_things/#{ params[:id] }")
end


# FUNCTIONS: query #############################################################
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
