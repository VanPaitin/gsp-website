class Album < ApplicationRecord
  validate :ensure_pictures
  has_many_attached :pictures

  paginates_per 3

  private

  def ensure_pictures
    unless pictures.attached?
      errors[:base] << "You have forgotten to add pictures"
    end
  end
end
