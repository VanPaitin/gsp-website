class AlbumSerializer < ActiveModel::Serializer
  attributes :event, :date, :pictures

  def pictures
    object.pictures.map do |picture|
      Rails.application.routes.url_helpers.url_for(picture)
    end
  end
end
