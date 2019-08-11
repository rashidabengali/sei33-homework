class CreateResorts < ActiveRecord::Migration[5.2]
  def change
    create_table :resorts do |t|
      t.text :name
      t.text :country
      t.text :runs
      t.text :image

      t.timestamps # created_at, updated_at
    end
  end
end
