require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
 end

 def query_db sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result
end

 get '/motorcycles' do
    @motorcycles = query_db('SELECT * FROM motorcycle')

    # render the view
    erb :motorcycles_index
end

get '/motorcycles/new' do
    erb :motorcycles_new
end

post '/motorcycles' do
    # insert the new motorcycles into the database with data from params
    query = "INSERT INTO motorcycle(brand, year, color, body, price, image, description) 
    VALUES('#{ params[:brand]}','#{ params[:year]}','#{params[:color]}', 
    '#{ params[:body]}', '#{ params[:price]}', '#{ params[:image]}', '#{ params[:description]}')"
    
    query_db query

    # send them to the index page
    redirect to('/motorcycles')
end

get '/motorcycles/:id' do
    @motorcycle = query_db("SELECT * FROM motorcycle WHERE id = #{ params[:id] }")
    @motorcycle = @motorcycle.first
    erb :motorcycles_show
end

get '/motorcycles/:id/edit' do
    #get the motorcycles from the database
    @motorcycle = query_db "SELECT * FROM motorcycle WHERE id = #{ params[:id]}"
    @motorcycle = @motorcycle.first

    #render the form
    erb :motorcycles_edit
end

post '/motorcycles/:id' do
    # update the motorcycles details in the database
    query = "UPDATE motorcycle SET brand = '#{ params[:brand] }', year = #{ params[:year] }, 
    color = '#{ params[:color] }', body = '#{ params[:body] }', price = #{ params[:price] }, 
    image = '#{ params[:image] }', description = '#{ params[:description] }' WHERE id = #{ params[:id] }"

    puts query
    query_db query

    # redirect to the show page for this motorcycles
    redirect to("/motorcycles/#{ params[:id] }")
end

get '/motorcycles/:id/delete' do
    # delete the butterfly
    query = "DELETE FROM motorcycle WHERE id = #{params[:id]}"
    query_db query

    # redirect to the  
    redirect to('/motorcycles')
end