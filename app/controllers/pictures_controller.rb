class PicturesController < ApplicationController
  def destroy
    ActiveStorage::Attachment.find(params[:id]).purge
    flash[:notice] = 'Picture successfully deleted!'

    redirect_to admin_album_path(params[:album_id])
  end
end
