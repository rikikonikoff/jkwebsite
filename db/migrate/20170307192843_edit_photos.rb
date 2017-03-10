class EditPhotos < ActiveRecord::Migration[5.0]
  def up
    remove_column :photos, :admin_id
    add_column :photos, :post_id, :integer
    add_index :photos, :post_id
  end

  def down
    remove_column :photos, :post_id
    add_column :photos, :admin_id, :integer
    add_index :photos, :admin_id
  end
end
