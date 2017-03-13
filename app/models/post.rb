class Post < ApplicationRecord
  mount_uploaders :photos, PhotoUploader

  validates :title, presence: true
end
