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

# def point_mutations (string_one, string_two)

  # list = (0...string_one.size).select do |i|
  #     string_one[i] != string_two[i]
  #   end
  #
  #   p list.length

#   p (0...string_one.size).select { |i| string_one[i] != string_two[i] }.length
#
# end
#
# point_mutations "GAGCCTACTAACGGGA", "CATCGTAATGACGGCCT"

# Mee's Solution

# def point_mutations string1, string2
#   index = 0;
#   hamming_distance = 0;
#   string1Split = string1.split("")
#   string2Split = string2.split("")
#   until index == string1.length
#     hamming_distance += 1 if string1Split[index] != string2Split[index]
#     index += 1
#   end
#   puts hamming_distance
# end
#
# point_mutations 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'


h = {a: 1, b: 2}

p h.keys

x = 7

def seven (input)
  puts x
end

seven x
