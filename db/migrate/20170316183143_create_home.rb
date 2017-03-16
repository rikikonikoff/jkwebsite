class CreateHome < ActiveRecord::Migration[5.0]
  def change
    create_table :home do |t|
      t.text :about
      t.string :image
    end
  end
end
