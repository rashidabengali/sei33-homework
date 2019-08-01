# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Country.destroy_all

puts "Creating seed countries"
Country.create(:name => 'Japan', :continent => 'Asia', :population => 126800000, :language => 'Japanese', :currency => '¥ Japanese Yen, JPY')
Country.create(:name => 'Mexico', :continent => 'North America', :population => 129200000, :language => 'Spanish', :currency => '$ Mexican Peso, MXN')
Country.create(:name => 'Norway', :continent => 'Europe', :population => 5258000, :language => 'Norwegian', :currency => 'kr Norwegian Krone, NOK')
Country.create(:name => 'China', :continent => 'Asia', :population => 1386000000, :language => 'Mandarin', :currency => '¥ Renminbi, CNY')


Destination.destroy_all
Destination.create(:name => 'Mount Norikura', :location => 'Takayama', :features => 'Hiking destination at a potentially active volcano', :image => 'https://i.ytimg.com/vi/3IC5u-laUbw/maxresdefault.jpg')
