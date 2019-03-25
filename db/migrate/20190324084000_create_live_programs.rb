class CreateLivePrograms < ActiveRecord::Migration[5.2]
  def change
    create_table :live_programs do |t|
      t.string :url

      t.timestamps
    end
  end
end
