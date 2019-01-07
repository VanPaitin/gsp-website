class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :event
      t.date :date

      t.timestamps
    end
  end
end
