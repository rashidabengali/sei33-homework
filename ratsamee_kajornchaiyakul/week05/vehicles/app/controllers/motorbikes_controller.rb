class MotorbikesController < ApplicationController
  def index
    @motorbikes = Motorbike.all
  end

  def new
    @motorbike = Motorbike.new
  end

  def create
    motorbike = Motorbike.create motorbike_params  
    redirect_to motorbike
  end

  def edit
    @motorbike = Motorbike.find_by :id => params[:id]
  end

  def update
    motorbike = Motorbike.find_by :id => params[:id]
    motorbike.update motorbike_params
    redirect_to motorbike
  end

  def show
    @motorbike = Motorbike.find_by :id => params[:id]
  end

  private 
  def motorbike_params
    params.require(:motorbike).permit(:year, :color, :body, :price, :image, :descriptions, :brand_id)
  end
end
