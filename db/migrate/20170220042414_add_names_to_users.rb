class AddNamesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string, null: false
    add_column :admins, :name, :string, null: false
  end
end
