class BeachesController < ApplicationController
  def index
    @beaches = Beach.all
  end

  def show
    @beach = Beach.find params[:id]
  end

  def new
  end

  def create
    beach = Beach.new
    beach.name = params[:name]
    beach.image = params[:image]
    beach.location = params[:location]
    beach.area = params[:area]
    beach.population = params[:population]
    beach.save
    redirect_to beach_path(beach.id)
  end

  def edit
    @beach = Beach.find params[:id]
  end

  def update
    beach = Beach.find params[:id]
    beach.name = params[:name]
    beach.image = params[:image]
    beach.location = params[:location]
    beach.area = params[:area]
    beach.population = params[:population]
    beach.save
    redirect_to beach_path(beach.id)
  end

  def destroy
    beach = Beach.find params[:id]
    beach.destroy
    redirect_to beaches_path
  end
end
