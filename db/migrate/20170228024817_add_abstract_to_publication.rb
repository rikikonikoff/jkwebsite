class AddAbstractToPublication < ActiveRecord::Migration[5.0]
  def change
    add_column :publications, :abstract, :text
  end
end
