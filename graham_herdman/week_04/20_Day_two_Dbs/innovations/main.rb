require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

# #1 active_record and DB stuff ################################################
# set up connection between active record and database
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# logs the activity of the database
ActiveRecord::Base.logger = Logger.new(STDERR)
################################################################################

# #2 Models ####################################################################

# set up inventions class to send sql commands to inventions db
class Inventor < ActiveRecord::Base
end

# set up inventor class to send sql commands to inventors db
class Invention < ActiveRecord::Base
end

################################################################################

# #3 Common pages ##############################################################

# home: get request
get "/" do
  erb :home
end

# #4 inventors pages ###########################################################
# 1. INDEX - inventors: get request
get "/inventors" do
  @inventors = Inventor.all
  erb :inventors_index
end

# 2. NEW -- show the user a form to enter a new Inventor
get '/inventors/new' do
  erb :inventors_new
end

# 3. CREATE -- insert a new inventor into the database
post "/inventors" do
  inventor = Inventor.new
  inventor.name = params[:name]
  inventor.invention = params[:invention]
  inventor.image = params[:image]
  inventor.save
  redirect to("/inventors/#{ inventor.id }")
end

# 4. SHOW -- show you all the info for a particular inventor based on it's id
get "/inventors/:id" do
  @inventor = Inventor.find params[:id]
  erb :inventors_show
end

# 5. EDIT -- show the form to edit a particular existing inventor
get '/inventors/:id/edit' do
  @inventor = Inventor.find params[:id]
  erb :inventors_edit
end

# 6. DESTROY -- delete the inventor with some inventor ID from the database
get '/inventors/:id/delete' do
  inventor = Inventor.find params[:id]
  inventor.destroy
  redirect to('/inventors')
end

# 7. UPDATE -- update the database with new information for some particular
post '/inventors/:id' do
  id = params[:id]
  inventor = Inventor.find id
  inventor.name = params[:name]
  inventor.invention = params[:invention]
  inventor.image = params[:image]
  inventor.save
  redirect to("/inventors/#{ id }")
end
################################################################################

# #5 inventions pages ###########################################################
# 1. INDEX - inventions: get request
get "/inventions" do
  @inventions = Invention.all
  erb :inventions_index
end

# 2. NEW -- show the user a form to enter a new invention
get '/inventions/new' do
  erb :inventions_new
end

# 3. CREATE -- insert a new invention into the database
post "/inventions" do
  invention = Invention.new
  invention.name = params[:name]
  invention.inventor = params[:inventor]
  invention.description = params[:description]
  invention.image = params[:image]
  invention.save
  redirect to("/inventions/#{ invention.id }")
end

# 4. SHOW -- show you all the info for a particular invention based on it's id
get "/inventions/:id" do
  @invention = Invention.find params[:id]
  erb :inventions_show
end

# 5. EDIT -- show the form to edit a particular existing invention
get '/inventions/:id/edit' do
  @invention = Invention.find params[:id]
  erb :inventions_edit
end

# 6. DESTROY -- delete the invention with some invention ID from the database
get '/inventions/:id/delete' do
  invention = Invention.find params[:id]
  invention.destroy
  redirect to('/inventions')
end

# 7. UPDATE -- update the database with new information for some particular
post '/inventions/:id' do
  id = params[:id]
  invention = Invention.find id
  invention.name = params[:name]
  invention.inventor = params[:inventor]
  invention.description = params[:description]
  invention.image = params[:image]
  invention.save
  redirect to("/inventions/#{ id }")
end
###############################################################################
