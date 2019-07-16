# frozen_string_literal: true

puts 'Enter the Weight:'
weight = gets.to_f
puts 'Enter the Height: '
height = gets.to_f
result = weight / (height * height)
puts "your BMI is: #{result}"

if result < 15
  puts 'Your BMI is Very severely underweight'
elsif result >= 15 && result < 16
  puts 'Your BMI is Severely underweight'
elsif result >= 16 && result < 18.5
  puts 'Your BMI is Underweight'
elsif result >= 18.5 && result < 25
  puts 'Your BMI is Normal'
elsif result >= 25 && result < 30
  puts 'Your BMI is Overweight'
elsif result >= 30 && result < 35
  puts 'Your BMI is Moderately obese'
elsif result >= 35 && result < 40
  puts 'Your BMI is Severely obese'
elsif result >= 40
  puts 'Your BMI is Very severely obese'
else
  puts 'Sorry I dont know?'
end
