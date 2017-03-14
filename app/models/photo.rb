class Photo < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  belongs_to :post

  def photo=(val)
    if !val.is_a?(String) && valid?
      photo_will_change!
      super
    end
  end
end
