class Album < ApplicationRecord
  include PictureLogic

  paginates_per 3
end
