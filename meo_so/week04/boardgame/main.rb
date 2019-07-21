require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'HTTParty'
require 'pry'

# talk to db
def query_db(sql_statement)
    puts sql_statement  # optional but good for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result
end

get '/' do
    erb :home
end

# NEW - user can input new game
get '/boardgame/new' do
    erb :boardgame_new
end

# add new game to db
post '/add_boardgame' do
    query = "INSERT INTO boardgame (name, min_player, max_player, publisher, image) VALUES 
            ('#{ params[:name]}', '#{ params[:min_player] }', '#{ params[:max_player] }', '#{ params[:publisher] }', '#{ params[:image] }')"
    query_db query
    redirect to ('/show_boardgame')
end

# INDEX - show and link to all games in DB
get ('/show_boardgame') do
    # connect to DB and fetch game list
    @games = query_db 'SELECT * FROM boardgame'
    # render the view
    erb :boardgame_index
end

# SHow show all info on a game base on ID
get '/boardgame/:id' do
    @game = query_db "SELECT * FROM boardgame WHERE id=#{ params[:id] }"
    @game = @game.first
    erb :boardgame_show
end

# Delete game from DB
get '/boardgame/:id/delete' do
    @game = query_db "DELETE FROM boardgame where id=#{ params[:id] }"
    redirect to ('/show_boardgame')
end

# Update game info in DB
get '/boardgame/:id/edit' do
    # get game info from DB
    @game = query_db "SELECT * FROM boardgame WHERE id=#{ params[:id]} "
    @game = @game.first
    # render the form for making change
    erb :boardgame_edit
end

post '/edit_boardgame/:id' do
    query = "UPDATE boardgame SET name='#{ params[:name] }', min_player='#{ params[:min_player] }', max_player='#{ params[:max_player]}',
            publisher='#{ params[:publisher] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
    # query = "UPDATE boardgame SET name='"+params[:name]+"', min_player='#{ params[:min_player] }', max_player='#{ params[:max_player]}',
    #         publisher='#{ params[:publisher] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
    query_db query
    redirect to("/boardgame/#{ params[:id] }")
end

get '/search_result' do 
    @game = params[:game_search]
    game_url = "https://www.boardgameatlas.com/api/search?name=#{@game}&client_id=SB1VGnDv7M"
    @info = HTTParty.get game_url
    @info = @info['games'][0]
    erb :boardgame_search
end

# add from search result
get '/boardgame/:id/add' do
    @info = HTTParty.get "https://www.boardgameatlas.com/api/search?name=#{ params[:id]}&client_id=SB1VGnDv7M"
    @info = @info['games'][0]
    erb :boardgame_add_prefill
end