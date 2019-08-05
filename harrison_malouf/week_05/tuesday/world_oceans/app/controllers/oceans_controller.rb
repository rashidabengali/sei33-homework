class OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end

def show
  @ocean = Ocean.find params[:id]
end

def new
end


def create
  ocean = Ocean.new
  ocean.name = params[:name]
  ocean.image = params[:image]
  ocean.location = params[:location]
  ocean.area = params[:area]
  ocean.volume = params[:volume]
  ocean.depth = params[:depth]
  ocean.coastline = params[:coastline]
  ocean.save
  redirect_to ocean_path(ocean.id)
end


def edit
  @ocean = Ocean.find params[:id]
end

def update
  ocean = Ocean.find params[:id]
  ocean.name = params[:name]
  ocean.image = params[:image]
  ocean.location = params[:location]
  ocean.area = params[:area]
  ocean.volume = params[:volume]
  ocean.depth = params[:depth]
  ocean.coastline = params[:coastline]
  ocean.save
  redirect_to ocean_path(ocean.id)
  end

  def destory
    ocean = Ocean.find params[:id]
    ocean.destory
    redirect_to oceans_path
  end

end
