require 'pry'
require 'rainbow'

def show_menu
  puts Rainbow("Calculator").yellow.center(90) # TODO: you could use .center here to make it look nice
  puts "-=" * 40 #El cheapo horizontal divide
  puts Rainbow("[a] - Addition").green
  puts Rainbow("[s] - Subtraction").green
  puts Rainbow("[m] - Multiplication").green
  puts Rainbow("[d] - Division").green
  puts Rainbow("[p] - Power").green
  puts Rainbow("[sq] - Square Root").green
  puts Rainbow("[bmi] - BMI").green
  puts Rainbow("[tcost] - trip cost").green
  puts Rainbow("[q] - Quit").green
  print "enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def add(a, b)
  a + b
end

def sub(a, b)
  a - b
end

def mul(a,b)
  a * b
end

def div(a,b)
  a / b
end

def pow(a,b)
  a ** b
end

def sqrt(a)
  Math.sqrt(a)
end

def bmi(weight, height)
  div(weight,pow((height/100),2))
end

def trip_cost (distance, miles_gallon, price_gallon)
  total_gallons = div(distance,miles_gallon)
  mul(total_gallons,price_gallon)
end


def getNumber
  gets.chomp.to_f
end

until menu_choice == 'q'
  case menu_choice
    when 'a'
      print "Enter the first number: "
      number_one = getNumber
      print "Enter the second number: "
      number_two = getNumber
      puts Rainbow("The result of #{number_one} + #{number_two} is: #{add(number_one,number_two)}").purple
    when 's'
      print "Enter the first number: "
      number_one = getNumber
      print "Enter the second number: "
      number_two = getNumber
      puts Rainbow("The result of #{number_one} - #{number_two} is: #{sub(number_one,number_two)}").purple
    when 'm'
      print "Enter the first number: "
      number_one = getNumber
      print "Enter the second number: "
      number_two = getNumber
      puts Rainbow("The result of #{number_one} * #{number_two} is: #{mul(number_one,number_two)}").purple
    when 'd'
      print "Enter the first number: "
      number_one = getNumber
      print "Enter the second number: "
      number_two = getNumber
      puts Rainbow("The result of #{number_one} / #{number_two} is: #{div(number_one,number_two)}").purple
    when 'p'
      print "Enter the base number: "
      base = getNumber
      print "Enter the exponent number: "
      exponent = getNumber
      puts Rainbow("The result of #{base} ^ #{exponent} is: #{pow(base,exponent)}").purple
    when 'sq'
      print "Enter a number: "
      number = getNumber
      puts Rainbow("The square root of #{number} is: #{sqrt(number)}").purple
    when 'bmi'
      print "Enter weight (kgs): "
      weight = getNumber
      print "Enter height (cms): "
      height = getNumber
      puts Rainbow("Your BMI is: #{bmi(weight,height)}").purple
    when 'tcost'
      print "Enter distance (miles): "
      distance = getNumber
      print "Enter miles per gallon: "
      miles_gallon = getNumber
      print "Enter price ($) per gallon: "
      price_gallon = getNumber
      puts Rainbow("The cost of your trip is: #{trip_cost(distance,miles_gallon,price_gallon)}").purple
    else
      puts Rainbow("Invalid selection. Youn idiot.").purple
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you"
# binding.pry
