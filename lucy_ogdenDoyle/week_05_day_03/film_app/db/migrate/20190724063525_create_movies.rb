class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :image
      t.integer :year_released

      t.timestamps
    end
  end
end


#
# Film
# - Title
# - image
# - year released
#
# Character
# - name
# - voice actor
# - image
# - film_id
#
