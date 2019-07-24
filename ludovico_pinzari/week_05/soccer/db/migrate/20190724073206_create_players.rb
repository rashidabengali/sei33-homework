class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.date :dob
      t.text :position
      t.text :image
      t.integer :team_id
      t.timestamps # created_at, updated_at
    end
  end
end
