# version 1

# def scrabble_score word
#
#   letter_values = {
#     1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
#     2 => %w{D G},
#     3 => %w{B C M P},
#     4 => %w{F H V W Y},
#     5 => %w{K},
#     8 => %w{J X},
#     10 => %w{Q Z}
#   }
#
#   score = 0
#
#   word.upcase.each_char do |w|
#     letter_values.each do |key, value|
#       #puts "Key: #{key}, Value: #{value}"
#       if value.include? w
#         score += key
#       end
#     end
#   end
#
#   puts "The scrabble score for #{word} is #{score}"
#
# end
#
# scrabble_score "cabbage"


# Version 2

def scrabble_score word

  letter_values = {
    "A"=>1, "E"=>1, "I"=>1, "O"=>1, "U"=>1, "L"=>1, "N"=>1, "R"=>1, "S"=>1, "T"=>1, "D"=>2, "G"=>2, "B"=>3, "C"=>3, "M"=>3, "P"=>3, "F"=>4, "H"=>4, "V"=>4, "W"=>4, "Y"=>4, "K"=>5, "J"=>8, "X"=>8, "Q"=>10, "Z"=>10
    }

    score = 0

    word.upcase.each_char do |w|
      score += letter_values[w]
    end

    score

end

print "Type the word: "

input = gets.chomp

puts "The score for the word #{input} is #{scrabble_score input}"
