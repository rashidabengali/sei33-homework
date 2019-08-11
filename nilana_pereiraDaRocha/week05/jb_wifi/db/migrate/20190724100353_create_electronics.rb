# frozen_string_literal: true

class CreateElectronics < ActiveRecord::Migration[5.2]
  def change
    create_table :electronics do |t|
      t.text :name
      t.text :description
      t.text :price
      t.integer :brand_id

      t.timestamps
    end
  end
end
