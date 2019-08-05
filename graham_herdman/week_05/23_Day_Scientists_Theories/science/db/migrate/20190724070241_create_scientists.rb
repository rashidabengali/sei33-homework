class CreateScientists < ActiveRecord::Migration[5.2]
  def change
    create_table :scientists do |t|
      t.text :name
      t.date :dob
      t.text :fields
      t.text :known_for
      t.text :trivia
      t.text :image

      t.timestamps
    end
  end
end
