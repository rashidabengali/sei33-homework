class ResortsController < ApplicationController
  def index
    @Resorts = Resort.all
  end

  def new
  end

  def create
    resort = Resort.create resort_params
    redirect_to resort

  end
  def edit
    @resort = Resort.find params[:id]
  end

  def update
    resort = Resort.find params[:id]
    resort.update resort_params
    redirect_to resort
  end
  def show
    @resort = Resort.find params[:id]
  end
  def destroy
    resort = Resort.find params[:id]
    resort.destroy
    redirect_to resorts_path
  end
  private
  def resort_params
    # Strong Parameters: whitelist of sanitised input -- stuff we are happy to let the user provide us
    params.require(:resort).permit(:name, :country, :runs, :image)

  end
end
