require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  erb :home
end

# Show list of all entries
get '/blog_entries' do
  @entries = query_db "SELECT * FROM blog_notes"
  erb :blog_entries
end

get '/blog_entry/new' do
  erb :blog_entry_new
end

# SHOW selected entry from ALL ENTRIES
get '/blog_entry/:id' do
  # binding.pry
  @entry = query_db "SELECT * FROM blog_notes WHERE id = #{ params[:id] }"

  @entry = @entry.first
  # binding.pry
  erb :blog_entry
end

post '/blog_entry' do
  query = "INSERT INTO blog_notes (title, entry_date, entry, image, tags) VALUES ('#{ params[:title] }', '#{ params[:entry_date] }', '#{ params[:entry] }', '#{ params[:image] }', '#{ params[:tags] }')"
  query_db query

  redirect to('/blog_entries')
  # redirect to("/blog_entry/#{ params[:id] }") #cant because the id has not been sent as a params
end

# EDIT
get '/blog_entry/:id/edit' do
  @entry = query_db "SELECT * FROM blog_notes WHERE id = #{ params[:id] }"
  @entry = @entry.first

  erb :blog_entry_edit
end

# DELETE
get '/blog_entry/:id/delete' do
  query_db "DELETE FROM blog_notes WHERE id = #{ params[:id] }"
  redirect to('/blog_entries')
end

post '/blog_entry/:id' do

  query = "UPDATE blog_notes SET title='#{ params[:title] }', entry_date='#{ params[:entry_date] }', entry='#{ params[:entry] }', image='#{ params[:image] }', tags='#{ params[:tags] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/blog_entry/#{ params[:id] }")
end


def query_db sql_statement
  puts sql_statement # For debugging

  # connect to database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true #instead of get a return array of array, get an array of hash

  # run sql statement from the database
  results = db.execute sql_statement

  db.close
  results # implicit return
end
