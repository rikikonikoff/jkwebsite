class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image
end
