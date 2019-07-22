require './trainLines'

# 1 line of code or # 6 lines of code if I am being sensible
def getStops(stopA, stopB, cL) $count += (stopA - stopB).abs; stopA < stopB ? cL[stopA..stopB][1..-1].join(", ") : cL[stopB..stopA].reverse[1..-1].join(", ") end; def plan_trip(oL, o, dL, d) $count = 0; (oL == dL && o == d) ? puts("You are already at your destination ya dummy") : puts("You must travel through the following stops on the #{oL} line: #{getStops($L[oL].index(o), $L[oL].index(oL == dL ? d : "Union Square"), $L[oL])}."); puts "Change at Union Square.\nYour journey continues through the following stops: #{getStops($L[dL].index("Union Square"), $L[dL].index(d), $L[dL])}." if oL != dL; puts "#{$count} stops in total." end
# 1 line of code or # 6 lines of code if I am being sensible




#############
# puts "Your journey continues through the following stops: #{getStops($L[dL].index("Union Square"), $L[dL].index(d), $L[dL])}." if oL != dL;
