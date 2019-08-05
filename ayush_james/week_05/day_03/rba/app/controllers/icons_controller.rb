class IconsController < ApplicationController
  def index
    @icons = Icon.all
  end

  def new
    @icon = Icon.new
  end

  def create
    icon = Icon.create icon_params
    redirect_to icon
  end

  def edit
    @icon = Icon.find params[:id]
  end

  def update
    icon = Icon.find params[:id]
    icon.update icon_params
    redirect_to icon
  end

  def show
    @icon = Icon.find params[:id]
  end

  def destroy
    icon = Icon.find params[:id]
    icon.destroy
    redirect_to icons_path
  end

  private
  def icon_params
    params.require(:icon).permit(:name, :occupation, :known, :image, :note_id)
  end
end
