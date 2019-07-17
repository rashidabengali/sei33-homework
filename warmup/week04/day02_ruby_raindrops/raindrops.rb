# Version 1

# def raindrops number
#
#   string = ""
#
#   if number % 3 == 0
#     string += "Pling"
#   end
#
#   if number % 5 == 0
#     string += "Plang"
#   end
#
#   if number % 7 == 0
#     string += "Plong"
#   end
#
#   if string.length == 0
#     string = number.to_s
#   end
#
#   puts "The raindrops speak for #{number} is #{string}"
#
# end
#
# raindrops 28
# raindrops 1755
# raindrops 34

# Version 2
def raindrops number

  string = ""

  string += "Pling" if number % 3 == 0
  string += "Plang" if number % 5 == 0
  string += "Plong" if number % 7 == 0
  #string += number.to_s if string.length == 0
  string.empty? ? number.to_s : string

  #string

end

puts "The raindrops speak is #{raindrops 28}"
puts "The raindrops speak is #{raindrops 1755}"
puts "The raindrops speak is #{raindrops 34}"
