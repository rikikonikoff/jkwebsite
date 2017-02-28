class Photo < ApplicationRecord
  belongs_to :admin

  validates :photopath, presence: true, uniqueness: true
end
