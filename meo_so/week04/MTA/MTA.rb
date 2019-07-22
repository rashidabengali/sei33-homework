require 'pry'
TRAIN_LINES = { 
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
# get array of single trip on a line
def one_trip (start_line, start_station, end_station)
    start_index = TRAIN_LINES[start_line].index(start_station)
    end_index =  TRAIN_LINES[start_line].index(end_station)
    return end_index > start_index ? TRAIN_LINES[start_line][start_index+1..end_index] : TRAIN_LINES[start_line][end_index...start_index].reverse
end

#calculate trip details
def plan_trip (start_line, start_station, end_line, end_station)
    trainList = TRAIN_LINES.keys
    if !trainList.include?(start_line) || !trainList.include?(end_line)   # check train line
        puts "Wrong train line, please enter valid train line"
    elsif !TRAIN_LINES[start_line].include?(start_station) || !TRAIN_LINES[end_line].include?(end_station)  #check station name
        puts "Wrong station name or does not exist"
    elsif start_line == end_line   # case of only travel 1 line
        one_line_trip = one_trip start_line, start_station, end_station
        puts "You must travel through the following stops on the N line: #{ one_line_trip.join(', ') }."
        puts "#{one_line_trip.size} stops in total."
    else   #full trip
        first_trip = one_trip start_line, start_station, "Union Square"
        sec_trip = one_trip end_line, "Union Square", end_station
        puts "You Must travel through the following stops on the #{start_line} line: #{first_trip.join(', ')}."
        puts "Change at Union Square."
        puts "Your jorney continues through the following stops: #{sec_trip.join(', ')}."
        puts "#{(first_trip.size + sec_trip.size)} stops in total."
    end 
end

# to get data from user
def input_trip
    puts "Please enter starting train line "
    start_line = gets.chomp.to_s.capitalize.to_sym
    puts "Please enter starting station "
    start_station = gets.chomp.to_s.split.map(&:capitalize)*' '
    puts "Please enter finish train line "
    end_line = gets.chomp.to_s.capitalize.to_sym
    puts "Please eneter finish station "
    end_station = gets.chomp.to_s.split.map(&:capitalize)*' '
    plan_trip start_line, start_station, end_line, end_station
end
input_trip