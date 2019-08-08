# == Schema Information
#
# Table name: movies
#
#  id            :bigint           not null, primary key
#  title         :text
#  image         :text
#  year_released :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Movie < ActiveRecord::Base
  has_many :characters
end
