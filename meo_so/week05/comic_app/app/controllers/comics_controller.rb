class ComicsController < ApplicationController
  def index
    @comics = Comic.all
  end

  def new
    @comic = Comic.new
  end

  def create
    comic = Comic.create comic_params
    redirect_to comic
  end

  def show
    @comic = Comic.find params[:id]
  end

  def edit
    @comic = Comic.find params[:id]
  end

  def update
    comic = Comic.find params[:id]
    comic.update comic_params
    redirect_to comic
  end

  def destroy
    comic = Comic.find params[:id]
    comic.destroy
    redirect_to comics_path
  end 
  
  private
  def comic_params
    params.require(:comic).permit(:name, :publish_year, :ended, :image, :author_id)
  end
end
