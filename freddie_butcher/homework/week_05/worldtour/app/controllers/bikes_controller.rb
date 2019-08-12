class BikesController < ApplicationController
  def index
    @bikes = Bike.all
  end

  def new
    @bike = Bike.new
  end

  def create
    bike = Bike.create bike_params
    redirect_to bike
  end

  def edit
    @bike = Bike.find params[:id]
  end

  def update
  bike = Bike.find params[:id]
  bike.update bike_params
  redirect_to bike
end

  def show
    @bike = Bike.find params[:id]
  end

  def destroy
    bike = Bike.find params[:id]
    bike.destroy
    redirect_to bikes_path
  end

  private
  def bike_params
    params.require(:bike).permit(:brand, :model, :year, :team, :image)
  end

end
