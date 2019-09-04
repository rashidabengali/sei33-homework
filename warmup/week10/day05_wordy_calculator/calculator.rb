class Calculator

  def initialize question
    @question = question
    match
  end

  def match
    @match = @question.match(/(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/)
  end

  def operation
    case @match[2]
    when "plus" then :+
    when "minus" then :-
    when "divided by" then :/
    when "multiplied by" then :*
    end
  end

  def answer
    # @answer = @match[1].to_i.send(operation, @match[3].to_i)
    @answer = eval("#{@match[1].to_i} #{operation} #{@match[3].to_i}")

  end

end

# query = Calculator.new("What is 5 plus 5?")

query = Calculator.new("What is 5 minus 5?")

p query.answer
