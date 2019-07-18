require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

# INDEX -- show and link to all the interior_design_style in the database
get '/' do
  @interior_design_style = query_db 'SELECT * FROM interior_design_style'
  erb :home
end

# NEW -- show the user a form to enter a new style
get '/new' do
  erb :new
end

# CREATE -- insert a new style into the database
post '/' do
  query = "INSERT INTO interior_design_style (name, description, image) VALUES ('#{ params[:name] }', '#{ params[:description] }', '#{ params[:image] }')"
  query_db query
  redirect to('/') # GET request
end

# SHOW -- show you all the info for a particular style, based on its ID.
get '/:id' do
  @style = query_db "SELECT * FROM interior_design_style WHERE id = #{ params[:id] }"
  @style = @style.first # Extract the single style hash from the array.
  erb :show
end

# EDIT -- show the form to edit a particular existing style
get '/:id/edit' do
  # get the style from the database
  @style = query_db "SELECT * FROM interior_design_style WHERE id = #{ params[:id] }"
  @style = @style.first
  # render the form
  erb :edit
end

# UPDATE -- update the database with new information for some particular style
post '/:id' do
  query = "UPDATE interior_design_style SET name='#{ params[:name] }', description='#{ params[:description] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/#{ params[:id] }")
end

# DESTROY -- delete the style with some style ID from the database
get '/:id/delete' do
  query_db "DELETE FROM interior_design_style WHERE id = #{ params[:id] }"
  redirect to('/')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
