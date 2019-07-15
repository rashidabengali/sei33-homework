# frozen_string_literal: true

puts 'Welcome to Ruby REPL'
loop do
  print '> '
  input = gets
  result = eval input
  puts result
end
