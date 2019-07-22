require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection (
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class XXXXXXXXX

# HOME
get '/' do
  erb :home
end

# INDEX
get '/bikes' do
    @bikes = bike.all
  erb :index
end

# NEW
get '/bikes/new' do
  erb :new
end

# SHOW
get '/bikes/:id' do
    @bike = Bike.find params[:id]
    # @bike = @bike.first
  erb :show
end


# EDIT
get '/bikes/:id/edit' do
  @bike = query_db "SELECT * FROM bikes WHERE id = #{ params[:id] }"
  @bike = @bike.first
  erb :edit
end

# DATABASE-----------

# CREATE
post '/bikes' do
  bike = bike.new
  bike.brand = params[:brand]
  bike.model = params[:model]
  XXXXXXXXX
  # query = "INSERT INTO bikes (brand, model, year, image) VALUES ('#{ params[:brand] }', '#{ params[:model] }', '#{ params[:year] }', '#{ params[:image] }')"
  # query_db query
  redirect to ('/bikes')
end

# UPDATE
post '/bikes' do
  query = "UPDATE bikes SET brand='#{ params[:brand] }', model='#{ params[:model] }', year='#{ params[:year] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/bikes/#{ params[:id] }")
end

# DESTROY

XXXXX
  get '/bikes/:id/delete' do
    query_db "DELETE FROM bikes WHERE id = #{ params[:id] }"
    redirect to('/bikes')
  end


REMOVE
def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
