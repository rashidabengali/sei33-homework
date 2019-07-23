# == Schema Information
#
# Table name: mountains
#
#  id           :integer          primary key
#  name         :text
#  image        :text
#  map          :text
#  country      :text
#  parent_range :text
#  elevation    :integer
#

Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/270px-Everest_kalapatthar.jpg", :map => "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nepal_Province_No_1_rel_location_map.svg/256px-Nepal_Province_No_1_rel_location_map.svg.png", :country => "Nepal and China", :parent_range => "Himalayas", :elevation => "8848"

Mountain.create :name => 'Manaslu', :image => "https://d3hne3c382ip58.cloudfront.net/resized/750x420/16-days-manaslu-circuit-trekking-tour-2-17984_1559833743.JPG", :map => "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nepal_rel_location_map.svg/256px-Nepal_rel_location_map.svg.png", :country => "Nepal", :parent_range => "Pakistan", :elevation => "8163"

Mountain.create :name => 'Nanga Parbat', :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Fairy_Meadows_and_the_view_of_Nanga_Parbat.jpg/270px-Fairy_Meadows_and_the_view_of_Nanga_Parbat.jpg", :map => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg8O0vxuwdXGbly8p4057Wk-xv6i8H7ShUxoS6Qj6AS-sbzYO", :country => "Nepal and China", :parent_range => "Himalayas", :elevation => "8126"
