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
      moutain = Mountain.new
      mountain.name = mountain[:name]
      mountain.image = mountain[:image]
      mountain.height = mountain[:height]
      mountain.type = mountain[:type]
      mountain.country = mountain[:country]
      redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end
  def destroy
    mountain = Mountain.find params[:id]
    mountian.destroy
    redirect_to mountain_path

  end
end
