$lines = {
  :N => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  :L => [ "8th", "6th", "Union Square", "3rd", "1st" ],
  6 => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

#def route
  # print "What's the starting line "
  # line_1 = gets.chomp
  # print "what's the starting station "
  # start_1 = gets.chomp
  # print "What's the ending line "
  # line_2 = gets.chomp
  # print "what's the ending station "
  # start_2 = gets.chomp


  stops_1 = []
  stops_2 = []
  print "#{stops_1} before the empty array"

#def route(line1, start1, line2, start2)
def route(line1, start1)

  i = $lines.length[line1][start1]

  x = $lines.length[line1]["Union Square"]

  #ii = $lines.length[line2][start2]

  #xx = $lines.length[line2]["Union Square"]

  until i >= x  do
    if i < x
        loop do
          i += 1
            stops_1 << $lines[line1][i]
          end
        end
  print "#{stops_1} before first until"
  until i <= x  do
    if i > x
        loop do
          i -= 1
            stops_1 << $lines[line1][i]
        end
      end
  print "#{stops_1} before second until"

    # until ii >= xx  do
    #   if ii < xx
    #       loop do
    #         ii += 1
    #           stops_2 << $lines[line2][ii]
    #         end
    #       end
    #
    #
    # until ii <= xx  do
    #   if ii > xx
    #       loop do
    #         ii -= 1
    #           stops_2 << $lines[line2][ii]
          end
  print "#{stops_1} above route"

route($lines[:N], $lines[:N][0])
#route(:N, "Times Square")

  print "#{stops_1} below route"
# route N, "Times Square", L, "1st"
#end
#print `#{stops_1 + stops_2}`
end
end
