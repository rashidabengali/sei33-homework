# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  value      :integer
#  color      :text
#  issue      :date
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Note < ActiveRecord::Base
  has_many :icons
end
