# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Brand.destroy_all

puts "Create brands"

Brand.create(:name => "Harley Davidson", :country => "United State")
Brand.create(:name => "KTM", :country => "Austria")
Brand.create(:name => "YAMAHA", :country => "Japan")
Brand.create(:name => "Ducati", :country=> "Italy")


Motorbike.destroy_all

puts "Create motorbikes"
Motorbike.create(:year => "2019", :color => "Red", :body => "Sport Touring", :price => 39990, :image => "https://bikesales.pxcrush.net/bikesales/cars/dealer/9ovc4r7pkvep3kb3ptadqk6rj.jpg?pxc_method=crop&pxc_size=900%2c600")
Motorbike.create(:year => "2015", :color => "Black", :body => "Cruiser", :price => 23500, :image => "https://bikesales.pxcrush.net/bikesales/bikes/private/dn1icfi3yn169j4h1r4bi3sjl.jpg?pxc_method=crop&pxc_size=900%2c600")
