require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'


# Establish connection whilst using Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

## Create Classes
class Blog_notes < ActiveRecord::Base
end

class Project < ActiveRecord::Base
end

class Version < ActiveRecord::Base
end


## Blog Entries ###########################################################
get '/' do
  erb :home
end

# List of all entries
get '/blog_entries' do
  @entries = Blog_notes.all
  erb :blog_entries
end

# NEW
get '/blog_entry/new' do
  erb :blog_entry_new
end

# SHOW selected entry from ALL ENTRIES
get '/blog_entry/:id' do
  # binding.pry
  @entry = Blog_notes.find params[:id]

  # binding.pry
  erb :blog_entry
end

# CREATE
post '/blog_entry' do
  entry = Blog_notes.new
  entry.title = params[:title]
  entry.entry_date = params[:entry_date]
  entry.entry = params[:entry]
  entry.image = params[:image]
  entry.tags = params[:tags]
  entry.save

  redirect to("/blog_entry/#{ entry.id }")
  # redirect to("/blog_entry/#{ params[:id] }") #cant because the id has not been sent as a params
end

# EDIT
get '/blog_entry/:id/edit' do
  @entry = Blog_notes.find params[:id]

  erb :blog_entry_edit
end

# DELETE
get '/blog_entry/:id/delete' do
  entry = Blog_notes.find params[:id]
  entry.destroy
  redirect to('/blog_entries')
end

# UPDATE
post '/blog_entry/:id' do

  entry = Blog_notes.find params[:id]
  entry.title = params[:title]
  entry.entry_date = params[:entry_date]
  entry.entry = params[:entry]
  entry.image = params[:image]
  entry.tags = params[:tags]
  entry.save
  redirect to("/blog_entry/#{ params[:id] }")
end

## Projects ################################################################

# INDEX
get '/projects/' do
  @projects = Project.all
  @versions = Version.all
  # binding.pry
  erb :projects
end

# CREATE NEW
get '/project/new' do
  erb :project_new
end

post '/project/' do
  project = Project.new
  project.name = params[:name]
  project.entry_date = params[:entry_date]
  project.link = params[:link]
  project.tags = params[:tags]
  project.save
  version = Version.new
  version.project_name = params[:name]
  version.version = params[:version]
  version.image = params[:image]
  version.save
  redirect to("/project/#{ project.id }/#{ version.id }")
end

get '/project/:id/:vid/delete' do
  version = Version.find params[:vid]
  version.destroy
  redirect to('/projects/')
end

# NEW Version
get '/project/:id/update/' do
  # binding.pry
  @project = Project.find params[:id]
  erb :project_update
end

get '/project/:id/:vid/edit' do
  @project = Project.find params[:id]
  @version = Version.find params[:vid]
  erb :project_edit
end

# SHOW
get '/project/:id/:vid' do
  # binding.pry
  @project = Project.find params[:id]
  @version = Version.find params[:vid]
  erb :project_view
end

post '/project/:id/version-update/' do
  project = Project.find params[:id]
  version = Version.new
  # binding.pry
  version.project_name = params[:name]
  version.version = params[:version]
  version.image = params[:image]
  version.save
  redirect to("/project/#{ project.id }/#{ version.id }")
end

# EDIT
post '/project/:id' do
  project = Project.find params[:id]
  project.name = params[:name]
  project.version = params[:version]
  project.entry_date = params[:entry_date]
  project.link = params[:link]
  project.image = params[:image]
  project.tags = params[:tags]
  project.save
  redirect to("/project/#{ project.id }")
end

after do
  ActiveRecord::Base.connection.close
end
