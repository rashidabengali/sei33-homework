class Luhn

  def initialize number
    @number = number
  end

  def luhnify
    # @number = @number.to_s.reverse
    # puts "#{@number}"
    #
    # @number = @number.chars
    # puts "#{@number}"

    all_numbers = []

    # @number.digits
    # puts "#{@number}"

    @number.digits.each_with_index do |digit, index|
      if index.odd?
        digit *= 2
      end

      if digit > 9
        digit -= 9
      end

      all_numbers << digit

    end
    all_numbers.reverse
  end

  def valid?
    num = luhnify
    # total = 0
    # num.each do
    #   total += num
    # end

    total = num.inject(0, :+)

    if total % 10 == 0
      puts "#{@number} is a valid luhn number"
    else
      make_luhn = @number + (10 - total % 10)
      puts "new total: #{total + (10 - total % 10)}"
      puts "#{make_luhn} would be a valid luhn number"
    end
  end
end

l = Luhn.new(1111)
l.valid?
l = Luhn.new(8763)
l.valid?
