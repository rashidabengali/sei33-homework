class BooksController < ApplicationController
  def home
    render :home
  end

  def result
    @book_title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
    @info = HTTParty.get book_url
    @thumbnail = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @author = @info["items"][0]["volumeInfo"]["authors"]
    @description = @info["items"][0]["volumeInfo"]["description"]


    @movie_url = "http://www.omdbapi.com/?t=#{ @book_title }&apikey=2ea9c43a"
    @movie_info = HTTParty.get @movie_url
    if @movie_info["Response"] == "True"
      @is_movie = "#{ @book_title.capitalize } is also a movie!"
    else
      @is_movie = ""
    end


    render :result
  end

end
