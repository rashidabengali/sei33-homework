# class Atbash
#
#   # attr_reader :input
#
#   def initialize input
#     @input = input
#   end
#
#   def encode
#     output = ""
#     alphabet = ("a".."z").to_a
#
#     @input.split("").each do |letter|
#       find_index = alphabet.index letter
#       output += alphabet.reverse[find_index]
#     end
#
#     output
#   end
#
# end
#
# string = Atbash.new("test")
#
# p string.encode

class Calculator

  def initialize question

    @question = question
    match

  end

  def match

    @match = @question.match(/(\d+) (plus|minus|divided|multiplied) (\d+)/)

  end

  def first_number

    @match[1].to_i

  end

  def second_number

    @match[3].to_i

  end

  def operation

    case @match[2]
      when "plus" then :+
      when "minus" then :-
      when "divided" then :/
      when "multiplied" then :*
    end

  end

  def answer
    # @answer = @match[1].to_i.send(operation, @match[3].to_i)
      # @answer = eval("#{@match[1]} #{operation} #{@match[3]}")
      @answer = "#{operation}"
  end

end

query = Calculator.new("What is 5 plus 5?")

p query.answer





# class Calculator
#
#   def initialize question
#     @question = question
#     matches
#   end
#
#   def matches
#     @matches = @question.match(/(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/)
#     @matches
#   end
#
#   def first_number
#     @matches[1].to_i
#   end
#
#   def operation
#     case @matches[2]
#       when "plus" then :+
#       when "minus" then :-
#       when "divided by" then :/
#       when "multiplied by" then :*
#     end
#   end
#
#   def second_number
#     @matches[3].to_i
#   end
#
#   def answer
#     # @answer = first_number.send(operation, second_number)
#     @answer = eval("#{@matches[1]} #{operation} #{@matches[3]}")
#   end
#
# end
#
# c = Calculator.new("What is 10 divided by 2")
# d = Calculator.new("Siri what is -10 multiplied by -162")

# puts c.first_number
# puts c.operation
# puts c.second_number
# puts c.answer
# puts d.answer
