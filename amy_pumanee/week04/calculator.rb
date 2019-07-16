require 'pry'
require 'rainbow'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[sq] - Square roots"
  puts "[mo] - Mortgage"
  puts "[b] - BMI"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice

  when 'a'
    print "Enter first number: "
    x = gets.to_i
    print "Enter second number: "
    y = gets.to_i
    def add(x, y)
      x + y
  end
  puts "The Addition is #{ add x, y }"

  when 's'
    print "Enter first number: "
    x = gets.to_i
    print "Enter second number: "
    y = gets.to_i
    def sub(x, y)
      x - y
  end
  puts "The Subtraction is #{ sub x, y }"

  when 'm'
    print "Enter first number: "
    x = gets.to_i
    print "Enter second number: "
    y = gets.to_i
    def mul(x, y)
      x * y
  end
  puts "The Multiplication is #{ mul x, y }"

  when 'd'
    print "Enter first number: "
    x = gets.to_i
    print "Enter second number: "
    y = gets.to_i
    def div(x, y)
      x / y
  end
  puts "The Division is #{ div x, y }"

  when 'e'
    print "Enter first number: "
    x = gets.to_i
    print "Enter second number: "
    y = gets.to_i
    def exp(x, y)
      x ** y
  end
  puts "The Exponent is #{ exp x, y }"

  when 'sq'
    print "Enter your number: "
    z = gets.to_i
    def squ(z)
      Math.sqrt(z)
  end
  puts "The Square roots is #{ squ z }"

  when 'mo'
    print "Input your principal: "
    p = gets.to_f
    print "Input monthly interest rate: "
    r = gets.to_f
    print "Input number of payments: "
    y = gets.to_f

    rate = (r/100)/12
    n = y * 12

    def mor(p, rate, n)
      p * ( (rate *  (( 1 + rate) ** n) ) / (( (1 + rate) ** n) - 1) )
  end
  puts "The Mortgage is #{ mor p, rate, n }"

  when 'b'
    print "Input your weight(kg): "
    w = gets.to_f
    print "Input your height(m): "
    h = gets.to_f

    def bmi(w, h)
      w / (h ** 2)
    end

    puts "BMI is #{ bmi w, h }"

  else
    puts "Invalid selection."
end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using Calculator!!"

# binding.pry
