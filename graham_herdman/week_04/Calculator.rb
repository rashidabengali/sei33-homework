require 'pry'
require 'cmath'

def show_menu
  puts "Calculator".center(20) # TODO: you could use .center here to make it look nice
  puts "-=" * 40 # El cheapo horizontal divide
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - exponentiation"
  puts "[sr] - square root"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def input
  print("enter your first number: ")
  a = gets.to_f
  print("enter your second number: ")
  b = gets.to_f
  return [a, b]
end

def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
end

def exponent(a, b)
  a ** b
end

def exponent(a, b)
  a ** b
end

def squareRoot(a)
  CMath.sqrt(a)
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
    when 'a'
      nums = input
      a = nums[0]
      b = nums[1]
      puts("#{a} + #{b} = #{add(a, b)}")
    when 's'
      nums = input
      a = nums[0]
      b = nums[1]
      puts("#{a} - #{b} = #{subtract(a, b)}")
    when 'm'
      nums = input
      a = nums[0]
      b = nums[1]
      puts("#{a} x #{b} = #{multiply(a, b)}")
    when 'd'
      nums = input
      a = nums[0]
      b = nums[1]
      puts("#{a} / #{b} = #{divide(a, b)}")
    when 'e'
      print("enter the base number: ")
      a = gets.to_f
      print("enter the exponent: ")
      b = gets.to_f
      puts("#{a}^#{b} = #{exponent(a, b)}")
    when 'sr'
      print("enter the number: ")
      a = gets.to_f
      puts("sqrt(#{a}) = #{squareRoot(a)}")
    else
      puts "Invalid selection. You idiot."
  end

puts('')
show_menu
menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"









# binding.pry # debugger
