class ScientistsController < ApplicationController
  def index
    @scientists = Scientist.all.order(:created_at)
  end

  def new
    @scientist = Scientist.new
  end
  def create
    scientist = Scientist.create scientist_params
    redirect_to scientist
  end

  def edit
    @scientist = Scientist.find params[:id]
  end

  def update
    scientist = Scientist.find params[:id]
    scientist.update scientist_params
    redirect_to scientist
  end

  def show
    @scientist = Scientist.find params[:id]
  end

  def destroy
    scientist = Scientist.find params[:id]
    scientist.destroy
    redirect_to scientists_path
  end

  private
  def scientist_params
    params.require(:scientist).permit(:name, :dob, :fields, :known_for, :trivia, :image)
  end
end
