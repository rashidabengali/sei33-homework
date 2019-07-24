# == Schema Information
#
# Table name: players
#
#  id         :bigint           not null, primary key
#  name       :text
#  dob        :date
#  position   :text
#  image      :text
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Player < ActiveRecord::Base
  belongs_to :team, :optional => true
end
