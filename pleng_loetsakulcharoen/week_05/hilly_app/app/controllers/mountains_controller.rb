class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all #show all mountains in the db
  end

  def new
    #nothing in here because new doesnt create anything???? but needed to be confirmed
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.elevation = params[:elevation]
    mountain.image = params[:image]
    mountain.first_ascent = params[:first_ascent]
    mountain.save
    redirect_to mountains_path(mountain.id)
  end


  def show
    @mountain = Mountain.find params[:id]

  end

  def edit
    @mountain = Mountain.find params[:id]

  end


  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.country = params[:country]
    mountain.elevation = params[:elevation]
    mountain.image = params[:image]
    mountain.first_ascent = params[:first_ascent]
    mountain.save
    redirect_to mountains_path(mountain.id)
  end

  def delete
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
    end

  end
  
