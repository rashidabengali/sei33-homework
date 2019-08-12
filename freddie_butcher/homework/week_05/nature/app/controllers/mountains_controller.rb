class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.range = params[:range]
    mountain.first_ascent = params[:first_ascent]
    mountain.save
    redirect_to mountain_path(mountain.id) ##CHECK URL POINTING
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.range = params[:range]
    mountain.first_ascent = params[:first_ascent]
    mountain.save
    redirect_to mountain_path(mountain.id) ##CHECK URL POINTING
  end

  def destroy
    @mountain = Mountain.find params[:id]
    @mountain.destroy
    redirect_to mountains_path
  end

end
