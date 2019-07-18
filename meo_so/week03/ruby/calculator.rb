require 'pry'
require 'rainbow/refinement'
using Rainbow

# addtion
def addition()
    puts "Please enter a number"
    num1 = gets.to_f
    puts "please enter another number"
    num2 = gets.to_f
    puts "Sum is #{num1 + num2}. ".yellow.underline
end

# deduction
def deduct()
    puts "Please enter a number"
    num1 = gets.to_f
    puts "Please enter the deduct amount"
    num2 = gets.to_f
    puts "Result of deduction is #{num1 - num2}.".yellow.underline
end

# multiply
def multiply()
    puts "Please enter a number"
    num1 = gets.to_f
    puts "Please enter number to multiply"
    num2 =gets.to_f
    puts "Product is #{num1 * num2}. ".yellow.underline
end

def division()
    puts "Please enter number to be divided"
    num1 = gets.to_f
    puts "please enter dividing number"
    num2 = gets.to_f
    puts "Result is #{num1 / num2}. ".yellow.underline
end

def exponent()
    puts "Please enter base number"
    num1 = gets.to_f
    puts "PLease enter the power"
    num2 = gets.to_f
    puts "Result is #{num1 ** num2}.".yellow.underline
end

def square_root()
    puts "Please enter a number to find square root"
    num1 = gets.to_f
    puts "Result is #{Math.sqrt(num1)}.".yellow.underline
end

def bmi()
    puts "Please enter your height in meters"
    num1 = gets.to_f
    puts "Please enter your weight in KG"
    num2 = gets.to_f
    puts "BMI is #{(weight / (height * height))}.".yellow.underline
end

def trip_time()
    puts "Please enter distance in KM"
    distance = gets.to_f
    puts "Please enter KM per liter of gas"
    km_per_l = gets.to_f
    puts "Please enter price per liter of gas"
    price_per_l = gets.to_f
    puts " Please enter speed as KM per hour"    
    speed = gets.to_f
    cost = (distance / km_per_l) * price_per_l
    trip_time = distance / speed
    puts "Cost of trip is $#{ cost }. Trip time is #{ trip_time } hours".red.bright.underline
end


def show_menu
    puts "Calculator" # TODO: you could use .center to make it nice
    puts "-="*50 # dividing line
    puts "[a] - Addition"
    puts "[d] - Deduction"
    puts "[m] - Multiply"
    puts "[i] - Division"
    puts "[e] - Exponent"
    puts "[s] - Square Root"
    puts "[b] - BMI"
    puts "[t] - Trip"
    # TODO: add other options here
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        addition
    when 'd'
        deduct
    when 'm'
        multiply
    when 'i'
        division
    when 'e'
        exponent
    when 's'
        square_root
    when 'b'
        bmi
    when 't'
        trip_time
    else 
        puts "Invalid selection."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "good bye"

# binding.pry


