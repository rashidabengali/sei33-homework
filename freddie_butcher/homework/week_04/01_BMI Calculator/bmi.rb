require 'pry'

def show_menu
  puts "--" *40 # El cheapo horizontal divide
  puts "Health Calculators" #TODO: Use .center to make it look nice
  puts "-=" *40 # El cheapo horizontal divide
  puts "[bmi] - Body Mass Index"
  puts "--" *40
  puts "[q] - Quit"
  print "[Enter your choice:] "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'bmi'
    print "What is your height in CM? "
    height = gets.to_i
    print "What is your weight in KG? "
    weight = gets.to_i
    BMI = weight / ((height * height)/1000)
    puts "Your BMI is #{ BMI }."
    if BMI < 18.5
      puts "Strict diet of pizza and beer needed. "
    elsif BMI < 30
      puts "Never change, you are perfect. "
    else
      puts "Alright big lad, the pub is no longer your friend. "
    end
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
