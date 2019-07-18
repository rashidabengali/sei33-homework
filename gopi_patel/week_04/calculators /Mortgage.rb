# frozen_string_literal: true

puts 'Enter the principal: '
principal = gets.to_f
puts 'Enter the interest: '
interest = gets.to_f
puts 'Enter lenght of loan in year'
year = gets.to_i

def morg(principal, interest, year)
  r = (interest / 12) / 100
  n = year * 12
  m = principal * ((r * ((1 + r)**n)) / ((1 + r)**n - 1))
  m
end

puts "Your monthly payment is #{morg principal, interest, year}"
