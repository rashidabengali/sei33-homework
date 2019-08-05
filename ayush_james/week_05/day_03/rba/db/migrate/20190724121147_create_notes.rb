class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :value
      t.text :color
      t.date :issue
      t.text :image

      t.timestamps
    end
  end
end
