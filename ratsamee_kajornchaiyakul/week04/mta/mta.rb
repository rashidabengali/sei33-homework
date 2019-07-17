$UNIONSQUARE = 'Union Square'
$routes =
    {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th","6th", "Union Square", "3rd","1st"],
    "6" => ["Grand Central","33rd","28th","23rd", "Union Square","Astor Place"]
    }

# The result should be below
# route = {
#     "N" => ["Times Square", "34th", "28th", "23rd", "Union Square"],
#     "6" => ["Astor Place"]
# }

def find_the_route start_line_name, start_station_name, destination_line_name, destination_station_name
    array_line = $routes[start_line_name]
    route = []

    if array_line.nil?
        route = nil
    else
        index_start = array_line.index {|station| station ==  start_station_name }
        index_destination = array_line.index { |station| station == destination_station_name }
        if index_start.nil? || index_destination.nil?
            route = nil
        else
            if index_start > index_destination
                route = array_line[index_destination..index_start].reverse
            else
                route = array_line[index_start..index_destination]
            end
            route.shift
        end
    end

    route
end

def plan_trip start_line_name, start_station_name, destination_line_name, destination_station_name
    start_line_name = start_line_name.upcase
    destination_line_name = destination_line_name.upcase

    route = {}
    if start_line_name == destination_line_name
        # direct line
        route[start_line_name] = find_the_route start_line_name, start_station_name, destination_line_name, destination_station_name
    else
        # go to union square
        route[start_line_name] = find_the_route start_line_name, start_station_name, start_line_name, UNIONSQUARE
        
        if !route[start_line_name].nil?
            # start from union square to destination
            interchange_route = find_the_route destination_line_name, UNIONSQUARE, destination_line_name, destination_station_name
            
            if !interchange_route.nil?
                route[destination_line_name] = interchange_route
            end
        end

    end
    # p route
    print_result route, start_line_name
end

def print_result route, start_line_name
    first_time = true
    total = 0
    route.each do | line, stations |
        if stations.nil? 
            puts "Please check your start and your destination."
            total = nil
        else
            if first_time 
                if stations.size > 0
                    puts "You must travel through the following stops on the #{ line } line: #{ stations.join(", ") }."
                else
                    puts "Your start and destination is same station."
                end
                first_time = false
            else
                puts "Change at Union Square."
                puts "Your journey continues through the following stops: #{ stations.join(", ")}."
            end
            total += stations.size
        end
    end
    if !total.nil?
        puts "#{total} stops in total."
    end
end

# plan_trip 'N', 'Times Square', 'N', '8th'
# puts "+-" * 40
# plan_trip 'N', 'Times Square', '6', '33rd'
# puts "+-" * 40
# plan_trip 'L', '1st', 'L', '6th'
# puts "+-" * 40
# plan_trip 'L', '1st', '6', 'Astor Place'
# puts "+-" * 40
# plan_trip '6', '33rd', 'L', '3rd'
# puts "+-" * 40
# # plan_trip 'n', 'Times Square', 'n', '23rd'
plan_trip 'L', '6th', 'L', '6th'
puts "+-" * 40
# plan_trip 'r', 'Times Square', 'n', '23rd'
# puts "+-" * 40
# plan_trip 'L', '3rd', 'L', '33rd'