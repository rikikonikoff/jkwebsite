class Post < ApplicationRecord
  has_many :photos, inverse_of: :post, dependent: :destroy
  accepts_nested_attributes_for :photos, reject_if: :all_blank,
    allow_destroy: true

  validates :title, presence: true
end
