class ProgramsController < ApplicationController
  def index
    render json: Program.with_attached_pictures.page(params[:page])
  end
end
