# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Actor.destroy_all

puts "Creating actors"
Actor.create(:name => 'Tom Hanks', :dob => '1956-07-09', :born => 'California', :image => 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg')
Actor.create(:name => 'Scarlett Johansson', :dob =>'1984-11-22', :born => 'New York', :image => 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg')
Actor.create(:name => 'Will Smith', :dob =>'1968-09-25', :born => 'Pennsylvania', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHsgW9BQufsVRzAp9nFHIdL1d1jzi-8yOqLG61FA1ji2ldQ2F')


puts "Creating Movies"

Movie.destroy_all
Movie.create(:title => 'Cast Away', :year => 2001, :genre =>'Adventure', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-bLNQ2oEkw_mIc772dMdiU07BhRRw1o72BovY7xatjNOwSZd')
Movie.create(:title =>'Lucy', :year => 2014, :genre =>'Sci-Fi', :image => 'http://www.ibs.re.kr/dext5data/2016/10/20161026_161059385_94498.jpg')
Movie.create(:title => 'The pursuit of Happyness', :year => 2006, :genre => 'Biography', :image => 'https://miro.medium.com/max/1439/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg')
