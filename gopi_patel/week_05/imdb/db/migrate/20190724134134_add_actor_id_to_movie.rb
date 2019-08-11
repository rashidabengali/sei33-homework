class AddActorIdToMovie < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :actor_id, :integer
  end
end
