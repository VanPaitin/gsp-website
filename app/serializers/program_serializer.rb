class ProgramSerializer < ActiveModel::Serializer
  attributes :name, :date, :pictures

  include PictureSerializer
end
