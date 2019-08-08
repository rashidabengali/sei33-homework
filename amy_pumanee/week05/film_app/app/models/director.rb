# == Schema Information
#
# Table name: directors
#
#  id         :bigint           not null, primary key
#  name       :text
#  born       :date
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Director < ApplicationRecord
end
