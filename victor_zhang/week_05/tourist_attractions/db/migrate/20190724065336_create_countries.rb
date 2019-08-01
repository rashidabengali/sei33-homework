class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.text :name
      t.text :image
      t.text :continent
      t.bigint :population
      t.text :language
      t.text :currency

      t.timestamps

    end
  end
end
