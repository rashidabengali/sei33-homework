require 'pry'
require 'rainbow'

# binding.pry

# # Bonus Challenge
#
# ## Do-It-Yourself Ruby REPL
#
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.
#
# ### Sample Session
#
# ```
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >
# ```

puts 'Welcome to Ruby REPL - by Victorz'

def running_repl
end

count = 0

print Rainbow("[#{ count }] vzREPL(main)> ").orange
action = gets.chomp

class String
  def is_i?
    !!(self =~ /\A[-+]?[0-9]+\z/)
  end
end

until action == 'q'
  if action.include? "+"
    char = action.split
    if char[0].is_i?
      puts " => #{Rainbow(char[0].to_i + char[2].to_i).mediumblue.bg(:orange)}"
    else
      puts " => \"#{Rainbow(char[0] + char[2]).indigo.bg(:orange)}\""
    end
  end

  if action.include? "-"
    num = action.split
    puts " => #{Rainbow(num[0].to_i - num[2].to_i).mediumblue.bg(:orange)}"
  end

  if action.include? "*"
    char = action.split
    if char[0].is_i?
      puts " => #{Rainbow(char[0].to_i * char[2].to_i).mediumblue.bg(:orange)}"
    else
      puts " => \"#{Rainbow(char[0].to_s * char[2].to_i).indigo.bg(:orange)}\""
    end
  end

  count += 1
  print Rainbow("[#{ count }] vzREPL(main)> ").orange
  action = gets.chomp
end
