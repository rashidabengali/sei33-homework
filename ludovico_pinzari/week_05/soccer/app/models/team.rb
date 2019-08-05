# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  name       :text
#  coach      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ActiveRecord::Base
  has_many :players
end
