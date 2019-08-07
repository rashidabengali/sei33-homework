class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.text :firstname
      t.text :lastname
      t.text :nationality
      t.text :visited

      t.timestamps 
    end
  end
end
