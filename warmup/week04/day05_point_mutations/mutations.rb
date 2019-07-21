# version 1

# def point_mutations (string_one, string_two)
#
#   hamming_distance = 0
#
#   string_one.upcase.chars.each_with_index do |letter, index|
#
#     if letter != string_two[index]
#       hamming_distance +=1
#     end
#
#   end
#
#   p hamming_distance
#
# end

# point_mutations "GAGCCTACTAACGGGA", "CATCGTAATGACGGCCT"

# version 2

def point_mutations (string_one, string_two)

  # list = (0...string_one.size).select do |i|
  #     string_one[i] != string_two[i]
  #   end
  #
  #   p list.length

  p (0...string_one.size).select { |i| string_one[i] != string_two[i] }.length

end

point_mutations "GAGCCTACTAACGGGA", "CATCGTAATGACGGCCT"
