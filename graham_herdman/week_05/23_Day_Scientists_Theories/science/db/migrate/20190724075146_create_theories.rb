class CreateTheories < ActiveRecord::Migration[5.2]
  def change
    create_table :theories do |t|
      t.text :name
      t.text :description
      t.text :image
      t.bigint :scientist_id

      t.timestamps
    end
  end
end
