# version 1
# def count_nucleotides string
#
#   count = {
#     "A" => 0,
#     "C" => 0,
#     "G" => 0,
#     "T" => 0
#   }
#
#   dna = []
#
#   string.upcase.each_char do |letter|
#
#     is_nucleotide = false
#
#     count.each do |key, value|
#       if letter == key
#         count[key] += 1
#         is_nucleotide = true
#       end
#     end
#     if is_nucleotide == false
#       dna << "#{letter} is not a nucleotide"
#     end
#   end
#
#   count.each do |key, value|
#     dna << "#{key}: #{value}"
#   end
#
#   puts dna.uniq
#
# end
#
#
# count_nucleotides "QWEYUUUUUAGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"


# verison 2

def count_nucleotides string

  dna = []

  count = {
      "Unknown" => 0,
      "A" => 0,
      "C" => 0,
      "G" => 0,
      "T" => 0
    }

    string.upcase.each_char do |letter|
      if count.key? letter
        count[letter] += 1
      else
        count["Unknown"] +=1
        dna << "#{letter} is not a nucleotide"
      end
    end #string end

    count.each do |key, value|
      dna << "#{key}: #{value}"
    end #count end

    puts dna.uniq

end

print "Enter string: "

input = gets.chomp

count_nucleotides input
