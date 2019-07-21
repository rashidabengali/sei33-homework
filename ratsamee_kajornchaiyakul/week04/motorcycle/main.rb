require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

#  def query_db sql_statement
#     db = SQLite3::Database.new 'database.sqlite3'
#     db.results_as_hash = true
#     result = db.execute sql_statement
#     db.close
#     result
# end

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Motorcycle < ActiveRecord::Base
end

class Part < ActiveRecord::Base
end

get '/' do
    erb :home
end

get '/motorcycles' do
    @motorcycles = Motorcycle.all

    # render the view
    erb :motorcycles_index
end

get '/motorcycles/new' do
    erb :motorcycles_new
end

post '/motorcycles' do
    motorcycle = Motorcycle.new
    motorcycle.brand = params[:brand]
    motorcycle.year = params[:year]
    motorcycle.color = params[:color]
    motorcycle.body = params[:body]
    motorcycle.price = params[:price]
    motorcycle.image = params[:image]
    motorcycle.description = params[:description]
    motorcycle.save

    # send them to the index page
    redirect to('/motorcycles')
end

get '/motorcycles/:id' do
    @motorcycle = Motorcycle.find params[:id]
    erb :motorcycles_show
end

get '/motorcycles/:id/edit' do
    #get the motorcycles from the database
    @motorcycle = Motorcycle.find params[:id]

    #render the form
    erb :motorcycles_edit
end

post '/motorcycles/:id' do
    # update the motorcycles details in the database
    motorcycle = Motorcycle.find params[:id]
    motorcycle.brand = params[:brand]
    motorcycle.year = params[:year]
    motorcycle.color = params[:color]
    motorcycle.body = params[:body]
    motorcycle.price = params[:price]
    motorcycle.image = params[:image]
    motorcycle.description = params[:description]
    
    motorcycle.save

    # redirect to the show page for this motorcycles
    redirect to("/motorcycles/#{ params[:id] }")
end

get '/motorcycles/:id/delete' do
    # delete the butterfly
    motorcycle = Motorcycle.find params[:id]
    motorcycle.destroy

    # redirect to the  
    redirect to('/motorcycles')
end

############ Parts ##############
get '/parts' do
    @parts = Part.all

    # render the view
    erb :parts_index
end

get '/parts/new' do
    erb :parts_new
end

get '/parts/:id' do
    @part = Part.find params[:id]
    erb :parts_show
end

get '/parts/:id/edit' do
    #get the motorcycles from the database
    @part = Part.find params[:id]

    #render the form
    erb :parts_edit
end

post '/parts' do
    part = Part.new
    part.partNumber = params[:partNumber]
    part.name = params[:name]
    part.price = params[:price]
    part.image = params[:image]
    part.description = params[:description]
    part.save

    # send them to the index page
    redirect to('/parts')
end

post '/parts/:id' do
    # update the motorcycles details in the database
    part = Part.find params[:id]
    part.partNumber = params[:partNumber]
    part.name = params[:name]
    part.price = params[:price]
    part.image = params[:image]
    part.description = params[:description]
    part.save

    # redirect to the show page for this motorcycles
    redirect to("/parts/#{ params[:id] }")
end

get '/parts/:id/delete' do
    # delete the butterfly
    part = Part.find params[:id]
    part.destroy

    # redirect to the  
    redirect to('/parts')
end