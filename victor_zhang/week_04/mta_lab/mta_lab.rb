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

print 'Origin: Line [N] [L] [6]: '

# line_origin = gets.chomp.upcase

#
# until correct_line == true
#   case line_origin
#   when 'N'
#     puts 'Stop: [Time Square] [34th] [28th] [23rd] [Union Square] [8th]'
#   when 'L'
#     puts 'Stop: [8th] [6th] [Union Square] [3rd] [1st]'
#   when '6'
#     puts 'Stop: [Grand Central] [33rd] [28th] [Union Square] [Astor]'
#   else
#     puts 'Invalid Line, input again'
#   end
#
#   print 'Origin: Line [N] [L] [6]: '
#   line_origin = gets.chomp.to_s.upcase
#
# end


# stop_origin = gets.chomp.split(', ')

# user_off = gets.chomp.split(', ')

# binding.pry


# @subway = { :line => 'N', :stops => %w( Times_Square 34th 28th 23rd Union Square 8th ),
# :line => 'L', :stops => %w( 8th 6th Union Square 3rd 1st ),
# :line => '6', :stops => %w( Grand_Central 33rd 28th 23rd Union Square Astor ) }

@subway_line = {
  'N' => { :stops => [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ]},
  'L' => { :stops => [ '8th', '6th', 'Union Square', '3rd', '1st' ]},
  '6' => { :stops => [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]}
}

p @subway_line

#
#
# def plan_trip(org_line,org_stop,des_line,des_stop)
#
#   org_line = org_line.upcase
#   des_line = des_line.upcase
#
#
#   grand_central = @subway_line['N'][:stops] & @subway_line['L'][:stops] & @subway_line['6'][:stops]
#   p grand_central
#
#   org_stop_index = @subway_line[org_line][:stops].index(org_stop)
#   des_stop_index = @subway_line[des_line][:stops].index(des_stop)
#
#   org_union_square = @subway_line[org_line][:stops].index('Union Square')
#   des_union_square = @subway_line[des_line][:stops].index('Union Square')
#
#   if org_line == des_line
#     if org_stop_index > des_stop_index
#       p @subway_line[org_line].reverse[org_stop_index..des_stop_index]
#     else
#       p @subway_line[org_line][org_stop_index..des_stop_index]
#     end
#
#   elsif org_line != des_line
#     if org_stop_index > org_union_square
#       org_stop_index = @subway_line[org_line][:stops].reverse.index(org_stop)
#       org_union_square = @subway_line[org_line][:stops].reverse.index('Union Square')
#
#       first_trip =  @subway_line[org_line][:stops].reverse[org_stop_index..org_union_square]
#     elsif org_stop_index < org_union_square
#       first_trip = @subway_line[org_line][:stops][org_stop_index..org_union_square]
#     end
#     if des_stop_index > des_union_square
#       des_stop_index = @subway_line[des_line][:stops].reverse.index(des_stop)
#       des_union_square = @subway_line[des_line][:stops].reverse.index('Union Square')
#
#       second_trip = @subway_line[des_line][:stops].reverse[des_stop_index..des_union_square].reverse
#     elsif des_stop_index < des_union_square
#       second_trip = @subway_line[des_line][:stops][des_stop_index..des_union_square].reverse
#     end
#
#     p trip = (first_trip + second_trip).uniq
#     # @subway[org_line][org_stop_index..org_union_square]
#     # @subway[des_line][des_union_square..des_stop_index]
#
#   end
# end



# ############################ PSEUDO CODE ###############################
# get array of org_stop in org_line to 'Union Square'
# do same for des_stop in des_line
# add arrays together and uniq

# check if line is going forward or backwards. do reverse

def plan_trip (org_line,org_stop,des_line,des_stop)

  org_line = org_line.upcase
  des_line = des_line.upcase

  org_stop_index = @subway_line[org_line][:stops].index(org_stop)
  des_stop_index = @subway_line[des_line][:stops].index(des_stop)

  org_union_square = @subway_line[org_line][:stops].index('Union Square')
  des_union_square = @subway_line[des_line][:stops].index('Union Square')

  if org_stop_index > org_union_square
    org_stop_index = @subway_line[org_line][:stops].reverse.index(org_stop)
    org_union_square = @subway_line[org_line][:stops].reverse.index('Union Square')
    @subway_line[org_line][:stops].reverse!
  end

  if des_stop_index < des_union_square
    des_stop_index = @subway_line[des_line][:stops].reverse.index(des_stop)
    des_union_square = @subway_line[des_line][:stops].reverse.index('Union Square')
    @subway_line[des_line][:stops].reverse!
  end

  first_trip = @subway_line[org_line][:stops][org_stop_index..org_union_square]
  second_trip = @subway_line[des_line][:stops][des_union_square..des_stop_index]


  p first_trip
  p second_trip

  trip = (first_trip + second_trip).uniq
  p trip
end



  # @subway[:line_n].index('Times_Square')

  # p @subway[line][org_stop_index..des_stop_index]

  #
  # # p @subway[:line_n][2..5]
  # line = :line_n
  # o = 2
  # d = 5
  # p @subway[line][o..d]
# end
binding.pry

#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
