# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#characters
#  id          :bigint           not null, primary key
#  name        :text
#  voice_actor :text
#  image       :text
#  movie_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Table name: movies
#
#  id            :bigint           not null, primary key
#  title         :text
#  image         :text
#  year_released :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
Movie.destroy_all

Movie.create :title => 'Toy Story', :image => "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg", :year_released => 1995
Movie.create :title => 'The Little Mermaid', :image => "https://usercontent2.hubstatic.com/8320065.jpg", :year_released => 1990
Movie.create :title => 'The Lion King', :image => "http://images4.fanpop.com/image/photos/19200000/The-Lion-King-Two-Disc-Platinum-Edition-Disney-DVD-Cover-walt-disney-characters-19285841-1521-2175.jpg", :year_released => 1994

Character.destroy_all

Character.create :name => "Simba", :voice_actor => "Matthew Broderick", :image => "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/YoungSimbaSmilestlk.png/220px-YoungSimbaSmilestlk.png"
Character.create :name => "Ariel", :voice_actor => "Jodi Benson", :image => "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png"
Character.create :name => "Woody", :voice_actor => "Tom Hanks", :image => "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png"
