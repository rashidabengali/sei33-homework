# frozen_string_literal: true

require 'pry'

def show_menu
  puts 'Calculator' # TODO: you could use .center here to make it look nice.
  puts '-=' * 40 # El cheapo horizontal dividing line
  puts '[a] - Addition'
  puts '[s] - Subraction'
  puts '[m] - multiplication'
  puts '[d] - Division'
  puts '[e] - Exponent'
  puts '[r] - Square root'
  puts '[q] - Quit'
  print 'Enter your choice: '
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts 'Enter first number: '
    num1 = gets.to_i
    puts 'Enter second number: '
    num2 = gets.to_i

    def add(num1, num2)
      result = num1 + num2
end
    puts "Answer of Addition is #{add num1, num2}"
  when 's'
    puts 'Enter first number: '
    num1 = gets.to_i
    puts 'Enter second number: '
    num2 = gets.to_i

    def sub(num1, num2)
      result = num1 - num2
end
    puts "Answer of Subraction is #{sub num1, num2}"

  when 'm'
    puts 'Enter first number: '
    num1 = gets.to_i
    puts 'Enter second number: '
    num2 = gets.to_i

    def multi(num1, num2)
      result = num1 * num2
  end
    puts "Answer of multiplication is #{multi num1, num2}"

  when 'd'
    puts 'Enter first number: '
    num1 = gets.to_i
    puts 'Enter second number: '
    num2 = gets.to_i

    def div(num1, num2)
      result = num1 / num2
  end
    puts "Answer of Division is #{div num1, num2}"

  when 'e'
    puts 'Enter first number: '
    num1 = gets.to_i
    puts 'Enter second number: '
    num2 = gets.to_i

    def expo(num1, num2)
      result = num1**num2
  end
    puts "Answer of Exponent is #{expo num1, num2}"

  when 'r'
    puts 'Enter first number: '
    num1 = gets.to_i
    # puts 'Enter second number: '
    # num2 = gets.to_i
    def sqrte(num1)
      result = Math.sqrt(num1)
  end
    puts "Answer of Exponent is #{sqrte num1}"

  else
    puts 'Invalid selection. You idiot.'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using crappy calculator!'
# binding.pry
