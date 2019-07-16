#require 'pry'

def show_menu
  puts "Calculator" # TODO: you could use a method called .center to make it look nice
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division\n\n"
  puts "[e] - Exponent"
  puts "[sq] - Square Root"
  # TODO: add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end

def add (a, b)
  a + b
end

def sub (a, b)
  a - b
end

def multiply (a, b)
  a * b
end

def divide (a, b)
  div = a / b
  mod = a % b
  return "#{div.to_s} & #{mod.to_s}/#{b}"
end

def exponent (a, b)
  a ** b
end

def squareroot (a)
  Integer.sqrt(a)
end

show_menu
menu_choice = gets.chomp.downcase;


until menu_choice == 'q'
  case menu_choice
    when 'a'
      print "> "
      number1 = gets.to_i
      print " + "
      number2 = gets.to_i
      total = add number1, number2
      puts "#{number1} + #{number2} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    when 's'
      print "> "
      number1 = gets.to_i
      print " - "
      number2 = gets.to_i
      total = sub number1, number2
      puts "#{number1} - #{number2} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    when 'm'
      print "> "
      number1 = gets.to_i
      print " * "
      number2 = gets.to_i
      total = multiply number1, number2
      puts "#{number1} * #{number2} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    when 'd'
      print "> "
      number1 = gets.to_i
      print " / "
      number2 = gets.to_i
      total = divide number1, number2
      puts "#{number1} / #{number2} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    when 'e'
      print "> "
      number1 = gets.to_i
      print " ** "
      number2 = gets.to_i
      total = exponent number1, number2
      puts "#{number1} ** #{number2} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    when 'sq'
      print "> square root of: "
      number1 = gets.to_i
      total = squareroot(number1)
      puts "The square root of #{number1} = #{total} \n\n\n"
      show_menu
      menu_choice = gets.chomp.downcase;
    else
      puts "Invalid selection, you idiot."
      menu_choice = "q"
  end
end



puts "Thanks for using crappy calculator!"
#binding.pry
