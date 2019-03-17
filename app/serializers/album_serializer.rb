class AlbumSerializer < ActiveModel::Serializer
  attributes :event, :date, :pictures

  include PictureSerializer
end
