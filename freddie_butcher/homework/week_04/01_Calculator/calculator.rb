require 'pry'

def show_menu
  puts "--" *40 # El cheapo horizontal divide
  puts "Calculator" #TODO: Use .center to make it look nice
  puts "-=" *40 # El cheapo horizontal divide
  puts "[add] - Addition"
  puts "[sub] - Subtraction"
  puts "[mul] - Multiplication"
  puts "[div] - Division"
  puts "[sqr] - Square Root"
  puts "[pie] - Circle Area"
  #TODO add other options here
  puts "--" *40
  puts "[q] - Quit"
  print "[Enter your choice:] "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'add'
    print "What is the first number? "
    first_number = gets.to_i
    print "What is the second number? "
    second_number = gets.to_i
    puts "The result is #{first_number + second_number}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  when 'sub'
    print "What is the first number? "
    first_number = gets.to_i
    print "What is the second number? "
    second_number = gets.to_i
    puts "The result is #{first_number - second_number}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  when 'mul'
    print "What is the first number? "
    first_number = gets.to_i
    print "What is the second number? "
    second_number = gets.to_i
    puts "The result is #{first_number * second_number}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  when 'div'
    print "What is the first number? "
    first_number = gets.to_i
    print "What is the second number? "
    second_number = gets.to_i
    puts "The result is #{first_number / second_number}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  when 'sqr'
    print "What is the number to root? "
    first_number = gets.to_i
    puts "The result is #{Math.sqrt(first_number)}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  when 'pie'
    print "What the radius of the circle? "
    first_number = gets.to_i
    puts "The result is #{Math::PI*(first_number*first_number)}."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  else
    puts "Invalid selection, you idiot."
    puts "--" *40
    puts "--" *40
    puts "--" *40
    puts "--" *40
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy Calculator"

# binding.binding.pry
