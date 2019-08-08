# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Resort.destroy_all

puts "Creating Resorts"
Resort.create(:name => 'Thredbo', :country => 'Australia', :runs => '50', :image => 'https://upload.wikimedia.org/wikipedia/commons/3/32/Norman_Lindsay_1931.jpg')
Resort.create(:name => 'SilverStar', :country => 'Canada', :runs => '132', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Russell_Drysdale_Max_Dupain_1945.jpg')
