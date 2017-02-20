class CreatePublications < ActiveRecord::Migration[5.0]
  def change
    create_table :publications do |t|
      t.string :title, null: false
      t.string :published_in
      t.string :external_link
      t.datetime :date
    end
  end
end
