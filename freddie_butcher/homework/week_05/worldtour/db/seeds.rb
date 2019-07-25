# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bike.destroy_all

Bike.create :brand => 'S-Works', :model => 'Tarmac', :year => 2019, :image => 'https://www.lordgun.com.au/content/products/17265/zm_20190208-060020.jpg'

Team.destroy_all

Team.create :team => 'Lotto', :brand => 'Bianchi', :country => 'Holland', :image => 'https://upload.wikimedia.org/wikipedia/ca/9/98/Team_LottoNL-Jumbo_logo.jpg'
