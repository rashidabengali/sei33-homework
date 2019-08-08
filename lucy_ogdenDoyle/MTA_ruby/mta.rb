

def planTrip startLine, startStop, endLine, endStop
LINES.each do |l|
  if l[:name] == startLine
    startLine = l
  end
  if l[:name] == endLine
  endLine = l
  end
end

  #check if the stops are on the same lines
  if startLine[:name] == endLine[:name]
    if startStop === endStop
      puts "Only one stop, you have arrived."
    else
      tripOne = tripToDestination(startLine[:stops], endStop, startStop)
      # print the stops in order
      #puts "same line"
      puts "You must travel through the following stops on the #{startLine[:name]} line: #{tripOne.join(", ")}."

      puts "#{tripOne.length} stops in total."
    end
  else
    #if not the same line:
    # In the start line, how many stops from startStop Union Square
    tripOne = tripToTransfer startLine[:stops], startStop

    # in the endLine, how many stops from Union Square to endStop
    tripTwo = tripToDestination endLine[:stops], endStop

    #join the first array with the second array, to give list of stops
    trip = tripOne + tripTwo


    # print the stops in order
    puts "You must travel through the following stops on the #{startLine[:name]} line: #{tripOne.join(", ")}."

    puts "Change at Union Square."

    puts "Your journey continues through the following stops on the #{endLine[:name]} line: #{tripTwo.join(", ")}."

    puts "#{trip.length} stops in total."
    # add them together
  end
puts "====================="
end




def tripToTransfer startLine, startStop, transfer="Union Square"
  startStopIndex =  startLine.index(startStop) + 1
  transferStopIndex = startLine.index(transfer)
  if startStopIndex > transferStopIndex
    #puts "s #{startStopIndex}, d #{transferStopIndex}, t #{start}"
    trip = []
    startStopIndex.downto(transferStopIndex) do |n|
      trip.push(startLine[n])
    end
  else
    trip = startLine[startStopIndex..transferStopIndex]
  end
  p trip
  return trip
end

def tripToDestination startLine, destination, start="Union Square"
  startStopIndex = startLine.index(start) - 1
  destStopIndex = startLine.index(destination)
  if startStopIndex > destStopIndex
    #puts "s #{startStopIndex}, d #{destStopIndex}, t #{start}"
    trip = []
    startStopIndex.downto(destStopIndex) do |n|
      trip.push(startLine[n])
    end
    #trip = startLine[startStopIndex..destStopIndex]
  else
    trip = startLine[startStopIndex..destStopIndex]
  end
  return trip
end


LINES = []
def subwayLine lineName, stops
  line = {
    :name => lineName,
    :stops => stops
  }
  LINES.push(line)
  line
end

subwayLine "N", ["Times Square",
"34th",
"28th",
"23rd",
"Union Square",
"8th"]



subwayLine "L", ["8th",
"6th",
"Union Square",
"3rd",
"1st"]

subwayLine "6", ["Grand Central",
"33rd",
"28th",
"23rd",
"Union Square",
"Astor Place"]

#p tripToDestination(LINES[1][:stops], "8th")
# p tripToDestination(LINES[1][:stops], "8th", "Union Square")

#p planTrip("N", "Times Square", "6", "Grand Central")

p planTrip("N", "Times Square", "6", "33rd")
#p planTrip("6", "Union Square", "6", "Grand Central")
