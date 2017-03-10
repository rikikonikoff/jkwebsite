class Post < ApplicationRecord
  mount_uploaders :photos, PhotoUploader
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true

  validates :title, presence: true
end
