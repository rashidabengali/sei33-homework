class CreateHouses < ActiveRecord::Migration[5.2]
  def change
      create_table :houses do |t|
         t.text :title
         t.text :year
         t.text :country
         t.text :image

         t.timestamps
      end
  end
end
