class Photo < ApplicationRecord
  belongs_to :post

  validates :photopath, presence: true, uniqueness: true
end
