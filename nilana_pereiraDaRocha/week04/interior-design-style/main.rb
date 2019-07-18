require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'


get '/' do
  @interior_design_style = query_db 'SELECT * FROM interior_design_style'
  erb :home
end

get '/new' do
  erb :new
end

post '/' do
  query = "INSERT INTO interior_design_style (name, description, image) VALUES ('#{ params[:name] }', '#{ params[:description] }', '#{ params[:image] }')"
  query_db query
  redirect to('/') 
end


get '/:id' do
  @style = query_db "SELECT * FROM interior_design_style WHERE id = #{ params[:id] }"
  @style = @style.first 
  erb :show
end


get '/:id/edit' do
  
  @style = query_db "SELECT * FROM interior_design_style WHERE id = #{ params[:id] }"
  @style = @style.first
  erb :edit
end


post '/:id' do
  query = "UPDATE interior_design_style SET name='#{ params[:name] }', description='#{ params[:description] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/#{ params[:id] }")
end


get '/:id/delete' do
  query_db "DELETE FROM interior_design_style WHERE id = #{ params[:id] }"
  redirect to('/')
end

def query_db(sql_statement)
  puts sql_statement 
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
