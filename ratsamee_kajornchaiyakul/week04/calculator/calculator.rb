require 'pry'

def show_menu
    puts "Calculator" #TODO: you could use .center here to make it look nice.
    puts "-+" * 40
    # addition your choice
    puts "[a] - add"
    puts "[s] - subtract"
    puts "[d] - divide"
    puts "[m] - multiple"
    puts "[e] - exponents"
    puts "[r] - square root"
    puts "[q] - Quit"
    puts "-+" * 40
    print "Entr your choice: "
end

def get_number(number)
    print "Give me number #{number}: ";
    gets.to_i
end

def add(num1, num2)
    num1 + num2
end

def subtract(num1, num2)
    num1 - num2
end

def divide(num1, num2)
    num1.to_f / num2
end

def multiple(num1, num2)
    num1 * num2
end

def exponents(num1, num2)
    num1 ** num2
end

def square_root()
    Math.sqrt(get_number(1))
end

def calculator()
    show_menu
    menu_choice = gets[0].downcase

    until menu_choice == 'q'
        
        case menu_choice
            when 'a' # add
                num1 = get_number(1) 
                num2 = get_number(2)
                puts "The result is #{ add num1, num2 }"  
            when 's'
                num1 = get_number(1) 
                num2 = get_number(2)
                puts "The result is #{ subtract num1, num2 }"
            when 'd'
                num1 = get_number(1) 
                num2 = get_number(2)
                puts "The result is #{ divide num1, num2 }" 
            when 'm'
                num1 = get_number(1) 
                num2 = get_number(2)
                puts "The result is #{ multiple num1, num2 }" 
            when 'e'
                num1 = get_number(1) 
                num2 = get_number(2)
                puts "The result is #{ exponents num1, num2 }" 
            when 'r'
                puts "The result is #{ square_root }" 
            else
                puts "Invalid selection. You idiot."        
        end

        puts "==" * 40 
        show_menu
        menu_choice = gets[0].downcase
    end
    puts "Thanks for using crappy calculator"
end
debugger = false
calculator if debugger

def mortgage_calculator()
    print "Enter your principal: "
    principal = gets.to_f

    print "Interest rate/ year: "
    rate_per_year = gets.to_f

    print "How many months do you like to pay: "
    months = gets.to_i * 12

    rate = (rate_per_year/100)/12

    part1 = multiple (exponents (1+rate), months), rate
    part2 = subtract (exponents (add 1, rate), months), 1
    payment = multiple (divide part1, part2), principal

    puts "Monthly payment is #{ '%.2f' % payment}" 
end

def bmi_calculator()
    print "How is your height(cm): "
    height = gets.to_f/100

    print "How is your weight(kg): "
    weight = gets.to_f
    
    square_meter = 0
    
    puts "A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years."
    puts "Your BMI is #{ '%.2f' % (divide weight, exponents(height, 2)) }"
end

def trip_calculator
    # distance
    print "Trip Distance (Miles): "
    distance = gets.to_f

    # miles per gallon
    print "Fuel Economy (Miles/gallon): "
    miles_per_gallon = gets.to_f

    # price per gallon
    print "Fuel Price: "
    price_per_gallon = gets.to_f

    # speed in miles per hour 
    print "Speed (Miles/hour): "
    speed_per_hour = gets.to_f

    trip_fuel_cost = multiple (divide distance, miles_per_gallon), price_per_gallon

    puts "Trip fuel cost is $#{ '%.2f' % trip_fuel_cost } use #{ '%.2f' % (divide distance, speed_per_hour) } hours"

end

binding.pry