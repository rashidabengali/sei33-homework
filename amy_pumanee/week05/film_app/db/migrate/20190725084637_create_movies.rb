class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.date :date_release
      t.text :image

      t.timestamps # created_at, updated_at
    end
  end
end
