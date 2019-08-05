# frozen_string_literal: true

class Brand < ApplicationRecord
  belongs_to :electronics, required: false
end
