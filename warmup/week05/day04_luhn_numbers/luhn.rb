class Luhn

  def initialize number
    @number = number
  end

  def luhnify

    all_numbers = []

    @number.digits.each_with_index do |digit, index|

      digit *=2 if index.odd?
      digit -= 9 if digit > 9
      all_numbers << digit
    end

    all_numbers.reverse

  end

  def valid?

    num = luhnify
    total = num.inject(0, :+)
    # total = num.reduce(0, :+)
    if total % 10 == 0
      puts "#{@number} is a valid luhn number"
    else
      make_luhn = @number + (10 - total % 10)
      puts "new total: #{total + (10 - total % 10)}"
      puts "#{make_luhn} would be a luhn number"
    end
  end

end

# l = Luhn.new(8763)
l = Luhn.new(1111)
l.valid?
