class CreateArchitects < ActiveRecord::Migration[5.2]
  def change
    create_table :architects do |t|
     t.text :name
     t.text :nationality
     t.date :dob
     t.text :image
     t.text :famous
     t.timestamps
    end
  end
end
