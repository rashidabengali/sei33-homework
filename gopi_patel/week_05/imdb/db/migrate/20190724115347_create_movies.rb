class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.integer :year
      t.text :genre
      t.text :image

t.timestamps #created _at , updated_at

    end
  end
end
