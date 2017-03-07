class AddColumnsToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :title, :string, null: false
    add_column :posts, :body, :text
  end
end
