class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t|
      t.text :name
      t.date :dob
      t.text :born
      t.text :image

      t.timestamps #created _at , updated_at

    end
  end
end
