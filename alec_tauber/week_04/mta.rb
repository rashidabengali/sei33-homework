require 'pry'

# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
l = ["8th", "6th", "Union Square", "3rd", "1st"]
six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

puts "Hello please see the lines and stops available"
puts "N line: " + n.to_s
puts "L Line: " + l.to_s
puts "6 Line: " + six.to_s
# 
#
#
# puts "What line will you take? (N) N line, (L) L line, or (6) 6 Line"
# 	online = gets.chomp.downcase
# 	if online = 6 then online == "six"
# puts "What stop will you get on at?"
# 	onstop = gets.chomp.downcase
# puts "What line will you get off from? (N) N line, (L) L line, or (6) 6 Line"
# 	offline = gets.chomp.downcase
# puts "What stop will you get off at?"
# 	offstop = gets.chomp.downcase

# # Exit on same line?
# if online == offline then sameline
#
# puts sameline



# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
#
# def line_menu
#   puts "Testing to see this"
#   puts "[n] - N Line"
#   puts "[l] - L Line"
#   puts "[s] - 6 line"
#   puts "[q] - Quit"
#   print "Enter your choice: "
# end
#
# line_menu
# menu_choice = gets.chomp.downcase
#
# until menu_choice == 'q'
#   case menu_choice
#   when 'n'
#       puts "N line: " + n.to_s
#     when 's'
#       puts "The Subtraction was: "
#     when 'l'
#       puts "The Division was: "
#     else
#       puts "Invalid selection. You idiot"
#     end
#     line_menu
#     menu_choice = gets.chomp.downcase
# end
#
#
# puts "Thanks for using crappy Menu! "
binding.pry
