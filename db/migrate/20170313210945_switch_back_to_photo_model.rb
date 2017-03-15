class SwitchBackToPhotoModel < ActiveRecord::Migration[5.0]
  def up
    create_table :photos do |t|
      t.string :caption
      t.belongs_to :post
    end
    remove_column :posts, :photos
  end

  def down
    add_column :posts, :photos, :json
    drop_table :photos
  end
end
