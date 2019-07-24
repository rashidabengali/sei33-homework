class SecretNumberController < ApplicationController

  def form
  end

  def info
    @secret_number = rand 1..10
  end

end
