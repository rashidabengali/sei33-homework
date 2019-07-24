require 'active_record'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# Sets up our connection to the database.db we have created
ActiveRecord::Base.establish_connection(
  :adapter  => 'sqlite3',
  :database => 'database.sqlite3'
)

# Models
class Book < ActiveRecord::Base
end

class Author < ActiveRecord::Base
end

ActiveRecord::Base.logger = Logger.new(STDERR)
# Logs out the Active Record generated SQL in the terminal. This isn't necessary but very helpful and cool to see what it is actually running

get '/' do
  erb :home
end

get '/books' do
  @books = Book.all #SELECT * FROM books database view all the books
  # to get books name type @books["title"]
  erb :books_index
end

get '/books/new' do
  erb :books_new
end

#params come with semicolon
post '/books' do

book = Book.new
book.title = params[:title]
book.author = params[:author]
book.genre = params[:genre]
book.image = params[:image]
book.summary = params[:summary]
book.save

redirect to("/books/#{ book.id }")

end

get '/books/:id' do #link to the individual book page
  @book = Book.find params[:id] #SELECT (:id) FROM books
  erb :book_show
end

#this only allow you to visit the edit page
get'/books/:id/edit' do
  @book = Book.find params[:id] #find the book to edit first
  #when you edit the book feature, you edit in its individual page
  erb :book_edit

end

#This part will allow you to post new info to the database

post '/books/:id' do
book = Book.find params[:id]
book.title = params[:title]
book.author = params[:author]
book.genre = params[:genre]
book.image = params[:image]
book.summary = params[:summary]
book.save
redirect to("/books/#{ book.id }")
end

#The delete part works as same as edit
#direct the delete link to the delete page
#dont need post command as delete will just destroy thing in one and it will be all gone

get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to ("/books")
end

# CRUD for the author

get '/authors' do
  @authors = Author.all
  erb :authors_index
end

# NEW
get '/authors/new' do
  erb :authors_new
end

# CREATE
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.nationality = params[:nationality]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end

# SHOW
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end


# EDIT
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

# UPDATE
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.nationality = params[:nationality]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end

# DESTROY
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end

after do
  ActiveRecord::Base.connection.close
end
