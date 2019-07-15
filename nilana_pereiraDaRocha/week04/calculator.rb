# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. 
# Your function should allow the user to choose which operation is expected, enter in the values 
# to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

require 'pry'
 
def show_menu
  puts "Calculator".center(80) # TODO: you could use .center here to make it look nice.
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - Addition" 
  puts "[s] - Subtraction" 
  puts "[m] - Multiplication" 
  puts "[d] - Division" 
  puts "[e] - Exponential" 
  puts "[r] - Square Roots"
  puts "[b] - Body Mass Index" 


  
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
#gets.chomp takes input from the user through the keyboard and store it in the variable a.
# So, if the user enters xyz, then you can think that now gets.chomp is "xyz".
# So, a = gets.chomp will then be equivalent to a = "xyz".
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "First value" 
        first_value = gets.chomp.to_i #integer.
        puts "Second value" 
        second_value = gets.chomp.to_i
        result = first_value + second_value
        puts "Result = #{result}"
    when 's'
        puts "First value" 
        first_value = gets.chomp.to_i
        puts "Second value" 
        second_value = gets.chomp.to_i
        result = first_value - second_value
        puts "Result = #{result}"
        
    when 'm'
        puts "First value" 
        first_value = gets.chomp.to_i
        puts "Second value" 
        second_value = gets.chomp.to_i
        result = first_value * second_value
        puts "Result = #{result}"
        
    when 'd'
        puts "First value" 
        first_value = gets.chomp.to_i
        puts "Second value" 
        second_value = gets.chomp.to_i
        result = first_value / second_value
        puts "Result = #{result}"
        
    when 'e'
        puts "First value" 
        first_value = gets.chomp.to_i
        puts "Exponential value" 
        exponential_value = gets.chomp.to_i
        result = first_value ** exponential_value
        puts "Result = #{result}"

    when 'r'
        puts "Value" 
        first_value = gets.chomp.to_i
        result = Integer.sqrt(first_value)
        puts "Result = #{result}"

    when 'b'
        puts "Kilograms" 
        kilograms = gets.chomp.to_i
        puts "Height in centimeters" 
        height = gets.chomp.to_f / 100
        exponential_height = height ** 2
        result = kilograms / exponential_height
        puts "Result = #{result.round(2)}"

        if result <= 18.9 
            print "Underweight"

        elsif result >= 19 and result <= 24.9
            print "Healthy weight"

        elsif result >=25 and result <= 29.9
            print "Overweight"

        elsif result >= 30 
            print "Obese"
        end

    else
        puts "Invalid selection. You idiot."
    end
    
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"
# binding.pry