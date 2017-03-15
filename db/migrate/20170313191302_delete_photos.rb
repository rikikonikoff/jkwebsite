class DeletePhotos < ActiveRecord::Migration[5.0]
  def up
    drop_table :photos
  end

  def down
    create_table :photos do |t|
      t.string :caption
      t.belongs_to :post
    end
  end
end
