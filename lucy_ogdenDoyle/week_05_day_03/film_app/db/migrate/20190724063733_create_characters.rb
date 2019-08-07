class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.text :name
      t.text :voice_actor
      t.text :image
      t.integer :movie_id

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
