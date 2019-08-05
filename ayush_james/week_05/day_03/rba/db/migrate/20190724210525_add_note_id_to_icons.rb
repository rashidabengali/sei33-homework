class AddNoteIdToIcons < ActiveRecord::Migration[5.2]
  def change
    add_column :icons, :note_id, :integer
  end
end
