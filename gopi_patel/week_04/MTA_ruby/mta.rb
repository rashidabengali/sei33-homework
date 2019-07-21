

line_n = %w(Times_Square 34th  28th  23rd  Union_Square 8th)
line_l = %w(8th 6th Union_Square 3rd 1st)
line_6 = %w(Grand_Central 33rd 28th 23rd Union_Square Astor_Place)

def one_line l1, s1, s2
  stations = []
  index1 = l1.find_index (s1)
  index2 = l1.find_index (s2)
  while index1 != index2
    if index1 < index2
      index1 = index1 + 1
    else
      index1 = index1 - 1
    end
    stations.push l1[index1]
  end
  stations
end


def plan_trip l1, s1, l2, s2
  if l1 == l2
    one_line l1, s1, s2
  else
    line1_stations = one_line l1, s1, "Union_Square"
    puts "You must travel through the following stops on the n line: #{line1_stations.join(", ")}"
    puts "Change at Union Square"
    line2_stations = one_line l2, "Union_Square", s2
    puts "Your journey continues through the following stops: #{line2_stations.join(", ")}"
    total = line1_stations.length + line2_stations.length
    puts "#{total} stops in total."
  end
end

plan_trip line_n, "34th", line_l, "1st"
