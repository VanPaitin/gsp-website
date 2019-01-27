class AlbumsController < ApplicationController
  def index
    render json: Album.with_attached_pictures.page(params[:page])
  end
end
