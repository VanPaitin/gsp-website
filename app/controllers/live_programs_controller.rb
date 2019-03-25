class LiveProgramsController < ApplicationController
  def show
    url = LiveProgram.order(id: :desc).first

    render json: url.slice(:url)
  end
end
