require 'pry'
require 'cmath'

def menu
  puts "Welcome to Ruby REPL"
  puts "[q] - Quit"
end

def show_new_line
  print "> "
end

menu
show_new_line
menu_choice = gets.chomp

until menu_choice == 'q'

  puts(eval menu_choice)

  # end of choice
  show_new_line
  menu_choice = gets.chomp.downcase

end


# until menu_choice[0] == 'q'
#
#   n1 = menu_choice[0].to_f
#   n2 = menu_choice[2].to_f
#
#   cond1 = n1.is_a? Numeric
#   cond2 = n2.is_a? Numeric
#
#   if cond1 && (menu_choice[1] == "+") && cond2
#     puts(add(menu_choice[0].to_f, menu_choice[2].to_f))
#   elsif menu_choice[0] == "menu"
#     menu
#   end
#
#   # end of choice
#   show_new_line
#   menu_choice = gets.chomp.downcase
#
#
#
#
# end

puts "Thanks for using REPL!"









# binding.pry # debugger
