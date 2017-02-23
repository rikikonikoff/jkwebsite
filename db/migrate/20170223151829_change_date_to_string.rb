class ChangeDateToString < ActiveRecord::Migration[5.0]
  def up
    change_column :publications, :date, :string
  end

  def down
    change_column :publications, :date, :datetime
  end
end
