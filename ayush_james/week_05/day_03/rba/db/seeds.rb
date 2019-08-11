Note.destroy_all

puts "Printing notes..."
Note.create(:value => '5', :color => 'Violet', :issue => '2016/09/01', :image => 'https://banknotes.rba.gov.au/banknote-features/images/new-five/new-five-banknote.jpg')
Note.create(:value => '10', :color => 'Blue', :issue => '2017/09/20', :image => 'https://banknotes.rba.gov.au/banknote-features/images/new-ten/new-ten-banknote.jpg')
Note.create(:value => '20', :color => 'Red', :issue => '2019/10/01', :image => 'https://banknotes.rba.gov.au/banknote-features/images/new-twenty/new-twenty-banknote.jpg')
Note.create(:value => '50', :color => 'Yellow', :issue => '2018/10/18', :image => 'https://banknotes.rba.gov.au/banknote-features/images/new-fifty/new-fifty-banknote.jpg')


Icon.destroy_all

puts "Creating icons..."
Icon.create(:name => 'Queen Elizabeth II', :occupation => 'Monarch', :known => 'Being queen of the Commonwealth realms', :image => 'https://en.m.wikipedia.org/wiki/Elizabeth_II#/media/File%3AQueen_Elizabeth_II_in_March_2015.jpg')
Icon.create(:name => 'Banjo Paterson', :occupation => 'Author, journalist, composer, clerk, and poet', :known => 'His poems, especially, “Waltzing Matilda” (1895)', :image => 'https://en.m.wikipedia.org/wiki/Banjo_Paterson#/media/File%3ABanjo_Patterson.jpg')
Icon.create(:name => 'Mary Reibey', :occupation => 'Businesswoman', :known => 'Exemplary business leader and role model of success', :image => 'https://en.m.wikipedia.org/wiki/Mary_Reibey#/media/File%3AMary_Reibey_State_Library_of_NSW_Min_76.jpg')
Icon.create(:name => 'David Unaipon', :occupation => 'Preacher, inventor, and author', :known => 'His contribution to the greater society, and helping to break many Indigenous Australian stereotypes', :image => 'https://en.m.wikipedia.org/wiki/David_Unaipon#/media/File%3ADavid_Unaipon.jpg')
