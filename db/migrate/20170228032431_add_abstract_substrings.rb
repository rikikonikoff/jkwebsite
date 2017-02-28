class AddAbstractSubstrings < ActiveRecord::Migration[5.0]
  def change
    add_column :publications, :background, :text
    add_column :publications, :methods, :text
    add_column :publications, :results, :text
    add_column :publications, :methods_and_findings, :text
    add_column :publications, :conclusions, :text
  end
end
