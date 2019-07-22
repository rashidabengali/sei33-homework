require 'pry'
# # MTA Lab

print 'Origin: Line [N] [L] [6]: '

@subway_line = {
  'N' => { :stops => [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ]},
  'L' => { :stops => [ '8th', '6th', 'Union Square', '3rd', '1st' ]},
  '6' => { :stops => [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]}
}

p @subway_line


# ############################ PSEUDO CODE ###############################
# get array of org_stop in org_line to 'Union Square'
# do same for des_stop in des_line
# add arrays together and uniq

# check if line is going forward or backwards. do reverse

def plan_trip (org_line,org_stop,des_line,des_stop)

  # origin line and destination line
  org_line = org_line.upcase
  des_line = des_line.upcase


  # get index numbers for the stops from the Hash @subway_line
  org_stop_index = @subway_line[org_line][:stops].index(org_stop)
  des_stop_index = @subway_line[des_line][:stops].index(des_stop)

  org_union_square = @subway_line[org_line][:stops].index('Union Square')
  des_union_square = @subway_line[des_line][:stops].index('Union Square')


  # if train going in backwards direction
  if org_stop_index > org_union_square
    # reverse array of stops
    @subway_line[org_line][:stops].reverse!

    # get index of origin stop and Union Square
    # reverse so that when getting range, org_stop will have a lower index
    org_stop_index = @subway_line[org_line][:stops].index(org_stop)
    org_union_square = @subway_line[org_line][:stops].index('Union Square')
  end

  if des_stop_index < des_union_square
    # reverse array of stops
    @subway_line[des_line][:stops].reverse!
    des_stop_index = @subway_line[des_line][:stops].index(des_stop)
    des_union_square = @subway_line[des_line][:stops].index('Union Square')
  end

  first_trip = @subway_line[org_line][:stops][org_stop_index..org_union_square]
  second_trip = @subway_line[des_line][:stops][des_union_square..des_stop_index]


  p first_trip
  p second_trip

  trip = (first_trip + second_trip).uniq
  p trip
end


binding.pry
