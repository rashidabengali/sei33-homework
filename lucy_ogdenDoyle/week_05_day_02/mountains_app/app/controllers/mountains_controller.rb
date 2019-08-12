class MountainsController < ApplicationController
  def index
    @mountain = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def new
  end

# you redirect to this page when they click the new form.
# do the create function to the database, then redirect back to the new page
  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.map = params[:map]
    mountain.country = params[:country]
    mountain.parent_range = params[:parent_range]
    mountain.elevation = params[:elevation]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.map = params[:map]
    mountain.country = params[:country]
    mountain.parent_range = params[:parent_range]
    mountain.elevation = params[:elevation]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end

#  name         :text
#  image        :text
#  map          :text
#  country      :text
#  parent_range :text
#  elevation    :integer
