require 'sinatra'
require 'sinatra/reloader'
require 'googlebooks'

get '/' do
    erb :home
end

get '/result' do
    @book_name = params[:book_name].capitalize
    begin
        @book = GoogleBooks.search(@book_name).first;
        @price = "0"
        if !(@book.sale_info["listPrice"].nil?)
            if !@book.sale_info["listPrice"]["amount"].nil?
                @price = @book.sale_info["listPrice"]["amount"].to_s
            end
            if !(@book.sale_info["listPrice"]["currencyCode"].nil?)
                @price += " " + @book.sale_info["listPrice"]["currencyCode"]
            end
        end
        
    rescue 
        redirect to ('/')
    end

    erb :result
end