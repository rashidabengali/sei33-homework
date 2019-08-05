class CreateComics < ActiveRecord::Migration[5.2]
  def change
    create_table :comics do |t|
      t.text :name
      t.integer :publish_year
      t.boolean :ended
      t.text :image
    end
  end
end
