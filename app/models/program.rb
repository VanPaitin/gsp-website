class Program < ApplicationRecord
  include PictureLogic

  default_scope { order(id: :desc) }

  paginates_per 5
end
