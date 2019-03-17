class PicturesController < ApplicationController
  def destroy
    ActiveStorage::Attachment.find(params[:id]).purge
    flash[:notice] = 'Picture successfully deleted!'

    redirect_to send("admin_#{params[:record_type]}_path", params[:record_id])
  end
end
