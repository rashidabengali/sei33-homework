Comic.destroy_all

puts "create comics"

Comic.create(:name => 'One Piece', :publish_year => 1997, :ended => false, :image => 'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg')
Comic.create(:name => 'Golgo 13', :publish_year => 1968, :ended => false, :image => 'https://upload.wikimedia.org/wikipedia/en/b/b9/Golgo_13_%281983%29_poster.jpg')
Comic.create(:name => 'Dragon Ball', :publish_year => 1984, :ended => true, :image => 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1550795287839-5PB4FGPIKEF6DCBLD7M8/ke17ZwdGBToddI8pDm48kFV0VfsDSCyYoz2kExYQgkZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbmJdbH-DrkD1YhWHSmIcgdSF7DaahOxdbu7sSF49Kb2bURp3_zzK8326tw-qFONaQ/image-asset.jpeg?format=2500w')
Comic.create(:name => 'Naruto', :publish_year => 1999, :ended => true, :image => 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg')

Author.destroy_all

puts "create authors"

Author.create(:name => 'Masashi Kishimoto', :style => 'Shinobi', :image => 'https://vignette.wikia.nocookie.net/naruto/images/a/a3/Masashi_Kishimoto_2014.png')
Author.create(:name => 'Akira Toriyama', :style => 'Syfy adventure', :image => 'https://en.wikipedia.org/wiki/Akira_Toriyama#/media/File:Akira_Toriyama.jpg')
Author.create(:name => 'Eiichiro Oda', :style => 'Pirates', :image => 'https://academy-of-fine-art.com/wp-content/uploads/2019/07/1-4.jpg')