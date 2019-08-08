require 'pry'

def show_menu
  puts "Calculator" # TODOL you could use .center here to make it look nice
  puts "-=" * 40 # El cheapo horizontal divide
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[m] - Multiply"
  puts "[sq] - SquareRoot"
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
    when 'a'
      # get number 1
      # get number 2
      # puts add(a, b)
      num1 = gets.to_i
      num2 = gets.to_i
      def add(num1, num2)
        num1 + num2 # Implicit return: Ruby returns the value of the last line of code
      end
      puts "The total was: #{ add num1, num2 }"
    when 's'
      x = gets.to_i
      y = gets.to_i
      def sub(x, y)
        x - y
      end
      puts "The Subtraction was: #{ sub x, y }"
    when 'd'
      num3 = gets.to_i
      num4 = gets.to_i
      def divide ( num3, num4 )
        num3 / num4
      end
      puts "The Division was: #{ divide num3, num4 }"
    when 'e'
      v = gets.to_i
      w = gets.to_i
      def expo (v, w)
        v ** w
      end
      puts "The Exponent was: #{ expo v, w }"
    when 'm'
      i = gets.to_i
      j = gets.to_i
      def multiply(i, j)
        i * j
      end
      puts "The Multiply was: #{ multiply i, j }"
    when 'sq'
      puts "The SquareRoot isnt working properly"
    else
      puts "Invalid selection. You idiot"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end


puts "Thanks for using crappy calculator! "
# # binding.pry
