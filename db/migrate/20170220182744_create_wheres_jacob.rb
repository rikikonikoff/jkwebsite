class CreateWheresJacob < ActiveRecord::Migration[5.0]
  def change
    create_table :wheres_jacobs do |t|
      t.string :location, null: false
    end
  end
end
