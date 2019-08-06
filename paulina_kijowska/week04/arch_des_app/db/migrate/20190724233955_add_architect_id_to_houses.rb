class AddArchitectIdToHouses < ActiveRecord::Migration[5.2]
  def change
    add_column :houses, :architect_id, :integer
  end
end
