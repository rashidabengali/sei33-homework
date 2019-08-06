class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :coach
      t.text :image
      t.timestamps # created_at, updated_at
    end
  end
end
