require 'sqlite3'           # Sqlite3 for our database
require 'pry'               # Pry for debugging
require 'sinatra'           # Sinatra for our web server
require 'sinatra/reloader'  # Sinatra Reloader so we don't need to keep restarting our server



get '/' do
  @paintings = query_db 'SELECT * FROM paintings'
  erb :home
end

get '/add_painting' do
  erb :add_painting
end

post '/painting_save' do
  query = "INSERT INTO paintings (painting_name,artist_name,year,location,dimention,medium,image) VALUES('#{params[:panting_name]}','#{params[:artist_name]}','#{params[:year]}','#{params[:location]}','#{params[:dimention]}','#{params[:medium]}','#{params[:image]}')"
  query_db query
  redirect to ('/')
end

get '/painting/:id/delete' do
  query_db "DELETE FROM paintings WHERE id = #{params[:id]}"
  redirect to('/')
end
get '/painting/:id/edit' do
 @painting = query_db "SELECT * FROM paintings WHERE id = #{params[:id]}"
  @painting = @painting.first
  erb :painting_edit
end

post '/painting/:id' do
  query = "UPDATE paintings SET painting_name='#{params[:painting_name]}',artist_name='#{params[:artist_name]}',year='#{params[:year]}',location='#{params[:location]}',dimention='#{params[:dimention]}',medium='#{params[:medium]}',image='#{params[:image]}' WHERE id = #{params[:id]}"
  query_db query
  redirect to ("/")
end


def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
