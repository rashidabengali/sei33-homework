class CreateIcons < ActiveRecord::Migration[5.2]
  def change
    create_table :icons do |t|
      t.text :name
      t.text :occupation
      t.text :known
      t.text :image

      t.timestamps
    end
  end
end
