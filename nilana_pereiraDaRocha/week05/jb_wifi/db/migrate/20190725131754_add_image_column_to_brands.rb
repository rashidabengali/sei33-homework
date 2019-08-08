class AddImageColumnToBrands < ActiveRecord::Migration[5.2]
  def change
    add_column :brands, :image, :text
  end
end
