class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :team
      t.text :brand
      t.text :country
      t.text :image
      t.timestamps
    end
  end
end
