require 'pry'

def show_menu
  puts " "
  puts "Calculator".center(85) #TODO: You could use a .center here to make it look nice.
  puts "-=" * 43 #El cheapo horizontal dividing line.
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Expotential"
  puts "[r] - Square Root"
  puts "[mort] - Mortgage Monthly Repayment"
  puts "[bmi] - Body Mass Index"
  puts "[trip] - Trip Calculator"
  puts " "
  puts "[q] - Quit"
  puts " "
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
    when 'a'
      print "Input value 1: "
      number1 = gets.to_i
      print "Input value 2: "
      number2 = gets.to_i
      puts "#{number1} + #{number2} = #{number1 + number2}"
      sleep(5)

    when 's'
      print "Input value 1: "
      number1 = gets.to_i
      print "Input value 2: "
      number2 = gets.to_i
      puts "#{number1} - #{number2} = #{number1 - number2}"
      sleep(5)

    when 'm'
      print "Input value 1: "
      number1 = gets.to_i
      print "Input value 2: "
      number2 = gets.to_i
      puts "#{number1} * #{number2} = #{number1 * number2}"
      sleep(5)

    when 'd'
      print "Input value 1: "
      number1 = gets.to_i
      print "Input value 2: "
      number2 = gets.to_i
      puts "#{number1} / #{number2} = #{number1 / number2}"
      sleep(5)

    when 'e'
      print "Input value: "
      number1 = gets.to_i
      print "Input power: "
      number2 = gets.to_i
      puts "#{number1} to the power of #{number2} = #{number1 ** number2}"
      sleep(5)

    when 'r'
      print "Input value: "
      number1 = gets.to_i
      puts "The square root of #{number1} = #{Math.sqrt(number1)}"
      sleep(5)

    when 'mort'
      print "Amount borrowed (exclude $): "
      p = gets.to_f
      print "Monthly interest rate (exclude %): "
      i = gets.to_f
      print "Number of repayments on loan: "
      n = gets.to_f

      ratea = 1 + i
      rateb =  ratea ** n
      top = i * rateb
      bottom = rateb - 1
      bracket = top / bottom
      monthly = (p * bracket).round(2)
      puts "Your repayment is $#{monthly} per month."
      sleep(8)

# M = P [i(1+i)^n/ 1-(1+i)^n]
#
# M = Your monthly repayment, the figure you’re trying to solve for.
# P =The principal on the loan, or original amount you borrowed.
# i = Your effective monthly interest rate. Remember, the rate you see advertised by the bank is an annual interest rate, so you’ll need to divide by 12 to get your monthly interest rate.
# n = The total number of repayments on the loan.


    when 'bmi'
      print "Weight in kg: "
      w = gets.to_f
      print "Height in cm: "
      h = gets.to_f
      puts "Your Body Mass Index is #{((w / h / h) * 10000).round(1)}."
      sleep(8)


    when 'trip'
      print "distance in kms: "
      d = gets.to_f
      print "litres per 100km: "
      l = gets.to_f
      print "price per litre of fuel: "
      p = gets.to_f
      print "your speed in km/h: "
      s = gets.to_f
      time = ((d / s)*60).round(2)
      hour = (time / 60).floor
      minutes = (time % 60).round
      cost = (d * (l/100) * p)

      if hour < 1
        puts "You will reach your destination in #{minutes} minutes. It will cost you $#{ cost.round(2) }."
      elsif hour < 2
        puts "You will reach your destination in #{hour} hour and #{minutes} minutes. It will cost you $#{ cost.round(2) }."
      else
        puts "You will reach your destination in #{hour} hours and #{minutes} minutes. It will cost you $#{ cost.round(2) }."
      end

      sleep(10)


    else
      puts "Invalid selection. Try Again."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the Ruby Calculator!"
#binding.pry
