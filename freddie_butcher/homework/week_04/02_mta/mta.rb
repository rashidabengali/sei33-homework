require 'pry'

# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

$subway_system = {
  :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :L => ['8th', '6th', 'Union Square','3rd', '1st'],
   6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# REFERENCE
# Return Times Square
puts $subway_system[:N][0]
# Return Index of Times Square
$subway_system[:N].index("Times Square")
# Return :N


# case station_choice
# print "Departure Station? "
# dep_station = gets.to_s
# print "Departure Line? "
# dep_line = gets.to_s
# print "Arrival Station? "
# arr_station = gets.to_s
# print "Arrival Line? "
# arr_line = gets.to_s
# end

dep_station = 'Times Square'
dep_line = :N
arr_station = '8th'
arr_line = 'N'

$dep_index = $subway_system[dep_line].index(dep_station)
$arr_index = $subway_system[arr_line].index(arr_station)

if dep_line = arr_line

if $dep_index > $arr_index
  return [[dep_line][dep_index]..[arr_line][arr_index]]
else
  return [[dep_line][dep_index]..[arr_line][arr_index]].reverse

else

  return [[dep_line][dep_index]..[dep_line]["Union Square"]]
  &
  return [[arr_line]["union Square"]..[arr_line][arr_station]


binding.pry

#
# def add (a,b)
#   result = a + b
# result
# end
#
# total = add 10,4
# puts "The total was #{total}"
#
#
#
# if dep_line == arr_line
#   num_stops = dep_line.index(dep_station) - arr_line.index(arr_station)
# puts num_stops
# else
# puts "Different Lines"
# end

# Input line and station
# Search for start station and end station
# 1. If stations are same line or different
# If same - work out if going up or down
# If different - work out how to get to Union Square
# Fill array with stations visited
# List stations stations
# State number of stations visited
# Output as per above
