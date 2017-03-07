class Post < ApplicationRecord
  has_many :photos

  validates :title, presence: true
end
