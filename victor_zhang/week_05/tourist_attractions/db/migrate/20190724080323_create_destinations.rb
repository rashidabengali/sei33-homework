class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.text :name
      t.text :location
      t.text :map
      t.text :features
      t.text :rating
      t.text :image

      t.bigint :country_id

      t.timestamps
    end
  end
end
