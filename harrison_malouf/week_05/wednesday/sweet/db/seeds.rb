Games.destroy_all

puts " Creating Games "
Game.create(:name => 'Doom Eternal', :dob => '2019-11-22', :genre => 'First Person Shooter')
Game.create(:name => 'Mario Kart 8', :dob => '2017-04-28', :genre => 'Racing')
Game.create(:name => 'Warhammer Total War', :dob => '2016-05-24', :genre => 'Real Time Stratergy')
Game.create(:name => 'Warcraft 3', :dob => '2003-07-1', :genre => 'Real Time Stratergy')
