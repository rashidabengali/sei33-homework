require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3',
)

#Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models
class Member < ActiveRecord::Base
end

class House < ActiveRecord::Base
end


get '/' do
  erb :home
end

get '/army' do
  @army = Member.all
  erb :army_index
end

get '/army/new' do
  erb :army_new
end

post '/army' do
  member = Member.new
  member.first_name = params[:first_name]
  member.last_name = params[:last_name]
  member.patronus = params[:patronus]
  member.image = params[:image]
  member.save
  redirect to("/army/#{ member.id }")
end

get '/army/:id' do
  @member = Member.find params[:id]
  erb :army_show
end

get '/army/:id/edit' do
  @member = Member.find params[:id]
  erb :army_edit
end

post '/army/:id' do
  member = Member.find params[:id]
  member.first_name = params[:first_name]
  member.last_name = params[:last_name]
  member.patronus = params[:patronus]
  member.image = params[:image]
  member.save
  redirect to("/army/#{ params[:id] }")
end

get '/army/:id/delete' do
member = Member.find params[:id]
member.destory
redirect to("/army")
end


## HOGWARTS HOUSE CRUD
get '/houses' do
  @houses = House.all
  erb :houses_index
end

# NEW
get '/houses/new' do
  erb :houses_new
end

# UPDATE
post '/houses' do
  house = House.new
  house.name = params[:name]
  house.image = params[:image]
  house.save
  redirect to("/houses/#{ house.id }")
end

# SHOW
get '/houses/:id' do
  @house = House.find params[:id]
  erb :houses_show
end

# EDIT
get '/houses/:id/edit' do
  @house = House.find params[:id]
  erb :houses_edit
end

# UPDATE
post '/houses/:id' do
  house = House.find params[:id]
  house.name = params[:name]
  house.image = params[:image]
  house.save
  redirect to("/houses/#{ house.id }")
end

# DESTORY
get '/houses/:id/delete' do
  house = House.find params[:id]
  house.destroy
  redirect to('/houses')
end

after do
  ActiveRecord::Base.connection.close
end
