class NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def new
    @note = Note.new
  end

  def create
    note = Note.create note_params
    redirect_to note
  end

  def edit
    @note = Note.find params[:id]
  end

  def updated
    note = Note.find params[:id]
    artist.update note_params
    redirect_to note
  end

  def show
    @note = Note.find params[:id]
  end

  def destroy
    note = Note.find params[:id]
    note.destroy
    redirect_to notes_path
  end

  private
  def note_params
   params.require(:note).permit(:value, :color, :issue, :image)
  end
end
