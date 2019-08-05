class Atbash

  # attr_reader :input

  def initialize input
    @input = input
  end

  def encode
    output = ""
    alphabet = ("a".."z").to_a

    @input.split("").each do |letter|
      find_index = alphabet.index letter
      output += alphabet.reverse[find_index]
    end

    output
  end

end

string = Atbash.new("test")

p string.encode
