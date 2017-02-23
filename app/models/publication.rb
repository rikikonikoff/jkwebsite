class Publication < ApplicationRecord
  validates_presence_of :title, :date, :authors, :journal, :issue, :pages
  validates_uniqueness_of :title
end
