require 'pry'
require 'rainbow'

# Calculator


def show_menu
  puts "Calculator" # TODO: could use method .center to make it look nice
  puts "-=" * 50 # El cheapo horizontal divide
  puts Rainbow("[a] - Addition").red
  puts Rainbow("[s] - Subtraction").orange
  puts Rainbow("[m] - Multiplication").yellow
  puts Rainbow("[d] - Division").green
  puts Rainbow("[p] - Power").blue
  puts Rainbow("[r] - Square root").indigo
  # TODO: Add other options
  puts Rainbow("[q] - Quit").violet
  print Rainbow("Enter your choice: ").bg(:orange).black
end

show_menu



menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts Rainbow("Addition").red
    print "Number: "
    num1 = gets.chomp.to_i
    print "Plus: "
    num2 = gets.chomp.to_i

    print "Result is: #{ num1 + num2 }\n"
    puts "-=" * 50

  when 's'
    puts Rainbow("Subtraction").orange
    print "Number: "
    num1 = gets.chomp.to_i
    print "Minus: "
    num2 = gets.chomp.to_i

    print "Result is: #{ num1 - num2 }\n"
    puts "-=" * 50

  when 'm'
    puts Rainbow("Multiplication").yellow
    print "Number: "
    num1 = gets.chomp.to_i
    print "Multiplied by: "
    num2 = gets.chomp.to_i

    print "Result is: #{ num1 * num2 }\n"
    puts "-=" * 50

  when 'd'
    puts Rainbow("Division").green
    print "Number: "
    num1 = gets.chomp.to_i
    print "Divided by: "
    num2 = gets.chomp.to_i

    print "Result is: #{ num1.to_f / num2 }\n"
    puts "-=" * 50

  when 'p'
    puts Rainbow("Power").blue
    print "Number: "
    num1 = gets.chomp.to_i
    print "to the power of: "
    num2 = gets.chomp.to_i

    print "Result is: #{ num1 ** num2 }\n"
    puts "-=" * 50

  when 'r'
    puts Rainbow("Square root").indigo
    print "Square root of: "
    num1 = gets.chomp.to_i

    print "Result is: #{ Integer.sqrt(num1) }\n"
    puts "-=" * 50

  else
    puts Rainbow("Invalid selection. You idiot.").violet
  end

  show_menu
  menu_choice = gets.chomp.downcase

end


puts "Thanks for using crappy calculator!"

# binding.pry
