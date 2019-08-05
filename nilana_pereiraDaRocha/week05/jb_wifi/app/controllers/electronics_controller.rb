# frozen_string_literal: true

class ElectronicsController < ApplicationController
  def index
    @electronics = Electronic.all
   end

  def new
    @electronic = Electronic.new
  end

  def show
    @electronic = Electronic.find params[:id]
  end

  def create
    electronic = Electronic.new
    electronic.update electronic_params
    redirect_to electronic
  end

  def edit
    @electronic = Electronic.find params[:id]
  end

  def update
    electronic = Electronic.find params[:id]
    electronic.update electronic_params
    redirect_to electronic
  end

  def destroy
    electronic = Electronic.find params[:id]
    electronic.destroy
    redirect_to electronics_url
  end

  private

  # picking required information from `params` to be added into model
  def electronic_params
    params.require(:electronic).permit(:name, :description, :price, :brand_id)
  end
end
