class CreateCountrys < ActiveRecord::Migration[5.2]
  def change
    create_table :countrys do |t|
      t.text :name
      t.text :resorts
      t.text
      t.text :image
    end
  end
end
