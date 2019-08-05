Team.destroy_all

puts "Creating teams"
Team.create(:name => 'A.S. Roma', :coach => 'Paoulo Fonseca', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png')
Team.create(:name => 'Juventus F.C.', :coach => 'Maurizio Sarri', :image => 'https://en.wikipedia.org/wiki/Juventus_F.C.#/media/File:Juventus_FC_2017_logo.svg')

Player.destroy_all

puts "Creating players"
Player.create(:name => 'Francesco Totti', :dob => '1976-10-27', :position => 'Midfield', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/42/KL-2018_%284%29.jpg', :team_id => 1)
