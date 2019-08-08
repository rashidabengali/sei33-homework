class Robot

  attr_reader :instruction_count

  def initialize
    @name = generate_name
    @instruction_count = 0
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def generate_name
    letters = ("A".."Z").to_a.sample(2)
    digits = ("000".."999").to_a.sample
    make_name = letters.join.concat(digits)
  end

  def get_name
    @instruction_count += 1
    @name
  end

  # def instruction_count
  #   @instruction_count
  # end

  def reset
    @instruction_count += 1
    @name = generate_name
    @reset_at = Time.now.to_i
  end

  def timers
    puts "#{Time.now.to_i - @reset_at} seconds since last reboot, #{Time.now.to_i - @created_at} seconds since last creation"
  end

end

robot1 = Robot.new

puts "|<o>|" * 20

p robot1.instruction_count
p robot1.get_name
p robot1.instruction_count

robot2 = Robot.new

puts "|<o>|" * 20

p robot2.instruction_count
p robot2.get_name
robot2.reset
p robot2.get_name
p robot2.instruction_count

robot3 = Robot.new

puts "|<o>|" * 20

p robot3.get_name
robot3.timers

sleep 3

robot3.reset
p robot3.get_name

sleep 3

robot3.timers
