class WheresJacobSerializer < ActiveModel::Serializer
  attributes :id,
    :location,
    :created_at,
    :updated_at
end
