class AddAuthorIdToComics < ActiveRecord::Migration[5.2]
  def change
    add_column :comics, :author_id, :integer
  end
end
