

def show_menu
  puts "Calculator" # TODO: you could use. center here to make it look nice
  puts "-=" * 40
  puts "[a] - Addition"
  # TODO: add other potions here
  puts "[m] - Minus"
  puts "[t] - Times"
  puts "[d] - Divide"
  puts "[q] - Quit"
  print "Enter your choice:
  "
end

def add( number_A, number_B )
  number_A + number_B
end

def minus( number_A, number_B )
  number_A - number_B
end

def times( number_A, number_B )
  number_A * number_B
end

def divide( number_A, number_B )
  number_A / number_B
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'

    print "Number A "
    number_A = gets.to_i
    print "Number B "
    number_B = gets.to_i
    # puts add( a, b)
    puts "An addition of Number B and A #{add( number_A, number_B )}"

  when 'm'

    print "Number A "
    number_A = gets.to_i
    print "Number B "
    number_B = gets.to_i
    # puts minus( a, b)
    puts "A Subtraction of Number B and A #{minus( number_A, number_B )}"

  when 't'

    print "Number A "
    number_A = gets.to_i
    print "Number B "
    number_B = gets.to_i
    # puts minus( a, b)
    puts "A times of Number B and A #{times( number_A, number_B )}"

  when 'd'

    print "Number A "
    number_A = gets.to_i
    print "Number B "
    number_B = gets.to_i
    # puts minus( a, b)
    puts "A Divide of Number B and A #{divide( number_A, number_B )}"



  else
    puts "Invalid selection. You idiot."
  end

show_menu
menu_choice = gets.chomp.downcase
end

puts "thanks for using crappy calculator!"
