class Photo < ApplicationRecord
  belongs_to :post

  validates :post_id, presence: true
  validates :photopath, presence: true, uniqueness: true
end
