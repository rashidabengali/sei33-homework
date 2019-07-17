require 'pry'

def show_menu
    puts "Welcome to the calculator, how can I help you today?".center(70) #.center here to make it looks nice
    puts "-=" * 40 #horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[sq] - Square root"
    puts "[e] - exponential"
    puts "[q] - Quit"
end

###################################addition###################################
def addition (num1, num2) 
    result = num1 + num2
end

###################################subtraction###################################
def subtract (num1, num2)
    result = num1 - num2
end

###################################multiplication###################################
def multiply (num1, num2)
    result = num1 * num2
end

###################################division###################################
def dividing (num1, num2)
    result = num1 / num2
end

###################################squareroot###################################
def square_r (num1)
    result = Math.sqrt(num1)
end

###################################exponent###################################
def exp (num1, num2)
    result = num1 ** num2
end


show_menu

##############Getting user to put something and return the result#####################
menu_choice = gets.chomp.downcase
until menu_choice == 'q'
  case menu_choice
    when 'a'
        print "Give me a number: "
       input1 = gets.to_f
        print "Give me another one: "
       input2 = gets.to_f
      total = addition input1, input2
      puts "#{input1} + #{input2} is #{total}"

    when 's'
        print "Give me a number: "
       input1 = gets.to_f
        print "Give me another one: "
       input2 = gets.to_f
      total = subtract input1, input2
      puts "#{input1} - #{input2} is #{total}"

    when 'm'
        print "Give me a number: "
       input1 = gets.to_f
        print "Give me another one: "
       input2 = gets.to_f
      total = multiply input1, input2
      puts "#{input1} - #{input2} is #{total}"

    when 'd'
        print "Give me a number: "
       input1 = gets.to_f
        print "Give me another one: "
       input2 = gets.to_f
      total = dividing input1, input2
      puts "#{input1} - #{input2} is #{total}"
    
    when 'sq'
        print "Give me a number: "
        input1 = gets.to_i
       total = square_r input1
       puts "Square roots of #{input1} is #{total}"
       
    when 'e'
        print "Give me a number: "
       input1 = gets.to_f
        print "Give me another one: "
       input2 = gets.to_f
      total = exp input1, input2
      puts "#{input1} ^ #{input2} is #{total}"

    else
      puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"
# binding.pry
