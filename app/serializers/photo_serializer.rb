class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :photopath

  belongs_to :post
end
