require './trainLines'
require './MTA'

puts "1. plan_trip('N', '8th', 'N', 'Times Square')"
plan_trip("N", '8th', 'N', 'Times Square')
$count = 0
puts ""

puts "2. plan_trip('N', 'Times Square', '6', '33rd')"
plan_trip('N', 'Times Square', '6', '33rd')
$count = 0
puts ""

# expectedAnswer = ["You are already at your destination ya dummy.", "0 stops in total."];
puts "3. plan_trip('N', 'Union Square', 'N', 'Union Square')"
plan_trip('N', 'Union Square', 'N', 'Union Square');
puts ""

# expectedAnswer = ["You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd, Grand Central.", "8 stops in total."];
puts "4. plan_trip('n', 'Times Square', '6', 'Grand Central')"
plan_trip('N', 'Times Square', '6', 'Grand Central');
puts ""
