class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def new
    @movie = Movie.create
  end

  def create
    movie = Movie.create movie_params
    redirect_to movie_path(movie)
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie
  end

  def show
    @movie = Movie.find params[:id]
  end

  def destroy
    Movie.destroy params[:id]
    redirect_to movie_path
  end

  private # private so that you can't call it from the webpage, it is not an action.
  def movie_params
    # Strong parameters: whitelist of sanitised input -- stuff we are happy to let the user provide us
    params.require(:movie).permit(:title, :year_released, :image, :movie_id)

  end
end
