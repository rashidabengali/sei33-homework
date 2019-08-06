class CreateMotorbikes < ActiveRecord::Migration[5.2]
  def change
    create_table :motorbikes do |t|
      t.text :year
      t.text :color
      t.text :body
      t.float :price
      t.text :image
      t.text :descriptions
      t.integer :brand_id
      t.timestamps 
    end
  end
end
