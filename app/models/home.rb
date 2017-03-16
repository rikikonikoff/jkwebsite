class Home < ApplicationRecord
  mount_uploader :image, ImageUploader

  valiates :about, presence: true
end
