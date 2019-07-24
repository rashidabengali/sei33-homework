# require "pry"
require "rainbow"

$subway = {
  :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :t6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  :L => ["8th", "6th", "Union Square", "3rd", "1st"]
}

def line_to_s(train_line)
  stops = ""
  train_line.each do |stop|
    if(train_line.index(stop) == train_line.size-1)
      stops += stop + "."
    else
      stops += stop + ","
    end
  end
  stops
end

def get_stops(line, index_start, index_end)
  if( index_start <= index_end )
    return $subway[line][index_start .. index_end]
  else
    return $subway[line][index_end .. index_start].reverse
  end
end


def plan_route(start_line, start_station, end_line, end_station)
   index_start = $subway[start_line].index(start_station)
   index_end = $subway[end_line].index(end_station)

   puts "Your journey will be through the following stops on the #{start_line} line: "

   if ( start_line == end_line )
     line_route = get_stops(start_line, index_start, index_end)
     puts Rainbow("#{start_line} line: #{line_to_s(line_route)}").green
     puts Rainbow("#{line_route.size} stops in total.").purple
   else
     start_line_route = get_stops(start_line, index_start, $subway[start_line].index('Union Square'))
     puts Rainbow("#{start_line} line: #{line_to_s(start_line_route)}").green
     puts "Change at Union Square."
     puts "Your journey continues through the following stops on the #{end_line} line:"
     end_line_route = get_stops(end_line, $subway[end_line].index('Union Square'), index_end)[1..]
     puts Rainbow("#{end_line} line: #{line_to_s(end_line_route)}").yellow
     puts Rainbow("#{start_line_route.size + end_line_route.size} stops in total.").purple
   end
end

puts "RUBY MTA".center(80)
puts "==" * 40

plan_route :N, '34th', :N, '23rd'
puts "==" * 40

plan_route :N, '23rd', :N, '34th'
puts "==" * 40

plan_route :N, 'Times Square', :t6, 'Grand Central'

# binding pry
