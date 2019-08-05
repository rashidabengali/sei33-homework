Architect.destroy_all

Architect.create(:name => 'Zaha Hadid', :nationality => 'Iraq', :dob => '1950-02-31', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxm_-Kajz7T6axdvnokPq8NLVRfJSSLOqCb2UGFx7SiVL-IYD', :famous => 'Heydar Aliyev Center')
Architect.create(:name => 'Daniel Libeskind', :nationality => 'Polish', :dob=> '1946-05-12', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2wky7zpbMZw3b32SRiu6IyiB1v7-0oMsn9oF_KEYWNmkPFqT0g', :famous => 'Royal Ontario Museum')
Architect.create(:name => 'Frank Lloyd Wright', :nationality => 'American', :dob => '1867-06-07', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOThcWAk5x2ACLYA5IE_hccGL2yXN8rnotP0CUqzWWwL3JF2Nk', :famous => 'Fallingwater')


House.destroy_all
House.create(:title => 'Heydar Aliyev Centre', :year => '2007', :country => 'Azerbeijan', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBVbVy3VdjGK5shVFI3NtcOQzQCkRNuZs_d6lIBBXFaou7wbGgQ')
House.create(:title => 'Royal Ontario Museum', :year => '2000', :country => 'Canada', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tKoK8ZVuDusnJJLx8GH19xWRO9siXsH0fIM-G5VWmQnnsOKv')
House.create(:title => 'Fallingwater', :year => '1993', :country => 'United States', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYDr0ndT_aHcCgUNsPY2vgATvOFHtQYU9DW0voDvoSi6sGw0M')
