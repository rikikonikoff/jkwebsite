class AddIndexToWheresJacobs < ActiveRecord::Migration[5.0]
  def change
    add_index :wheres_jacobs, :location, unique: true
    add_column(:wheres_jacobs, :created_at, :datetime)
    add_column(:wheres_jacobs, :updated_at, :datetime)
  end
end
