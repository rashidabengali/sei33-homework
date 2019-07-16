lines = {
  N => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  L => [ "8th", "6th", "Union Square", "3rd", "1st" ],
  6 => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def route(line1, start1, line2, start2)
  print "What's the starting line "
  line_1 = gets.chomp
  print "what's the starting station "
  start_1 = gets.chomp
  print "What's the ending line "
  line_2 = gets.chomp
  print "what's the ending station "
  start_2 = gets.chomp


  stops_1 = []
  stops_2 = []

if lines.length.[line1][start1] < lines.length.[line1]["Union Square"]
  i = lines.length.[line1][start1] + 1
  loop do
    i += 1
    until i >= lines.length.[line1]["Union Square"] + 1
      stops_1 << lines[line1][i]
    end

if lines.length.[line1][start1] > lines.length.[line1]["Union Square"]
    i = lines.length.[line1][start1] + 1
    loop do
      i -=
      until i <= lines.length.[line1]["Union Square"] + 1
        stops_1 << lines[line1][i]
    end

    if lines.length.[line2][start2] < lines.length.[line2]["Union Square"]
      i = lines.length.[line2][start2] + 1
      loop do
        i += 1
        until i >= lines.length.[line2]["Union Square"] + 1
          stops_2 << lines[line2][i]
        end

    if lines.length.[line2][start2] > lines.length.[line2]["Union Square"]
        i = lines.length.[line2][start2] + 1
        loop do
          i -=
          until i <= lines.length.[line2]["Union Square"] + 1
            stops_2 << lines[line2][i]
        end


  end
end
