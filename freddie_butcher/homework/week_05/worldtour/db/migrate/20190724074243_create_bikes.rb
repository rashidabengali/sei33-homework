class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.text :brand
      t.text :model
      t.text :year
      t.text :team
      t.text :image
      t.timestamps
    end
  end
end
