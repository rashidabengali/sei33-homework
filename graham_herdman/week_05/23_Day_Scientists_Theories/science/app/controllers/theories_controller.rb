class TheoriesController < ApplicationController
  def index
    @theories = Theory.all.order(:created_at)
  end

  def new
    @theory = Theory.new
  end

  def create
    theory = Theory.new
    theory.update theory_params
    redirect_to theory
  end

  def edit
    @theory = Theory.find params[:id]
  end

  def update
    theory = Theory.find params[:id]
    theory.update theory_params
    redirect_to theory
  end

  def show
    @theory = Theory.find params[:id]
  end

  def destroy
    theory = Theory.find params[:id]
    theory.destroy
    redirect_to theories_path
  end

  private
  def theory_params
    params.require(:theory).permit(:name, :description, :image, :scientist_id)
  end
end
