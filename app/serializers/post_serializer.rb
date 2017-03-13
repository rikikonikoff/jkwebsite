class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :photos
end
