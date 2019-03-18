class ProgramsController < ApplicationController
  def index
    programs = Program.with_attached_pictures.page(params[:page])
    pictures = programs.map(&:pictures).flatten
    urls = pictures.map do |picture|
      Rails.application.routes.url_helpers.rails_blob_path(picture, only_path: true)
    end

    render json: urls
  end
end
