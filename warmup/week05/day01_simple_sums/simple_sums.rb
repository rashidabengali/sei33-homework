class SimpleSums

  def initialize number # Here the number is local, we need to give it a global scope to use in other methods
    @number = number
  end

  def number # get the number
    @number
  end

  def s1
    # sum_s1 = @number % 2
    # sum_s1
    @number % 2
  end

  def s2
    # sum_s2 = (@number * (@number + 1)) / 2
    # sum_s2 = (1..@number).sum
    # sum_s2
    (1..@number).sum
  end

end

sum = SimpleSums.new(4) # When the new method is called on a class, the class will create a new instance of itself. It will then internally call the method initialize and pass on the arguments from the method new to the method initialize

p sum.number
p sum.s1
p sum.s2
