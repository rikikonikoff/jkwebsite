class AddColumnsToPublications < ActiveRecord::Migration[5.0]
  def change
    add_column :publications, :authors, :string
    add_column :publications, :issue, :string
    add_column :publications, :pages, :string
    rename_column :publications, :published_in, :journal
  end
end
