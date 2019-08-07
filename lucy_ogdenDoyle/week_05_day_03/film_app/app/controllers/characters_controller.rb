class CharactersController < ApplicationController
  def index
    @characters = Character.all
  end

  def new
    @character = Character.new
  end

  def create
    character = Character.create character_params
    redirect_to character_path(character)
  end

  def edit
    @character = Character.find params[:id]
  end

  def update
    character = Character.find params[:id]
    character.update character_params
    redirect_to character
  end

  def show
    @character = Character.find params[:id]
  end

  def destroy
    Character.destroy params[:id]
    redirect_to characters_path
  end

  private # private so that you can't call it from the webpage, it is not an action.
  def character_params
    # Strong parameters: whitelist of sanitised input -- stuff we are happy to let the user provide us
    params.require(:character).permit(:name, :voice_actor, :image, :movie_id)

  end
end
