require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  erb :home
end

# show dino game
get "/dinosaurs/game" do
  erb :dinosaurs_game
end

# show the dinosaur index list
get "/dinosaurs" do
  @dinosaurs = query_db 'SELECT * FROM dinosaurs'
  @dinosaurs.to_s
  erb :dinosaurs_index
end

# show a new dino page
get "/dinosaurs/new" do
  erb :dinosaurs_new
end

# show the create page # just for experimentation, will be ported to the new page.
get "/dinosaurs/create" do
  erb :dinosaurs_create
end

# show a dinosaur from the index
get "/dinosaurs/:id" do
  @dinosaur = query_db "SELECT * FROM dinosaurs WHERE id = #{ params[:id] }"
  @dinosaur = @dinosaur.first
  erb :dinosaurs_show
end

# show the edit page
get "/dinosaurs/:id/edit" do
  @dinosaur = query_db "SELECT * FROM dinosaurs WHERE id = #{params[:id]}"
  @dinosaur = @dinosaur.first
  erb :dinosaurs_edit
end

# delete a dino entry
get '/dinosaurs/:id/delete' do
  query_db "DELETE FROM dinosaurs WHERE id=#{params[:id]}"
  redirect to('/dinosaurs')
end

# edit a dinosaur
post "/dinosaurs/:id" do
  query = "UPDATE dinosaurs SET nickname='#{ params[:nickname] }', genus='#{ params[:genus] }', family='#{ params[:family] }', height='#{ params[:height] }', eaten_by='#{ params[:eaten_by] }', diet='#{ params[:diet] }', image='#{ params[:image] }' WHERE id= #{ params[:id] }"
  query_db query
  redirect to("/dinosaurs/#{ params[:id] }")
end

# create a new dinosaur
post "/dinosaurs" do
  query = "INSERT INTO dinosaurs (nickname, genus, family, height, eaten_by, diet, image) VALUES ('#{ params[:nickname] }', '#{ params[:genus] }', '#{ params[:family] }', '#{ params[:height] }', '#{ params[:eaten_by] }', '#{ params[:diet] }', '#{ params[:image] }')"
  puts query
  query_db query
  redirect to('/dinosaurs')
end

# function for querying sqlite
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
