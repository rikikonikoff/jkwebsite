class DeletePhotos < ActiveRecord::Migration[5.0]
  def up
    drop_table :photos
  end

  def down
    create_table do |t|
      t.string :photopath
      t.belongs_to :post
    end
  end
end
