# == Schema Information
#
# Table name: icons
#
#  id         :bigint           not null, primary key
#  name       :text
#  occupation :text
#  known      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Icon < ActiveRecord::Base
  belongs_to :note, :optional => true
end
