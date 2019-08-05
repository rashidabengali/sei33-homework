# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Denali', :height => 20000, :location => 'South Central Alaska, U.S.'

Mountain.create :name => 'Mount Vesuvius', :height => 4202.75, :location => 'Gulf of Naples in Campania, Italy'

Mountain.create :name => 'El Capitan', :height => 7568.898, :location => 'Mariposa County, California, U.S.'
