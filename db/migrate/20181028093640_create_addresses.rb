class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
