module PictureSerializer
  def pictures
    object.pictures.map do |picture|
      Rails.application.routes.url_helpers.rails_blob_path(picture, only_path: true)
    end
  end
end
