class CreateHome < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.text :about
      t.string :image
    end
  end
end
