

subway = {
:n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
:l => ["8th", "6th", "Union Square", "3rd", "1st"],
6 => ["Grand Central", "33rd", "28th", "23rd6", "Union Square", "Astor Place"],
}



print "Where are you getting at? "
stationat = gets.chomp
puts stationat

print "Which line are you travelling? "
lineat = gets.chomp
puts lineat

print "Where are you getting off? "
stationoff = gets.chomp
puts stationoff


print "Which line are you finishing off at? "
lineoff = gets.chomp
puts lineoff

puts subway.keys[0]
puts subway.keys[1]
puts subway.keys[2]

newlineat = ''

if
lineat == "n"
newlineat = subway.keys[0]
elsif lineat == "l"
  newlineat = subway.keys[1]
else
  newlineat = subway.keys[2]
end

newlineoff = ''

if
lineoff == "n"
newlineoff = subway.keys[0]
elsif lineoff == "l"
  newlineoff = subway.keys[1]
else
  newlineoff = subway.keys[2]
end

puts newlineat

puts newlineoff

#
# ## indexes line off = line at
index_line_at = subway[newlineat].index(stationat)
index_line_off = subway[newlineoff].index(stationoff)
puts index_line_at
puts index_line_off
#
# ## IF THE LINE IS THE SAME
# ##index if the station is not reverse
if index_line_at < index_line_off
  same_line = subway[newlineat][index_line_at..index_line_off]
  print same_line
#
# ##index if the station is reverse
else
  same_line_reverse = subway[newlineat][index_line_off..index_line_at]
  print same_line_reverse.reverse!
#if you wanna acces it subway[:n][1]
end
###if we want to access another lines

#### positions of each UNION SQUARE
# pos0n = subway[newlineat]index("Union Square")
# pos0l = subway[:l][2]
# pos06 = subway[6][4]
#
# if lineat !== lineoff
#
#
# end
