puts "Welcome to Ruby REPL"

print "> "
command = gets.chomp.downcase

until command == "exit"
    puts eval command
    print "> "
    command = gets.chomp.downcase
end