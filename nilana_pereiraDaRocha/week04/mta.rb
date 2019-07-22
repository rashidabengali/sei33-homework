
# // train lines
def plan_trip (line1, stop1, line2, stop2) 
    lines = {
        "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
        "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }
        
    intersection_point = 'Union Square'

    # // Get the program to work for a single line before trying to tackle multiple lines.
    if line1 == line2
        first_line_stop = lines[line1] # lines.N
        count1 = first_line_stop.index(stop1) # 0 
        # //index() I used it to returns the first index at which a given element(stop1)

        second_line_stop = lines[line2] #lines.N
        count2 = second_line_stop.index(stop2) #?
        stops_count = count2 - count1

        stop_complement = ''
        if stops_count > 1 
            stop_complement = 's'
        end

        # // create a array started with the smaller number 
        start_array = 0
        end_array = 0
        stops = []

        if count2 > count1
            start_array = count1 + 1
            end_array = count2 + 1
            stops = second_line_stop [start_array..end_array] 
        else 
            start_array = count2
            end_array = count1
            stops = second_line_stop [start_array..end_array].reverse
            # used reverse to The first array element becomes the last, and the last array element 
            # becomes the first. 
        
        end
        puts"
You must travel through the following stops on the #{line1} line: #{stops.join(", ")}.
#{stops.length} stop#{stop_complement} in total."

    # // we need to change lines
    else 
        first_line_stop = lines[line1] # lines.N
        count1 = first_line_stop.index(stop1) # 0
        intersection_index = first_line_stop.index(intersection_point) # 0
        moving_ahead = count1 > intersection_index

        if (moving_ahead) 
            stops = first_line_stop.slice(intersection_index, count1 + 1).reverse
         else 
            stops = first_line_stop.slice(count1 + 1, intersection_index + 1)
        end

        second_line_stop = lines[line2] # lines.N
        intersection_index2 = second_line_stop.index(intersection_point) # ?
        count2 = second_line_stop.index(stop2) # ?

        # // criamos o array sempre começando pelo menor numero

        stops2 = []
        moving_ahead2 = count2 > intersection_index2


        if moving_ahead2
            stops2 = second_line_stop [(intersection_index2 + 1)..(count2 + 1)]
        else 
            stops2 = second_line_stop [count2..intersection_index2].reverse
        end

        quantity = stops.size + stops2.size

        puts "
You must travel through the following stops on the #{line1} line: #{stops.join(", ")}.
Change at Union Square.
Your journey continues through the following stops: #{stops2.join(", ")}.
#{quantity} stops in total."

        # // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by 
        # // commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    end
end

plan_trip "N", "Times Square", "6", "33rd"
plan_trip "N", "23rd", "N", "Times Square"
plan_trip "N", "Times Square", "6", "Astor Place"
plan_trip "N", "Times Square", "N", "34th"
