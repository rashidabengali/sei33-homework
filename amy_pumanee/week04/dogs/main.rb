require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/dogs' do
  @dogs = query_db 'SELECT * FROM dogs'
  erb :dogs_index
end

# Add New dog
get '/dogs/new' do
  erb :dogs_new
end

# Create
post '/dogs' do
  query = "INSERT INTO dogs (name, breed, intro, image) VALUES ('#{params[:name]}', '#{params[:breed]}', '#{params[:intro]}', '#{params[:image]}' )"
  query_db query 
  redirect to('/dogs')
end

# show dog by ID
get '/dogs/:id' do
  dogs = query_db "SELECT * FROM dogs WHERE id=#{params[:id]}"
  @dog = dogs.first
  erb :dogs_show
end

# EDIT
get '/dogs/:id/edit' do
  @dog = query_db "SELECT * FROM dogs WHERE id = #{ params[:id] }"
  @dog = dogs.first
  # render the form
  erb :dogs_edit
end

# Update
post 'dogs/:id' do
  query = "UPDATE dogs SET name='#{params[:name]}',  breed='#{params[:breed]}', intro='#{params[:intro]}', image='#{params[:image]}' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/dogs/#{ params[:id] }")
end

# delete
get '/dogs/:id/delete' do
  query_db "DELETE FROM dogs WHERE id = #{params[:id]}"
  redirect to('/dogs')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
