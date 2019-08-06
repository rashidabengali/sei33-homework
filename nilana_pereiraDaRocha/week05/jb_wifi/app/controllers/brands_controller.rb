# frozen_string_literal: true

class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brand = Brand.new
  end

  def create
    brand = Brand.create brand_params
    puts brand_params
    redirect_to brand
  end

  def show
    @brand = Brand.find params[:id]
  end

  def edit
    @brand = Brand.find params[:id]
    @brands.save
  end

  def update
    brand = Brand.find params[:id]
    brand.update brand_params
    redirect_to brand
  end

  def destroy
    brand = Brand.find params[:id]
    brand.destroy
    redirect_to brands_url
  end

  private

  # picking required information from `params` to be added into model
  def brand_params
    params.require(:brand).permit(:name)
  end
end
