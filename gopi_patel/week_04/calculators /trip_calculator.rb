# frozen_string_literal: true

puts 'Enter the distance:'
distance = gets.to_f
puts 'Enter miles per gallon: '
gallon = gets.to_f
puts 'Enter price per gallon:'
price = gets.to_f
puts 'Enter speed in miles per hour: '
speed = gets.to_f

trip_time = distance / speed
puts "Total trip time #{trip_time} hours"
cost = (distance / gallon) * price
puts "Total cost $#{cost}"
