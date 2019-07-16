
require 'pry'
 
puts "Welcome to Ruby REPL"

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    puts eval menu_choice
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"
# binding.pry   