# def max(num1, num2)
#
# print "what is the 1 nr"
# num1 = gets.to_i
# print "what is the 2 nr"
# num2 = gets.to_i
#
# end
# puts max(1,2)



def show_menu
  puts "Calculator" # TODO: you could use .center here to make it look nice.
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add other options here
  puts "[bmi] - BMI calculator"
  puts "[d] - Division"
  # TODO: Add other options here
  puts "[m] - Multiplication"

  puts "[p] - Power"
  puts "[s] - Subtraction"
  puts "[sr] - Square root"
  puts "[tc] - Trip calculator"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase




until menu_choice == 'q'
  case menu_choice
    when 'a'
      print "What is your first number "
      num1 = gets.to_f
      print "What is your second number "
      num2 = gets.chomp().to_f
      puts num1 + num2
    when 'bmi'
      print "What is your weight "
      num1 = gets.to_f
      print "what is your height "
      num2 = gets.chomp().to_f
      puts num1 / (num2 ** 2)
    when 'd'
      print "What is your first number "
      num1 = gets.to_f
      print "What is your second number "
      num2 = gets.chomp().to_f
      puts num1 / num2
  when 'm'
    print "What is your first number "
    num1 = gets.to_f
    print "What is your second number "
    num2 = gets.chomp().to_f
    puts num1 * num2
  when 'p'
    print "What is your first number "
    num1 = gets.to_f
    print "What is your second number "
    num2 = gets.chomp().to_f
    puts num1 ** num2
  when 's'
    print "What is your first number "
    num1 = gets.to_f
    print "What is your second number "
    num2 = gets.chomp().to_f
    puts num1 / num2
  when 'sr'
    print "What is your first number "
    num1 = gets.to_f
    puts Math.sqrt(num1)
  # when 'tc'
  #   print "What is your first number "
  #   num1 = gets.to_f
  #   puts Math.sqrt(num1)
  else
      puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"
# binding.pry
