class Home < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :about, presence: true
end
