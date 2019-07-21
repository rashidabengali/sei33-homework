require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/army' do
  @army = query_db 'SELECT * FROM army'
  erb :army_index
end

get '/army/new' do
  erb :army_new
end

post '/army' do
  sql = "INSERT INTO army (first_name, last_name, house, patronus, image) VALUES ('#{params[:first_name]}', '#{params[:last_name]}','#{params[:house]}','#{params[:patronus]}', '#{params[:image]}')"
  query_db sql
  redirect to("/army")
end

get '/army/:id' do
  @army = query_db "SELECT * FROM army WHERE id = #{ params[:id] }"
  @army = @army.first
  erb :army_show
end

get '/army/:id/edit' do
  @army = query_db  "SELECT * FROM army WHERE id = #{ params[:id] }"
  @army = @army.first
  erb :army_edit
end

post '/army/:id' do
  sql = "UPDATE army SET first_name = '#{params[:first_name]}', last_name = '#{params[:last_name]}', house = '#{params[:house]}', patronus = '#{params[:patronus]}', image = '#{params[:image]}' WHERE id= #{ params[:id] }"
  query_db sql
  redirect to("/army/#{ params[:id] }")
end

get '/army/:id/delete' do
query_db "DELETE FROM army WHERE id = #{ params[:id] }"
redirect "/army"
end



def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
