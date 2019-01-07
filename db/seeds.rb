# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(name: 'Mayowa Pitan', email: 'mayowasolomon@gmail.com', password: 'Engineering#', password_confirmation: 'Engineering#')
AdminUser.create!(name: 'RCCG GSP', email: 'rccgtgsp@gmail.com', password: 'thegoodshepherd#', password_confirmation: 'thegoodshepherd#')
